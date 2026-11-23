/** @type {import('tailwindcss').Config} */
module.exports = {
  // 기본 템플릿(Expo Router)이면 app, components 폴더
  // blank 템플릿이면 "./App.js" 도 추가
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
