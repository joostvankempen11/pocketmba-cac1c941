import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import logoFull from "@/assets/umba-logo-full.png.asset.json";
import { Button } from "@/components/Button";
import { parseCheckoutPlan, recallCheckoutPlan, rememberCheckoutPlan } from "@/lib/checkout-intent";

export const Route = createFileRoute("/auth")({
  validateSearch: (search: Record<string, unknown>) => ({
    mode: typeof search.mode === "string" ? search.mode : undefined,
    plan: parseCheckoutPlan(search.plan),
  }),
  head: () => ({
    meta: [
      { title: "Sign in — 12-Week MBA" },
      { name: "description", content: "Create an account or sign in to continue your 12-week MBA program." },
      { property: "og:title", content: "Sign in — 12-Week MBA" },
      { property: "og:description", content: "Create an account or sign in to continue your 12-week MBA program." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const search = Route.useSearch();
  const mode = search.mode === "signup" ? "signup" : "signin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (search.plan) rememberCheckoutPlan(search.plan);
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        const plan = search.plan ?? recallCheckoutPlan();
        if (plan) navigate({ to: "/checkout", search: { plan }, replace: true });
        else navigate({ to: "/dashboard", replace: true });
      }
    });
  }, [navigate, search.plan]);

  async function continueAfterSignIn() {
    const plan = search.plan ?? recallCheckoutPlan();
    if (plan) await navigate({ to: "/checkout", search: { plan }, replace: true });
    else await navigate({ to: "/dashboard", replace: true });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const plan = search.plan ?? recallCheckoutPlan();
      if (plan) rememberCheckoutPlan(plan);
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/auth${plan ? `?plan=${plan}` : ""}` },
        });
        if (error) throw error;
        if (data.session) await continueAfterSignIn();
        else setMessage("Check your inbox to confirm your email address, then sign in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        await continueAfterSignIn();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function onGoogle() {
    setError(null);
    setLoading(true);
    try {
      const plan = search.plan ?? recallCheckoutPlan();
      if (plan) rememberCheckoutPlan(plan);
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: `${window.location.origin}/auth${plan ? `?plan=${plan}` : ""}`,
      });
      if (result.error) throw new Error("Google sign-in failed. Please try again.");
      if (result.redirected) return;
      await continueAfterSignIn();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center">
          <img
            src={logoFull.url}
            alt="The Unofficial MBA — Learning Beyond Credentials"
            className="h-auto w-64 max-w-full"
          />
        </Link>
        <div className="rounded-xl border border-border bg-card p-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            {mode === "signin" ? "Sign in" : "Create your account"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "signin"
              ? "Welcome back — pick up where you left off."
              : "Start your 7-day free trial."}
          </p>

          <Button
            onClick={onGoogle}
            variant="outline"
            disabled={loading}
            className="mt-6 w-full"
          >
            Continue with Google
          </Button>

          <div className="my-5 flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={onSubmit} className="space-y-3">
            <div>
              <label className="text-xs font-medium text-muted-foreground" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            {message && <p className="text-sm text-muted-foreground">{message}</p>}
            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>

          <Button
            variant="ghost"
            disabled={loading}
            onClick={() => { navigate({ to: "/auth", search: { ...search, mode: mode === "signin" ? "signup" : "signin" }, replace: true }); setError(null); setMessage(null); }}
            className="mt-4 w-full text-center"
          >
            {mode === "signin" ? "No account? Sign up" : "Already have an account? Sign in"}
          </Button>
        </div>
      </div>
    </div>
  );
}