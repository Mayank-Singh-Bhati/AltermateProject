/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1500px', // Add a custom breakpoint
        '3xl': '1920px', // Add another custom breakpoint

        // Modify existing breakpoints
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
      },
    },
  },
  plugins: [],
}

