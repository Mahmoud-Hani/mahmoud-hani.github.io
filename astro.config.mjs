import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

const isStaticDeploy = process.env.GITHUB_ACTIONS === "true" || process.env.DEPLOY_TARGET === "static";

export default defineConfig({
  site: "https://mahmoud-hani.github.io",
  output: isStaticDeploy ? "static" : "server",
  adapter: isStaticDeploy
    ? undefined
    : cloudflare({
        imageService: "passthrough",
      }),
  integrations: [react()],
});
