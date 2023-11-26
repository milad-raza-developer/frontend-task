/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
              primary: "#7A5CFA",
              secondary: "#333333",
              Gray: "#848484",
              labelColor: "#666666"
            },
    },
    fontFamily: {
      NotoRegular: ["NotoRegular", "sans"],
      NotoBold: ["NotoBold", "sans"],
      NotoSemiBold: ["NotoSemibold", "sans"],
    },
  },
  plugins: [],
}

