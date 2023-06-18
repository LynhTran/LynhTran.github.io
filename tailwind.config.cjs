/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Keep the footer on bottom
        layout: "1fr auto",
      },
      gridTemplateColumns: {
        post: "minmax(250px, auto) 1fr",
      },
      minHeight: {
        "screen-d": "100dvh",
      },
    },
  },
  plugins: [],
};
