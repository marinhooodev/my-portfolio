import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    vite: {
        plugins: [tailwindcss()
          
        ],
    },
    modules: [
      "@nuxt/eslint",
      "@nuxt/image",
      "@nuxt/test-utils",
      "@nuxt/icon",
      "@nuxt/content",
      "@nuxtjs/i18n",
      "@nuxtjs/google-fonts",
      "@nuxt/ui",
      '@nuxtjs/color-mode'
    ],
    css: ["~/styles/global.css"],
    googleFonts: {
        families: {
            "Plus Jakarta Sans": [
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
            ],
        },
        display: "swap",
    },
     i18n: {
         bundle: {
             optimizeTranslationDirective: false,
         },
     },
     colorMode: {
        preference: 'light', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storage: 'localStorage', // or 'sessionStorage' or 'cookie'
        storageKey: 'nuxt-color-mode'
      }
});