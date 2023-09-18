/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				"Arounder": ["Arounder", "sans-serif"],
				"Astrobia": ["Astrobia", "sans-serif"],
				"Autography": ["Autography", "sans-serif"],
				"BobzType": ["BobzType", "sans-serif"],
				"CapturaNowMedium": ["CapturaNowMedium", "sans-serif"],
				"Dymaxion": ["Dymaxion", "sans-serif"],
				"ElevatePERSONAL": ["ElevatePERSONAL", "sans-serif"],
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
	plugins: [require("@tailwindcss/typography")],
};
