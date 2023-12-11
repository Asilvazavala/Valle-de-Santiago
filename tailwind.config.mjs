/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
        '3xl': `
					-0.4px -20.3px 22.4px -2.7px rgb(0 0 0 / 0.1), 
					0px 10px 35px 5px rgb(0 0 0 / 0.1);`,
      },
			colors: {
				primary: "#9E3451",
				secondary: "#691D33",
				blueLight: "#008dff",
				blueStrong: "#02256A"
			},
			fontFamily: {
        "Kalnia": ['Kalnia', 'sans-serif']
      },
		},
	},
	plugins: [],
}
