import react from "@vitejs/plugin-react";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";
import modularLibrary from 'modular-library/vite'

export default defineConfig({
  plugins: [
    modularLibrary({
      relative: './src'
    }),
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
      entry: ['src/index.ts', 'src/prism-themes/*.ts', 'src/components/*.tsx'],
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rolldownOptions: {
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
