module.exports = {
    // mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx,css}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            dancing: ['Dancing script', 'sans-serif'],
        },
        colors: {
            // Colors who don't change
            blue: 'var(--blue)',
            yblue: 'var(--yblue)',

            // 'permanent-white': 'ffffff',
            'permanent-black': '#1d2424',
            orange: 'var(--orange)',
            orangedark: 'var(--orangedark)',

            // Color who can change
            black: 'var(--black)',
            sliverchalice: 'var(--sliverchalice)',
            granite: 'var(--granite)',
            quillgrey: 'var(--quillgrey)',
            platnium: 'var(--platnium)',
            seashell: 'var(--seashell)',
            snowdrift: 'var(--snowdrift)',
            white: 'var(--white)',

            transparent: 'transparent',
        },
        screens: {
            lg: {
                max: '1024px',
            },
            lgi: {
                max: '1024px',
                min: '769px',
            },
            md: {
                max: '768px',
            },
            mdi: {
                max: '768px',
                min: '641px',
            },
            sm: {
                max: '640px',
            },
        },
        extend: {
            borderWidth: {
                3: '3px',
            },
            height: {
                13: '3.25rem',
                15: '3.75rem',
            },
            fontSize: {
                mic: [
                    '0.625rem',
                    {
                        lineHeight: '0.75rem',
                    },
                ],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
