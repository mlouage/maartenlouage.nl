/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				'ml': {
					'50': 'hsl(168, 29%, 97%)',
					'100': 'hsl(169, 38%, 89%)',
					'200': 'hsl(174, 35%, 78%)',
					'300': 'hsl(174, 33%, 64%)',
					'400': 'hsl(177, 28%, 50%)',
					'500': 'hsl(177, 34%, 40%)',
					'600': 'hsl(179, 35%, 32%)',
					'700': 'hsl(180, 32%, 26%)',
					'800': 'hsl(180, 30%, 22%)',
					'900': 'hsl(180, 26%, 19%)',
					'950': 'hsl(180, 37%, 10%)',
				},
				background: "hsl(var(--background) / <alpha-value>)",
				primary: "hsl(var(--primary) / <alpha-value>)",
				'primary-text': "hsl(var(--primary-text) / <alpha-value>)",
				'primary-hover': "hsl(var(--primary-hover) / <alpha-value>)",
			}
		},
	},
	plugins: [],
}
