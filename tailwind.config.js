/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#1D4ED8", // Main brand color
					light: "#3B82F6", // Lighter shade for hover, etc.
					dark: "#1E40AF", // Darker shade for contrast
				},
				secondary: {
					DEFAULT: "#D97706", // Secondary brand color
					light: "#F59E0B", // Lighter shade for hover, etc.
					dark: "#B45309", // Darker shade for contrast
				},
				accent: {
					DEFAULT: "#10B981", // Accent color
					light: "#34D399", // Lighter shade for hover, etc.
					dark: "#059669", // Darker shade for contrast
				},
				neutral: {
					DEFAULT: "#374151", // Neutral gray color
					light: "#6B7280", // Lighter shade for text, etc.
					dark: "#1F2937", // Darker shade for background, etc.
				},
				primary: "#000000", // Black for backgrounds
				secondary: "#ffffff", // White for text and main elements
				hoverBackground: "#333333", // Darker black for hover effects
				hoverText: "#ffffff",
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
