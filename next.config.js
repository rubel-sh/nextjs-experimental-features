/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        GEO_NAMES_USERNAME: process.env.GEO_NAMES_USERNAME,
    },
};

module.exports = nextConfig;
