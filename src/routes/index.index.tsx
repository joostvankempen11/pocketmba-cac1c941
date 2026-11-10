import { createFileRoute, redirect } from "@tanstack/react-router";

// Visitors landing on /index are sent to the homepage.
export const Route = createFileRoute("/index/")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
