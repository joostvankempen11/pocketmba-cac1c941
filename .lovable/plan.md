## Problem

The published site at `pocketmba.lovable.app` shows "files are missing" because the last successful deploy never landed — and the current `vite.config.ts` carries a leftover override from earlier debugging that can interfere with how Lovable's publish pipeline locates build artifacts.

A local production build (`bun run build`) now succeeds and produces the expected TanStack Start + Nitro output:
- `dist/client/` — static client assets
- `dist/server/` — Cloudflare Worker entry (`index.mjs`) and chunks
- `dist/nitro.json`, `.wrangler/deploy/config.json`

So the build itself is healthy. What's stale is the config and the deployment.

## Fix

1. Clean up `vite.config.ts`:
   - Remove the manual `vite: { build: { outDir: 'dist' } }` override. `@lovable.dev/vite-tanstack-config` already wires Nitro to emit into `dist/client` + `dist/server`; re-stating `outDir: 'dist'` is at best redundant and at worst overrides the client sub-output.
   - Remove the stale `// Trigger republish` comment.
   - Keep `tanstackStart: { ssr: false }`.

2. Re-publish from the Publish dialog so the new build is actually shipped to `pocketmba.lovable.app`.

No source/UI/content changes — config-only.

## Technical details

Resulting `vite.config.ts`:

```ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    ssr: false,
  },
});
```

After applying, you'll need to click **Publish → Update** to redeploy. The "files are missing" message will clear once the new deployment lands.