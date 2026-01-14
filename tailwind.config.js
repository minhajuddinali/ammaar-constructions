export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      colors: {
        // New White & Blue Theme
        primary: "#1e3a5f",      // Deep Navy Blue (from logo)
        secondary: "#2c5282",    // Medium Blue
        accent: "#3182ce",       // Bright Blue (highlight)
        "light-blue": "#ebf4ff", // Very Light Blue for backgrounds
        "light-gray": "#f7fafc", // Off-white
        dark: "#1a202c",         // Dark for text where needed
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-up": "slideUp 1.0s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
