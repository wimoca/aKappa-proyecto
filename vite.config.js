import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://wimoca.github.io/aKappa-proyecto",
  define: { "process.env": process.env },
});
