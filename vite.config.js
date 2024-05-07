import process from "node:process";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.VITE_BASE_URL || "",
  css: {
    devSourcemap: true,
  },
});
