/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                green:  "var(--color-green)",
                opaqueGreen:  "var(--color-opaque-green)",
                purple: "var(--color-purple)",
                red: "var(--color-red)",
                opaquePurple: "var(--color-opaque-purple)",
                grey: "var(--color-grey)",
                opaqueBlack: "var(--color-opaque-black)",
                beige : "var(--color-beige)",
                blue : "var(--color-blue)",
                opaqueWhite : "var(--color-opaque-white)",
                yellow : "var(--color-yellow)",
                golden : "var(--color-golden)",
                moon : "var(--color-moon)",
            }
        },
    },
    plugins: [],
    safelist: [
        {
            pattern:
                /(bg|text|border)-(purple|opaquePurple|grey|opaqueBlack|beige|blue|opaqueWhite|yellow|golden|moon|green|red|opaqueGreen)/,
        },
    ],
}

