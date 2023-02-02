module.exports = {
	purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/layout/**/*.{js,ts,jsx,tsx}"],
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/layout/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#e0f2f1",
					200: "#b2dfdb",
					300: "#80cbc4",
					400: "#4db6ac",
					500: "#8553FB",
					600: "#7445F8",
					700: "#00897b",
					800: "#00796b",
					900: "#00695c",
				},
				light: {
					100: "#FFFFFF",
					200: "#F8F9FA",
					300: "#ededed",
					400: "#e0e0e0",
					500: "#BFBFBF",
					600: "#A6A6A6",
					700: "#7F7F7F",
					800: "#595959",
					900: "#404040",
				},
				dark: {
					100: "#7F7F7F",
					200: "#67748E",
					300: "#6B7280",
					400: "#374151",
					500: "#252F40",
					600: "#1D1D1D",
					700: "#181818",
					800: "#131313",
					900: "#0e0e0e",
					1000: "#080808",
				},
			},
			fontFamily: {
				primary: ["Inter", "sans-serif"],
				secondary: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
