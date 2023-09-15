/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["via.placeholder.com", "restcountries.com"],
    },
    publicRuntimeConfig: {
        GEO_NAMES_USERNAME: process.env.GEO_NAMES_USERNAME,
    },
    async redirects() {
        return [
            {
                source: "/sadaqa-jaria.html",
                destination: "/sadaqa-jaria",
                permanent: true,
            },
        ];
    },
};

module.exports = withPWA({
    ...nextConfig, // Merge your Next.js configuration here
});

// module.exports = nextConfig;
