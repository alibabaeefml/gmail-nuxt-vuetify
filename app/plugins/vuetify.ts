import type { VuetifyOptions } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("vuetify:before-create", (options) => {
    if (import.meta.client) {
      console.log("vuetify:before-create", options);
    }

    // ✅ Access the correct Vuetify options object
    const vuetifyOptions: VuetifyOptions = options.vuetifyOptions;

    // Ensure `theme` exists before modifying
    if (!vuetifyOptions.theme) {
      vuetifyOptions.theme = {};
    }

    // 🎨 Define custom themes
    vuetifyOptions.theme.defaultTheme = "lightTheme";
    vuetifyOptions.theme.themes = {
      lightTheme: {
        dark: false,
        colors: {
          primary: "#1E88E5",
          secondary: "#FFC107",
          accent: "#E91E63",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
      darkTheme: {
        dark: true,
        colors: {
          primary: "#121212",
          secondary: "#BB86FC",
          accent: "#03DAC6",
          error: "#CF6679",
        },
      },
    };
  });
});
