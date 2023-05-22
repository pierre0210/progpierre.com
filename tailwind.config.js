/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/index.tsx",
		"./pages/about.tsx",
		"./pages/project.tsx",
		"./pages/blog/*.tsx",
		"./components/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				"sep": "7px 7px 2px 0px rgb(2, 91, 150)",
				"index-sep": "12px 12px 0px 0px rgb(2, 91, 150)",
			},
			backgroundColor: {
				"main": "rgb(0, 43, 54)",
				"select": "rgba(3, 56, 84, 1.0)",
			},
			dropShadow: {
				"menu": "0 5px 5px rgba(0, 0, 0, 0.3)",
			},
			textColor: {
				"main": "rgb(235, 235, 243)",
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
