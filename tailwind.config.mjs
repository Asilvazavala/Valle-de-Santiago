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
				fadeIn: {
					'0%': { opacity: '0' },
          '100%': { opacity: '100' },
				},
				fadeOut: {
					'0%': { opacity: '100' },
          '100%': { opacity: '0' },
				},
				zoomIn: {
					'0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
				},
			},
			animation: {
        wiggle: 'wiggle 4s ease-in-out infinite',
        fastWiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn .7s ease-in-out',
        fadeOut: 'fadeOut .7s ease-in-out',
        zoomIn: 'zoomIn 6s ease-in-out infinite',
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
				primary: "#304D30",
				secondary: "#163020",
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
