/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'border': 'rgb(229, 231, 235)', // border-border
        'background': '#f8fafc', // bg-background
        'foreground': '#18181b', // text-foreground (тёмно-серый)
      },
    },
  },
  plugins: [],
}; 