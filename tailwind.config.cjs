/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				gradient: {
					'0%': {
					  'background-position': '0% 50%',
					},
					'50%': {
					  'background-position': '100% 50%',
					},
					'100%': {
					  'background-position': '0% 50%',
					},
				  },
			},
			animation: {
				'background-animation': 'gradient 15s ease infinite'
			}
		},
		fontFamily: {
			'font-system': ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
			'font-body': ['"Public Sans"', 'var(--font-system)'],
			'font-brand': ['Rubik', 'var(--font-system)'],
		},
		fontSize: {
			sm: '0.875rem',
			base: '1rem',
			md: '1.125rem',
			lg: '1.25rem',
			xl: '1.625rem',
			'2xl': '2.125rem',
			'3xl': '2.625rem',
			'4xl': '3.5rem',
			'5xl': '4.5rem',
		},
		backgroundSize: {
			'auto': 'auto',
			'cover': 'cover',
			'contain': 'contain',
			'50%': '50%',
			'bigger' : '160%'
		},
	},
	plugins: [],	
}
