// @ts-expect-error
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
    }),
    preserveDirectives(),
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
    rollupOptions: {
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
