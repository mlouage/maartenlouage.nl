import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sentry({
      dsn: "https://9fcd43e03ef354dc9e3160c776d3a16e@o4506689025998848.ingest.sentry.io/4506689030324224",
      sourceMapsUploadOptions: {
        project: "maartenlouage-nl",
        authToken: process.env.SENTRY_AUTH_TOKEN,
    },
  })],
  output: "server",
  adapter: netlify()
});
