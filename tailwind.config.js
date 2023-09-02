/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'shadow-blue': '#D0DAEB',
        'bg-blue': '#F4F8FF',
        'text-green': '#50B810',
        'text-black': '#555',
        'text-gray': '#616C82',
        'label-title': '#B233A6',
        'label-theme': '#EBEEF6',
        'primary-blue': '#3D8FEC',
        'primary-gray-secondary': '#AAB7D4',
        'neuteral-gray-background': '#F8FAFB',
        'neuteral-gray-20': '#EBEEF6',
        'primary-gray-primary': '#7B8AAB',
      },
    },
  },
  plugins: [],
}
