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
                padding: '1rem',
            }
        }
    },
    plugins: []
}

export default config;
