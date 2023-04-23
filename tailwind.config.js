/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
        world: "rgba(255, 255, 255, 0.08)",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      dropShadow: {
        "glow-1": "0 0 25px #f6633e",
        "glow-2": "0 0 25px #f29db0",
        "glow-3": "0 0 25px #acb4d6",
      },
      boxShadow: {
        "glow-1": "0 0 50px #cf6da8",
      },
    },
  },
  plugins: [],
};
