/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            'pretendard': ['Pretendard'],
            'p-extra-light': ['Pretendard ExtraLight'],
            'p-light': ['Pretendard Light'],
            'p-thin': ['Pretendard Thin'],
            'p-medium': ['Pretendard Medium'],
            'p-regular': ['Pretendard'],
            'p-semi-bold': ['Pretendard SemiBold'],
            'p-extra-bold': ['Pretendard ExtraBold'],
            'p-black': ['Pretendard Black'],

            'preahvihear': ['Preahvihear', 'Pretendard']
        }
    },
    plugins: [],
}

