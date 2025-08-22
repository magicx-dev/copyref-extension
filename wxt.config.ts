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
    "homepage_url": "https://copyref.com",
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
    "permissions": [
      'activeTab',
      'scripting'
    ],
    "key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA+Ndg2LtWvkOosrx68jn0taUfyN9qzwTHrD0hWvTs+ykSjNFmQ0B/Vy1/GkhYT1Oy8i9oiRcpmADVYsWhfYTsRfgI83eTt7/LFurk2NFm/Pgccd2iSCIsXjYh6wOkoidcfR45MgLEpVjS4Pr4hc7TOXYV41EGP3+2sGcJ9CV1WIkXsOJA4bN5vKoEOnlNNMhYP7GSKjUpj7ZzpNuIUMqiKxiKYhzs4GcDXoVT8R7AxjA0QoRL2nxtQYDYWXroxIAdyLbNLZHXyAa16f9HSTWvCVIQWUqxs/dRkWECRp3t88nFSMZwog66DJfrCNBWADjJstt9kKknTtbrkBxbYE6lHwIDAQAB",
  }
});
