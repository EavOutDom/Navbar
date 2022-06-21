/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            flex: {
                2: "0 0 100%",
            },
        },
    },
    plugins: [],
};
