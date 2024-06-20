/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts,tsx,js,jsx}",
		"./node_modules/preline/*.js",
	],
	theme: {
		extend: {
			colors: {
				custom: {
					black: "#2e2e4a",
					sky: "#bce7fd",
					pink: { light: "#ff99c8" },
					green: { light: "#b0e298" },
					indigo: "#623cea",
				},
			},
			fontFamily: {
				"Arounder": ["Arounder", "sans-serif"],
				"Astrobia": ["Astrobia", "sans-serif"],
				"Autography": ["Autography", "sans-serif"],
				"BobzType": ["BobzType", "sans-serif"],
				"CapturaNowMedium": [
					"CapturaNowMedium",
					"sans-serif",
				],
				"Dymaxion": ["Dymaxion", "sans-serif"],
				"ElevatePERSONAL": [
					"ElevatePERSONAL",
					"sans-serif",
				],
				"HalfRegular": ["HalfRegular", "sans-serif"],
				"MontHeavy": ["MontHeavy", "sans-serif"],
				"Kurale": ["Kurale", "sans-serif"],
				"NewRecord": ["NewRecord", "sans-serif"],
				"OCRABecker": ["OCRABecker", "sans-serif"],
				"VEG": ["VEG", "sans-serif"],
				"TypeWriter": ["TypeWriter", "sans-serif"],
				"AreqG": ["AreqG", "sans-serif"],
			},
		},
	},
	darkMode: "class",
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/container-queries"),
		require("preline/plugin"),
	],
};
