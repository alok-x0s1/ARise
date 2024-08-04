/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
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