/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// // tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your source files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8", // Replace with your desired color value
      },
    },
  },
  plugins: [],
};
