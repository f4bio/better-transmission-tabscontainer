import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.js",
      userscript: {
        name: "Better Transmission TabsContainer",
        author: "Fabio Tea <iam@f4b.io> (iam.f4b.io)",
        locale: ["en"],
        license: "MIT",
        description:
          "A userscript to make Transmission-Web's TabsContainer better",
        icon: "https://raw.githubusercontent.com/f4bio/better-transmission-tabscontainer/develop/src/assets/icon.png",
        namespace: "npm/vite-plugin-monkey",
        match: ["*://*/transmission/web/"],
        grant: ["none"],
        require: ["https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2"],
        server: { mountGmApi: true },
      },
    }),
  ],
});
