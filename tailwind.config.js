module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0085FF",

          "secondary": "#a4B2BC",

          "accent": "#09090C",

          "neutral": "#f3f4f6",

          "base-100": "#12163C",

          "info": "#06b6d4",

          "success": "#145240",

          "warning": "#B39409",

          "error": "#ED5E76",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
