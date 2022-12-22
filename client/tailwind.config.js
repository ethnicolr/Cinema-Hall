/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html', "./src/**/*.{js,jsx,ts,tsx}"],
  purge: [
    './public/**/*.html',
    './src/**/*.{ts,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [],

}
