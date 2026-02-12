import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                space: {
                    // The Inner Compass core background colors
                    black: "#000000",
                    dark: "#0a0a0a",
                    surface: "#111111", // Used for cards and code blocks
                },
                accent: {
                    // The signature Inner Compass electric palette
                    blue: "#4285F4",    // Google Blue
                    purple: "#9333EA",  // Vibrant Violet
                    cyan: "#22D3EE",    // Terminal/Action Cyan
                    indigo: "#6366F1",  // Secondary accents
                },
                text: {
                    primary: "#FFFFFF",   // High contrast white
                    secondary: "#9AA0A6", // Inner Compass/Google muted gray
                    muted: "#5F6368",    // Subtle captions
                },
                border: {
                    subtle: "rgba(255, 255, 255, 0.1)", // Used for the "grid" and dividers
                }
            },
            fontFamily: {
                // Inter is the primary technical font used on Inner Compass
                inter: ["var(--font-inter)", "sans-serif"],
                // Using Cinzel only for "spiritual" headers while keeping UI clean
                cinzel: ["var(--font-cinzel)", "serif"],
            },
            backgroundImage: {
                // Inner Compass uses a subtle mesh/grid and radial glow
                "antigravity-glow": "radial-gradient(circle at 50% -20%, #1a1a2e 0%, #000000 100%)",
                "accent-gradient": "linear-gradient(90deg, #4285F4 0%, #9333EA 100%)",
            },
            animation: {
                "cursor-blink": "blink 1s step-end infinite",
            },
            keyframes: {
                blink: {
                    "from, to": { opacity: "1" },
                    "50%": { opacity: "0" },
                }
            },
        },
    },
    plugins: [],
};
export default config;