import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "src/app/**/*.{js,ts,jsx,tsx}",
        "src/components/**/*.{js,ts,jsx,tsx}",
        "src/pages/**/*.{js,ts,jsx,tsx}"]
    ,
    theme: {
        extend: {
            container: {
                center:true,
                padding: '1rem',
            },
            fontFamily: {
                sans: ['var(--font-dm-sans)', 'sans-serif'],
            }
        }
    },
    plugins: []
}

export default config;
