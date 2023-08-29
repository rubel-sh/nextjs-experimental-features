/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["via.placeholder.com", "restcountries.com"],
    },
    publicRuntimeConfig: {
        GEO_NAMES_USERNAME: process.env.GEO_NAMES_USERNAME,
    },
};

module.exports = nextConfig;
