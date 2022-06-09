import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { execSync } from "child_process";

const commitRef = execSync("git rev-parse --short HEAD").toString().trim();

export default defineConfig({
  build: {
    outDir: "./build",
  },
  plugins: [react()],
  define: {
    APP_COMMIT_REF: JSON.stringify(commitRef),
  },
});
