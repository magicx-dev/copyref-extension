import { defineConfig } from 'wxt';
import tailwindcss from "@tailwindcss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: [
    '@wxt-dev/module-vue',
    '@wxt-dev/i18n/module',
  ],
  srcDir: "src",
  publicDir: "src/public",
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: {
    "name": "__MSG_ext_name__",
    "description": "__MSG_ext_desc__",
    'default_locale': 'en',
    "commands": {
      "copy": {
        "suggested_key": {
          "default": "Ctrl+Shift+C",
          "mac": "MacCtrl+Shift+C",
          "windows": "Ctrl+Shift+C"
        },
        "description": "__MSG_command_copy_desc__",
      }
    },
  }
});
