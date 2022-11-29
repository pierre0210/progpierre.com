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
				"sep": "5px 5px 2px 2px rgba(2, 91, 150, 0.30)",
			},
			backgroundColor: {
				"blog": "rgb(56, 89, 110)",
				"index-bg": "rgb(227, 241, 250)",
				"select": "rgba(3, 56, 84, 1.0)",
				"menu": "rgb(79, 86, 125)",
			},
			dropShadow: {
				"menu": "0 5px 5px rgba(0, 0, 0, 0.3)",
			},
			textColor: {
				"blog-title": "rgb(2, 104, 117)",
				"blog-title-select": "rgb(243, 247, 240)",
			},
			fontFamily: {
				"Playfair-Display": "Playfair Display",
				"Roboto-Mono": "Roboto Mono"
			},
		},
  },
  plugins: [],
};
