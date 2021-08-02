const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: [
		'./src/index.html',
		'./src/**/*.jsx',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito", ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
                xxs: ["0.625rem", { lineHeight: "1rem" }],
            },
			gridTemplateColumns: {
				"product-sm": "repeat(auto-fill, minmax(270px, 1fr))",
				"product-md": "repeat(auto-fill, minmax(336px, 1fr))"
			},
			spacing: {
				'75p': '75%',
				'18': '4.5rem'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
	],
}
