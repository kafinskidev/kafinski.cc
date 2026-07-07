import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://kafinski.cc",
  devToolbar: { enabled: false },
  build: { inlineStylesheets: "always" },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
