import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { AppShell } from "@/components/AppShell";
import { supabase } from "@/integrations/supabase/client";
import { weeks } from "@/content/curriculum";
import {
  currentUserId,
  initials,
  timeAgo,
  useCommunityMutation,
  useMemberMap,
  useMembers,
  useMyMemberProfile,
  usePosts,
  useReactions,
  useReplies,
  useSaveMemberProfile,
  useShowcase,
  useStudyGroups,
  type CapstoneProject,
  type MemberProfile,
  type Post,
} from "@/lib/community";
import { Award, Pin, Sparkles, Users, X } from "lucide-react";

export const Route = createFileRoute("/_authenticated/community")({
  head: () => ({
    meta: [
      { title: "Community — 12-Week MBA" },
      { name: "description", content: "Meet your cohort: member directory, module discussions, study groups and the capstone showcase." },
      { property: "og:title", content: "Community — 12-Week MBA" },
      { property: "og:description", content: "Network with fellow students, discuss each module and showcase your capstone." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CommunityPage,
});

function useUid() {
  return useQuery({ queryKey: ["community", "uid"], queryFn: currentUserId }).data ?? null;
}

function Avatar({ member, size = 40 }: { member?: MemberProfile; size?: number }) {
  const name = member?.display_name ?? "Member";
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm font-semibold text-foreground/70"
      style={{ width: size, height: size }}
    >
      {member?.avatar_url ? (
        <img src={member.avatar_url} alt={name} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        initials(name)
      )}
    </div>
  );
}

function FoundingBadge({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
      <Award className="h-3 w-3" /> Founding #{n}
    </span>
  );
}

function Modal({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-0 sm:items-center sm:p-6" onClick={onClose}>
      <div
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-border bg-card p-6 shadow-lg sm:rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" className="float-right rounded-full p-1 hover:bg-accent">
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
}

const tabs = [
  { id: "directory", label: "Member directory" },
  { id: "feed", label: "Discussion feed" },
  { id: "groups", label: "Study groups" },
  { id: "showcase", label: "Capstone showcase" },
] as const;

function CommunityPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("directory");
  const { data: me, isLoading } = useMyMemberProfile();
  const [editing, setEditing] = useState(false);

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <Users className="h-7 w-7 text-primary" />
              <h1 className="text-3xl font-semibold tracking-tight">Community</h1>
            </div>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Your cohort. Meet the people learning alongside you, debate the modules, form study groups and publish your capstone.
            </p>
          </div>
          <button
            onClick={() => setEditing(true)}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {me ? "Edit my profile" : "Create my profile"}
          </button>
        </div>

        {!isLoading && !me && (
          <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
            You're not in the directory yet. Add a short profile so the rest of the cohort can find you.
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-1 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={
                "-mb-px border-b-2 px-4 py-2 text-sm font-medium transition-colors " +
                (tab === t.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground")
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === "directory" && <Directory />}
          {tab === "feed" && <Feed />}
          {tab === "groups" && <Groups />}
          {tab === "showcase" && <Showcase />}
        </div>
      </div>

      {editing && <ProfileEditor profile={me ?? null} onClose={() => setEditing(false)} />}
    </AppShell>
  );
}

function ProfileEditor({ profile, onClose }: { profile: MemberProfile | null; onClose: () => void }) {
  const save = useSaveMemberProfile();
  const [form, setForm] = useState({
    display_name: profile?.display_name ?? "",
    job_title: profile?.job_title ?? "",
    industry: profile?.industry ?? "",
    working_on: profile?.working_on ?? "",
    bio: profile?.bio ?? "",
    avatar_url: profile?.avatar_url ?? "",
  });
  const field = (k: keyof typeof form, label: string, placeholder: string, textarea = false) => (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      {textarea ? (
        <textarea
          rows={3}
          value={form[k]}
          placeholder={placeholder}
          onChange={(e) => setForm({ ...form, [k]: e.target.value })}
          className="mt-1 w-full rounded-md border border-input bg-background p-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      ) : (
        <input
          value={form[k]}
          placeholder={placeholder}
          onChange={(e) => setForm({ ...form, [k]: e.target.value })}
          className="mt-1 w-full rounded-md border border-input bg-background p-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      )}
    </label>
  );
  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold">Your community profile</h2>
      <div className="mt-4 space-y-3">
        {field("display_name", "Name", "Jane Doe")}
        {field("job_title", "Job title", "Operations lead")}
        {field("industry", "Industry", "Healthcare")}
        {field("working_on", "What I'm here to build", "A clinic scheduling business")}
        {field("avatar_url", "Photo URL (optional)", "https://…")}
        {field("bio", "About me", "A couple of sentences…", true)}
      </div>
      <button
        disabled={!form.display_name.trim() || save.isPending}
        onClick={async () => {
          await save.mutateAsync({
            display_name: form.display_name.trim(),
            job_title: form.job_title || null,
            industry: form.industry || null,
            working_on: form.working_on || null,
            bio: form.bio || null,
            avatar_url: form.avatar_url || null,
          });
          onClose();
        }}
        className="mt-5 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
      >
        {save.isPending ? "Saving…" : "Save profile"}
      </button>
    </Modal>
  );
}

function Directory() {
  const { data: members = [], isLoading } = useMembers();
  const [q, setQ] = useState("");
  const [industry, setIndustry] = useState("all");
  const [open, setOpen] = useState<MemberProfile | null>(null);

  const industries = useMemo(
    () => Array.from(new Set(members.map((m) => m.industry).filter(Boolean) as string[])).sort(),
    [members],
  );
  const filtered = members.filter((m) => {
    const hay = `${m.display_name} ${m.job_title ?? ""} ${m.industry ?? ""} ${m.working_on ?? ""}`.toLowerCase();
    return hay.includes(q.toLowerCase()) && (industry === "all" || m.industry === industry);
  });

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, industry or interest…"
          className="min-w-0 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="all">All industries</option>
          {industries.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      {isLoading && <p className="mt-6 text-sm text-muted-foreground">Loading members…</p>}
      {!isLoading && filtered.length === 0 && (
        <p className="mt-6 text-sm text-muted-foreground">No members match yet — be the first to add your profile.</p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <button
            key={m.id}
            onClick={() => setOpen(m)}
            className="rounded-xl border border-border bg-card p-5 text-left transition-colors hover:border-primary/50"
          >
            <div className="flex items-center gap-3">
              <Avatar member={m} size={44} />
              <div className="min-w-0">
                <div className="truncate font-medium">{m.display_name}</div>
                <div className="truncate text-xs text-muted-foreground">
                  {[m.job_title, m.industry].filter(Boolean).join(" · ") || "Student"}
                </div>
              </div>
            </div>
            {m.working_on && <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{m.working_on}</p>}
            {m.founding_number && (
              <div className="mt-3">
                <FoundingBadge n={m.founding_number} />
              </div>
            )}
          </button>
        ))}
      </div>

      {open && <MemberModal member={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

function MemberModal({ member, onClose }: { member: MemberProfile; onClose: () => void }) {
  const uid = useUid();
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const connect = useCommunityMutation(async (body: string) => {
    if (!uid) throw new Error("Not signed in");
    const { error } = await supabase
      .from("connection_requests")
      .upsert({ from_user: uid, to_user: member.id, message: body || null }, { onConflict: "from_user,to_user" });
    if (error) throw error;
  });

  return (
    <Modal onClose={onClose}>
      <div className="flex items-center gap-4">
        <Avatar member={member} size={64} />
        <div>
          <h2 className="text-xl font-semibold">{member.display_name}</h2>
          <p className="text-sm text-muted-foreground">
            {[member.job_title, member.industry].filter(Boolean).join(" · ") || "Student"}
          </p>
        </div>
      </div>
      {member.founding_number && (
        <div className="mt-4">
          <FoundingBadge n={member.founding_number} />
          <p className="mt-2 text-sm text-muted-foreground">
            One of the first ten members — their early feedback helped shape this course.
          </p>
        </div>
      )}
      {member.working_on && (
        <div className="mt-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Here to build</div>
          <p className="mt-1 text-sm">{member.working_on}</p>
        </div>
      )}
      {member.bio && <p className="mt-4 whitespace-pre-wrap text-sm text-muted-foreground">{member.bio}</p>}

      {uid !== member.id && (
        <div className="mt-6 border-t border-border pt-4">
          {sent ? (
            <p className="text-sm text-primary">Connection request sent.</p>
          ) : (
            <>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Say hello to ${member.display_name.split(" ")[0]}…`}
                className="w-full rounded-md border border-input bg-background p-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                disabled={connect.isPending}
                onClick={async () => {
                  await connect.mutateAsync(message);
                  setSent(true);
                }}
                className="mt-3 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
              >
                {connect.isPending ? "Sending…" : "Send connection request"}
              </button>
            </>
          )}
        </div>
      )}
    </Modal>
  );
}

function Feed() {
  const uid = useUid();
  const memberMap = useMemberMap();
  const { data: posts = [], isLoading } = usePosts();
  const { data: replies = [] } = useReplies();
  const { data: reactions = [] } = useReactions();
  const [weekFilter, setWeekFilter] = useState("all");
  const [body, setBody] = useState("");
  const [week, setWeek] = useState("");
  const [title, setTitle] = useState("");

  const createPost = useCommunityMutation(async () => {
    if (!uid) throw new Error("Not signed in");
    const { error } = await supabase.from("community_posts").insert({
      author_id: uid,
      body: body.trim(),
      title: title.trim() || null,
      week: week ? Number(week) : null,
    });
    if (error) throw error;
  });

  const visible = posts.filter(
    (p) => p.pinned || weekFilter === "all" || String(p.week ?? "") === weekFilter,
  );

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-sm font-medium">Share a question, win or reflection</div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title (optional)"
          className="mt-3 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <textarea
          rows={3}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="What's on your mind?"
          className="mt-3 w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <select
            value={week}
            onChange={(e) => setWeek(e.target.value)}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="">No module</option>
            {weeks.map((w) => (
              <option key={w.week} value={w.week}>
                Week {w.week} — {w.title}
              </option>
            ))}
          </select>
          <button
            disabled={!body.trim() || createPost.isPending}
            onClick={async () => {
              await createPost.mutateAsync();
              setBody("");
              setTitle("");
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            {createPost.isPending ? "Posting…" : "Post"}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Filter by module</span>
        <select
          value={weekFilter}
          onChange={(e) => setWeekFilter(e.target.value)}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="all">All modules</option>
          {weeks.map((w) => (
            <option key={w.week} value={String(w.week)}>
              Week {w.week} — {w.title}
            </option>
          ))}
        </select>
      </div>

      {isLoading && <p className="text-sm text-muted-foreground">Loading the feed…</p>}

      {visible.map((p) => (
        <PostCard
          key={p.id}
          post={p}
          author={memberMap.get(p.author_id)}
          memberMap={memberMap}
          replies={replies.filter((r) => r.post_id === p.id)}
          reactionCount={reactions.filter((r) => r.post_id === p.id).length}
          reacted={reactions.some((r) => r.post_id === p.id && r.user_id === uid)}
          uid={uid}
        />
      ))}
    </div>
  );
}

function PostCard({
  post,
  author,
  memberMap,
  replies,
  reactionCount,
  reacted,
  uid,
}: {
  post: Post;
  author?: MemberProfile;
  memberMap: Map<string, MemberProfile>;
  replies: { id: string; author_id: string; body: string; created_at: string }[];
  reactionCount: number;
  reacted: boolean;
  uid: string | null;
}) {
  const [text, setText] = useState("");
  const weekTitle = weeks.find((w) => w.week === post.week)?.title;

  const react = useCommunityMutation(async () => {
    if (!uid) return;
    if (reacted) {
      await supabase.from("community_reactions").delete().eq("post_id", post.id).eq("user_id", uid);
    } else {
      await supabase.from("community_reactions").insert({ post_id: post.id, user_id: uid, emoji: "👏" });
    }
  });
  const reply = useCommunityMutation(async () => {
    if (!uid) return;
    const { error } = await supabase
      .from("community_replies")
      .insert({ post_id: post.id, author_id: uid, body: text.trim() });
    if (error) throw error;
  });

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <Avatar member={author} size={36} />
        <div className="min-w-0">
          <div className="text-sm font-medium">
            {author?.display_name ?? "Member"}{" "}
            {author?.founding_number ? <FoundingBadge n={author.founding_number} /> : null}
          </div>
          <div className="text-xs text-muted-foreground">
            {timeAgo(post.created_at)}
            {post.week ? ` · Week ${post.week}${weekTitle ? ` — ${weekTitle}` : ""}` : ""}
          </div>
        </div>
        {post.pinned && (
          <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <Pin className="h-3 w-3" /> Pinned
          </span>
        )}
      </div>

      {post.title && <h3 className="mt-3 font-semibold">{post.title}</h3>}
      <p className="mt-2 whitespace-pre-wrap text-sm">{post.body}</p>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => react.mutate(undefined as never)}
          className={
            "rounded-full border px-3 py-1 text-xs transition-colors " +
            (reacted ? "border-primary bg-primary/10 text-primary" : "border-border hover:bg-accent")
          }
        >
          👏 {reactionCount}
        </button>
        <span className="text-xs text-muted-foreground">
          {replies.length} {replies.length === 1 ? "reply" : "replies"}
        </span>
      </div>

      {replies.length > 0 && (
        <div className="mt-4 space-y-3 border-l-2 border-border pl-4">
          {replies.map((r) => (
            <div key={r.id}>
              <div className="text-xs font-medium">
                {memberMap.get(r.author_id)?.display_name ?? "Member"}{" "}
                <span className="font-normal text-muted-foreground">· {timeAgo(r.created_at)}</span>
              </div>
              <p className="mt-1 whitespace-pre-wrap text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a reply…"
          className="min-w-0 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          disabled={!text.trim() || reply.isPending}
          onClick={async () => {
            await reply.mutateAsync(undefined as never);
            setText("");
          }}
          className="rounded-md border border-input px-3 py-2 text-sm font-medium hover:bg-accent disabled:opacity-60"
        >
          Reply
        </button>
      </div>
    </article>
  );
}

function Groups() {
  const uid = useUid();
  const memberMap = useMemberMap();
  const { data, isLoading } = useStudyGroups();
  const [name, setName] = useState("");
  const [focus, setFocus] = useState("");

  const create = useCommunityMutation(async () => {
    if (!uid) return;
    const { data: g, error } = await supabase
      .from("study_groups")
      .insert({ name: name.trim(), focus: focus.trim() || null, created_by: uid })
      .select("id")
      .single();
    if (error) throw error;
    await supabase.from("study_group_members").insert({ group_id: g.id, user_id: uid });
  });

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-sm font-medium">Start a study group</div>
        <p className="mt-1 text-xs text-muted-foreground">
          Group up around a start date or an interest area — finance, marketing, launching something.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Group name"
            className="min-w-0 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
            placeholder="Focus (e.g. Finance)"
            className="min-w-0 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            disabled={!name.trim() || create.isPending}
            onClick={async () => {
              await create.mutateAsync(undefined as never);
              setName("");
              setFocus("");
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            Create
          </button>
        </div>
      </div>

      {isLoading && <p className="text-sm text-muted-foreground">Loading groups…</p>}
      {data?.groups.length === 0 && (
        <p className="text-sm text-muted-foreground">No study groups yet — start the first one.</p>
      )}

      {data?.groups.map((g) => (
        <GroupCard
          key={g.id}
          group={g}
          uid={uid}
          memberMap={memberMap}
          memberIds={data.members.filter((m) => m.group_id === g.id).map((m) => m.user_id)}
          messages={data.messages.filter((m) => m.group_id === g.id)}
        />
      ))}
    </div>
  );
}

function GroupCard({
  group,
  uid,
  memberMap,
  memberIds,
  messages,
}: {
  group: { id: string; name: string; focus: string | null; description: string | null };
  uid: string | null;
  memberMap: Map<string, MemberProfile>;
  memberIds: string[];
  messages: { id: string; author_id: string; body: string; created_at: string }[];
}) {
  const [text, setText] = useState("");
  const joined = !!uid && memberIds.includes(uid);

  const toggle = useCommunityMutation(async () => {
    if (!uid) return;
    if (joined) {
      await supabase.from("study_group_members").delete().eq("group_id", group.id).eq("user_id", uid);
    } else {
      await supabase.from("study_group_members").insert({ group_id: group.id, user_id: uid });
    }
  });
  const send = useCommunityMutation(async () => {
    if (!uid) return;
    const { error } = await supabase
      .from("study_group_messages")
      .insert({ group_id: group.id, author_id: uid, body: text.trim() });
    if (error) throw error;
  });

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold">{group.name}</h3>
          <p className="text-xs text-muted-foreground">
            {group.focus ? `${group.focus} · ` : ""}
            {memberIds.length} {memberIds.length === 1 ? "member" : "members"}
          </p>
        </div>
        <button
          onClick={() => toggle.mutate(undefined as never)}
          className={
            "rounded-md px-3 py-1.5 text-sm font-medium " +
            (joined ? "border border-input hover:bg-accent" : "bg-primary text-primary-foreground hover:bg-primary/90")
          }
        >
          {joined ? "Leave" : "Join"}
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {messages.map((m) => (
          <div key={m.id} className="text-sm">
            <span className="font-medium">{memberMap.get(m.author_id)?.display_name ?? "Member"}</span>{" "}
            <span className="text-xs text-muted-foreground">· {timeAgo(m.created_at)}</span>
            <p className="whitespace-pre-wrap text-muted-foreground">{m.body}</p>
          </div>
        ))}
        {messages.length === 0 && <p className="text-sm text-muted-foreground">No messages yet.</p>}
      </div>

      {joined && (
        <div className="mt-4 flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Message the group…"
            className="min-w-0 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            disabled={!text.trim() || send.isPending}
            onClick={async () => {
              await send.mutateAsync(undefined as never);
              setText("");
            }}
            className="rounded-md border border-input px-3 py-2 text-sm font-medium hover:bg-accent disabled:opacity-60"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}

function Showcase() {
  const uid = useUid();
  const memberMap = useMemberMap();
  const { data, isLoading } = useShowcase();
  const [form, setForm] = useState({ title: "", summary: "", link: "" });

  const publish = useCommunityMutation(async () => {
    if (!uid) return;
    const { error } = await supabase.from("capstone_projects").insert({
      author_id: uid,
      title: form.title.trim(),
      summary: form.summary.trim(),
      link: form.link.trim() || null,
    });
    if (error) throw error;
  });

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Sparkles className="h-4 w-4 text-primary" /> Publish your capstone
        </div>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Project title"
          className="mt-3 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <textarea
          rows={3}
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          placeholder="What did you build, and what did you learn?"
          className="mt-3 w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <input
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          placeholder="Link (optional)"
          className="mt-3 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          disabled={!form.title.trim() || !form.summary.trim() || publish.isPending}
          onClick={async () => {
            await publish.mutateAsync(undefined as never);
            setForm({ title: "", summary: "", link: "" });
          }}
          className="mt-3 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
        >
          Publish
        </button>
      </div>

      {isLoading && <p className="text-sm text-muted-foreground">Loading the showcase…</p>}
      {data?.projects.length === 0 && (
        <p className="text-sm text-muted-foreground">No capstones published yet.</p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {data?.projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            author={memberMap.get(p.author_id)}
            uid={uid}
            kudosCount={(data.kudos ?? []).filter((k) => k.project_id === p.id).length}
            gaveKudos={(data.kudos ?? []).some((k) => k.project_id === p.id && k.user_id === uid)}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  author,
  uid,
  kudosCount,
  gaveKudos,
}: {
  project: CapstoneProject;
  author?: MemberProfile;
  uid: string | null;
  kudosCount: number;
  gaveKudos: boolean;
}) {
  const kudos = useCommunityMutation(async () => {
    if (!uid) return;
    if (gaveKudos) {
      await supabase.from("capstone_kudos").delete().eq("project_id", project.id).eq("user_id", uid);
    } else {
      await supabase.from("capstone_kudos").insert({ project_id: project.id, user_id: uid });
    }
  });
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="font-semibold">{project.title}</h3>
      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
        <Avatar member={author} size={20} />
        {author?.display_name ?? "Member"} · {timeAgo(project.created_at)}
      </div>
      <p className="mt-3 whitespace-pre-wrap text-sm text-muted-foreground">{project.summary}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-sm font-medium text-primary underline underline-offset-2"
        >
          View project
        </a>
      )}
      <button
        onClick={() => kudos.mutate(undefined as never)}
        className={
          "mt-4 block rounded-full border px-3 py-1 text-xs transition-colors " +
          (gaveKudos ? "border-primary bg-primary/10 text-primary" : "border-border hover:bg-accent")
        }
      >
        🎉 Kudos {kudosCount}
      </button>
    </div>
  );
}