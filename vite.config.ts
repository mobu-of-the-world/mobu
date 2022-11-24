import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { execSync } from "child_process";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const commitRef = env["VITE_COMMIT_REF"] ?? execSync("git rev-parse --short HEAD").toString().trim();
  return {
    build: {
      outDir: "./build",
    },
    plugins: [react()],
    define: {
      APP_COMMIT_REF: JSON.stringify(commitRef),
    },
  };
});
