/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  safelist: [
    // dimensions
    "w-fit",
    // background colors
    "bg-red-600",
    "bg-orange-600",
    "bg-yellow-600",
    "bg-green-600",
    "bg-teal-600",
    "bg-blue-600",
    "bg-indigo-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-gray-600",
    // animations
    "animate-spin",
    // rings
    "ring-offset-2",
    "ring-2",
  ],
  plugins: [],
};
