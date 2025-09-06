// Old (remove this line)
// import tailwind from "@tailwindcss/vite";

// Replace with normal Vite + React plugin setup:
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
