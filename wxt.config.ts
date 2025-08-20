import { defineConfig } from 'wxt';
import tailwindcss from "@tailwindcss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  srcDir: "src",
  publicDir: "src/public",
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
