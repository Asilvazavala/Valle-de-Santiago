/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#9E3451",
				secondary: "#691D33",
				blueLight: "#008dff",
				blueStrong: "#02256A"
			},
			fontFamily: {
        "OpenSans": ['OpenSans', 'sans-serif']
      },
		},
	},
	plugins: [],
}
