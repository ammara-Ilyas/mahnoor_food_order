/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy all requests from /api/ to external API
        destination: "https://restweb.azurewebsites.net/:path*", // Corrected destination
      },
    ];
  },
};

export default nextConfig;
