/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
			},
			animation: {
        wiggle: 'wiggle 4s ease-in-out infinite',
      },
			boxShadow: {
        '3xl': 
				`
					0 0 2px rgb(0 0 0 / 0.1),
					0 0 6px rgb(0 0 0 / 0.1),
					0 0 18px rgb(0 0 0 / 0.1),
					0 0 54px rgb(0 0 0 / 0.1);
				`
      },
			colors: {
				primary: "#9E3451",
				secondary: "#691D33",
				blueLight: "#008dff",
				blueStrong: "#02256A",
				gray: "#A0A0A0"
			},
			fontFamily: {
        "MontserratAlternates": ['Montserrat Alternates', 'sans-serif']
      },
			transitionDuration: {
				'10000': '10000ms',
			},
		},
	},
	plugins: [],
}
