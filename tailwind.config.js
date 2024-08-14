/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#c8c8c8",
					light: "#D1D5DB",
				},
				secondary: "#000000",
				hover: {
					light: "#f6f6f6",
					dark: "#333333",
				},
				red: {
					DEFAULT: "#DC2626",
					secondary: "#B91C1C",
				},
				blue: {
					DEFAULT: "#4F46E5",
					secondary: "#4338CA",
				},
				green: {
					DEFAULT: "#34d399",
					secondary: "#6ee7b7",
				},
				orange: {
					DEFAULT: "#fb923c",
					secondary: "#fdba74",
				},
			},
			borderColor: {
				primary: "#c8c8c8",
			},
			animation: {
				ping: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
				"reduce-width": "reduce-width 5s linear forwards",
			},
			keyframes: {
				ping: {
					"0%": { transform: "scale(1)", opacity: "1" },
					"100%": { transform: "scale(2)", opacity: "0" },
				},
				"reduce-width": {
					"0%": { width: "100%" },
					"100%": { width: "0%" },
				},
			},
			delay: {
				200: "200ms",
				400: "400ms",
			},
		},
	},
	plugins: [],
};
