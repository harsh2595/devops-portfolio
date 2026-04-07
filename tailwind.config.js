/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                matteBlack: "#0a0a0a",
                softWhite: "#eaeaea",
            },
        },
    },
    plugins: [],
};