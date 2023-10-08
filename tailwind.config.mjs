import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                primary: {
                    ...colors.blue,
                    DEFAULT: colors.blue[400],
                },
            }
        },
	},
	plugins: [],
}
