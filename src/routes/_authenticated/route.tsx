import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { fetchMyProfile, hasAccess } from "@/lib/profile";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/auth" });
    const profile = await fetchMyProfile();
    if (profile && !hasAccess(profile.subscription_status)) {
      throw redirect({ to: "/access-ended" });
    }
    return { user: data.user };
  },
  component: () => <Outlet />,
});