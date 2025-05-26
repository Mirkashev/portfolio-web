import { defineConfig } from "astro/config";
import react from '@astrojs/react';

export default defineConfig({
  site: "https://Mirkashev.github.io",
  base: "portfolio-web",
  integrations: [react()],
});
