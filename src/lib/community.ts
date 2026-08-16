import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type MemberProfile = {
  id: string;
  display_name: string;
  avatar_url: string | null;
  job_title: string | null;
  industry: string | null;
  working_on: string | null;
  bio: string | null;
  founding_number: number | null;
  created_at: string;
};

export type Post = {
  id: string;
  author_id: string;
  week: number | null;
  title: string | null;
  body: string;
  pinned: boolean;
  created_at: string;
};

export type Reply = {
  id: string;
  post_id: string;
  author_id: string;
  body: string;
  created_at: string;
};

export type Reaction = { id: string; post_id: string; user_id: string; emoji: string };

export type StudyGroup = {
  id: string;
  name: string;
  description: string | null;
  focus: string | null;
  created_by: string | null;
  created_at: string;
};

export type GroupMember = { id: string; group_id: string; user_id: string };
export type GroupMessage = { id: string; group_id: string; author_id: string; body: string; created_at: string };

export type CapstoneProject = {
  id: string;
  author_id: string;
  title: string;
  summary: string;
  link: string | null;
  created_at: string;
};

export type Kudos = { id: string; project_id: string; user_id: string; comment: string | null };

export async function currentUserId() {
  const { data } = await supabase.auth.getUser();
  return data.user?.id ?? null;
}

export function useMembers() {
  return useQuery({
    queryKey: ["community", "members"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("community_profiles")
        .select("*")
        .order("founding_number", { ascending: true, nullsFirst: false })
        .order("created_at", { ascending: true });
      if (error) throw error;
      return (data ?? []) as MemberProfile[];
    },
  });
}

export function useMemberMap() {
  const q = useMembers();
  const map = new Map<string, MemberProfile>();
  for (const m of q.data ?? []) map.set(m.id, m);
  return map;
}

export function useMyMemberProfile() {
  return useQuery({
    queryKey: ["community", "me"],
    queryFn: async () => {
      const uid = await currentUserId();
      if (!uid) return null;
      const { data, error } = await supabase.from("community_profiles").select("*").eq("id", uid).maybeSingle();
      if (error) throw error;
      return (data as MemberProfile) ?? null;
    },
  });
}

export function useSaveMemberProfile() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (values: Partial<MemberProfile>) => {
      const uid = await currentUserId();
      if (!uid) throw new Error("Not signed in");
      const { error } = await supabase
        .from("community_profiles")
        .upsert({ id: uid, display_name: values.display_name ?? "Member", ...values })
        .eq("id", uid);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["community"] });
    },
  });
}

export function usePosts() {
  return useQuery({
    queryKey: ["community", "posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("community_posts")
        .select("*")
        .order("pinned", { ascending: false })
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Post[];
    },
  });
}

export function useReplies() {
  return useQuery({
    queryKey: ["community", "replies"],
    queryFn: async () => {
      const { data, error } = await supabase.from("community_replies").select("*").order("created_at");
      if (error) throw error;
      return (data ?? []) as Reply[];
    },
  });
}

export function useReactions() {
  return useQuery({
    queryKey: ["community", "reactions"],
    queryFn: async () => {
      const { data, error } = await supabase.from("community_reactions").select("*");
      if (error) throw error;
      return (data ?? []) as Reaction[];
    },
  });
}

export function useCommunityMutation<T>(fn: (v: T) => Promise<void>) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: fn,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["community"] });
    },
  });
}

export function useStudyGroups() {
  return useQuery({
    queryKey: ["community", "groups"],
    queryFn: async () => {
      const [groups, members, messages] = await Promise.all([
        supabase.from("study_groups").select("*").order("created_at"),
        supabase.from("study_group_members").select("*"),
        supabase.from("study_group_messages").select("*").order("created_at"),
      ]);
      if (groups.error) throw groups.error;
      if (members.error) throw members.error;
      if (messages.error) throw messages.error;
      return {
        groups: (groups.data ?? []) as StudyGroup[],
        members: (members.data ?? []) as GroupMember[],
        messages: (messages.data ?? []) as GroupMessage[],
      };
    },
  });
}

export function useShowcase() {
  return useQuery({
    queryKey: ["community", "showcase"],
    queryFn: async () => {
      const [projects, kudos] = await Promise.all([
        supabase.from("capstone_projects").select("*").order("created_at", { ascending: false }),
        supabase.from("capstone_kudos").select("*"),
      ]);
      if (projects.error) throw projects.error;
      if (kudos.error) throw kudos.error;
      return {
        projects: (projects.data ?? []) as CapstoneProject[],
        kudos: (kudos.data ?? []) as Kudos[],
      };
    },
  });
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
}

export function timeAgo(iso: string) {
  const s = Math.max(1, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}