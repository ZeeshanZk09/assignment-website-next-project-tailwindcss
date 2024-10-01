/** @type {import('next').NextConfig} */
// const nextConfig = {};



const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['tailwindui.com', 'images.unsplash.com'], // Add all external domains you want to allow here
    },
  }
  
  export default nextConfig;
//   module.exports = nextConfig;