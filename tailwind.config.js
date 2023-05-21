/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/index.tsx",
		"./pages/about.tsx",
		"./pages/projects.tsx",
		"./pages/blog/*.tsx",
		"./components/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				"sep": "7px 7px 2px 2px rgb(2, 91, 150)",
			},
			backgroundColor: {
				"blog": "rgb(56, 89, 110)",
				"index-bg": "rgb(230, 236, 240)",
				"select": "rgba(3, 56, 84, 1.0)",
				"menu": "rgb(79, 86, 125)",
				"dark-theme": "rgb(45, 45, 68)",
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
				"Roboto-Mono": "Roboto Mono",
				"Comfortaa": "Comfortaa",
				"NotoSans": "Noto Sans TC"
			},
		},
	},
	plugins: [],
};
