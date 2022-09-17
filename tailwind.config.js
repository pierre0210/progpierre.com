/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./pages/index.tsx",
		"./pages/news.tsx",
		"./pages/projects.tsx",
		"./pages/blog/*.tsx",
		"./components/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			boxShadow: {
				"sep": "5px 5px 1px 1px rgba(0, 0, 0, 0.15)",
			},
			backgroundColor: {
				"select": "rgba(41, 45, 66, 1.0)",
				"menu": "rgb(79, 86, 125)",
			},
			dropShadow: {
				"menu": "0 5px 5px rgba(0, 0, 0, 0.2)",
			}
		},
  },
  plugins: [],
}
