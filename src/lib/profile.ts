import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type Profile = {
  id: string;
  email: string | null;
  subscription_status: "trialing" | "active" | "free_beta" | "canceled" | "expired";
  subscription_plan: "monthly" | "yearly" | "beta_free" | null;
  trial_ends_at: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  beta_user_number: number | null;
  created_at: string;
};

export const ACTIVE_STATUSES = ["trialing", "active", "free_beta"] as const;

export function hasAccess(status?: Profile["subscription_status"] | null) {
  return !!status && (ACTIVE_STATUSES as readonly string[]).includes(status);
}

export async function fetchMyProfile(): Promise<Profile | null> {
  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  if (!user) return null;
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();
  if (error) throw error;
  return (data as Profile) ?? null;
}

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchMyProfile,
    staleTime: 30_000,
  });
}

export function daysLeft(iso: string | null) {
  if (!iso) return 0;
  const ms = new Date(iso).getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / 86_400_000));
}

export function planLabel(p: Profile["subscription_plan"]) {
  if (p === "monthly") return "Monthly — €29,99 / month";
  if (p === "yearly") return "Yearly — €119 / year";
  if (p === "beta_free") return "Beta — free forever";
  return "No plan yet";
}