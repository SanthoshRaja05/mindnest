export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        calm: "#EEF2FF",
      },
      keyframes: {
        scalePulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.15)", opacity: "0.8" },
        },
      },
      animation: {
        scalePulse: "scalePulse 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
