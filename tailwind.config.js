import defaultTheme from 'tailwindcss/defaultTheme' // Updated to use ES6 import
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Brown', ...(defaultTheme.fontFamily?.sans || [])]
			},
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				'@font-face': {
					fontFamily: 'Brown',
					fontStyle: 'normal',
					fontWeight: 400,
					src:
						"url('/fonts/brown/regular/BrownLLSub-Regular.woff2') format('woff2'), " +
						"url('/fonts/brown/regular/BrownLLSub-Regular.woff') format('woff'), "
				}
			})
			addBase({
				'@font-face': {
					fontFamily: 'Brown',
					fontStyle: 'bold',
					fontWeight: 700,
					src:
						"url('/fonts/brown/bold/BrownLLSub-Bold.woff2') format('woff2'), " +
						"url('/fonts/brown/bold/BrownLLSub-Bold.woff') format('woff'), "
				}
			})
		})
	]
}

export default config
