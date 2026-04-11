import react from "@vitejs/plugin-react";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      copyDtsFiles: true,
      outDirs: ["dist"],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(/([\\/])dist\1src\1/, "$1dist$1"),
        content,
      }),
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        "prism-themes/github-dark": resolve(
          __dirname,
          "src/prism-themes/github-dark.ts",
        ),
        "prism-themes/github-light": resolve(
          __dirname,
          "src/prism-themes/github-light.ts",
        ),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rolldownOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
      },
      external: [
        "react",
        /^react\//,
        "react-dom",
        /^react-dom\//,
        /^@mui\/material/,
        /^@mui\/icons-material/,
        /^@emotion\/react/,
        /^@emotion\/styled/,
        /^prism-react-renderer/,
        /^react-markdown/,
      ],
    },
  },
});
