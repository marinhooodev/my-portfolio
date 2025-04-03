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
    
});