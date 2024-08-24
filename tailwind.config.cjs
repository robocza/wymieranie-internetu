import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                white: '#FFFFFF', // dark mode text
                black: '#242424', // light mode text
                light: '#F4F4F4', // light mode bg
                dark: '#3A3A3A', // dark mode bg
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
