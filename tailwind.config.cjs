import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 60s ease-in-out forwards',
                'fade-out': 'fadeOut 60s ease-in-out forwards',
            },
            backgroundImage: {
                'chain': "url('/assets/chain.png')",
                'extinct-light': "url('/assets/extinct-light.png')",
                'extinct-dark': "url('/assets/extinct-dark.png')",
            },
            boxShadow: {
                image: 'inset 0px 0px 10px 10px #0000',
            },
            boxShadowColor: ({ theme }) => ({
                light: theme('colors.light'),
                dark: theme('colors.dark'),
            }),
            colors: {
                white: '#FFFFFF', // dark mode text
                black: '#242424', // light mode text
                light: '#F4F4F4', // light mode bg
                dark: '#242424', // dark mode bg
            },
            fontFamily: {
                sans: ['Karrik', ...defaultTheme.fontFamily.sans],
                serif: ['Times New Roman', ...defaultTheme.fontFamily.serif],
                pixel: ['TerminalGrotesque', ...defaultTheme.fontFamily.sans],
                'pixel-open': ['TerminalGrotesqueOpen', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '4xl': '2.5rem',
                '10xl': ['8rem', '8rem'],
                '16xl': ['11rem', '11rem'],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                fadeOut: {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        fontFamily: 'inherit',
                        '--tw-prose-body': ({ theme }) => theme('colors.black'),
                        '--tw-prose-invert-body': ({ theme }) => theme('colors.white'),
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    darkMode: 'selector',
};
