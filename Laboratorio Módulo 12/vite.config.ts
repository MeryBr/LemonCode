import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    checker({ typescript: true }),
  ],
  resolve: {
    alias: {
      "@model": resolve(__dirname, "src/model"),
      "@core": resolve(__dirname, "src/core"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    restoreMocks: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
  },
});
