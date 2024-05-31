/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': 'url("https://assets.oyoroomscdn.com/cmsMedia/b3c9905c-31d1-4349-8594-c07deae6b36d.jpg")',
      },
      height:{
        'large-box':'400px'
      }
    }
  },
plugins: [],
};
