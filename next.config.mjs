/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_url:process.env.DB_url,
        Web3_Auth:process.env.Web3_Auth,
        GEMINI_API_KEY :  process.env.GEMINI_API_KEY,
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    }

};

export default nextConfig;
