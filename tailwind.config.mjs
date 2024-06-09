import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
				handwritten: ['Kalam', ...defaultTheme.fontFamily.sans],
      },
			colors: {
				'primary': {
					'50': '#f4f9f8',
					'100': '#d9eeea',
					'200': '#b4dbd7',
					'300': '#86c2bc',
					'400': '#579b97',
					'500': '#438986',
					'600': '#346d6c',
					'700': '#2d5858',
					'800': '#274848',
					'900': '#243d3d',
					'950': '#102323',
				},
			}
		},
	},
	plugins: [],
}
