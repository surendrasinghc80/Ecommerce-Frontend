const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        // geist: ["var(--font-geist-sans)", ...fontFamily.sans],
        // mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
};
