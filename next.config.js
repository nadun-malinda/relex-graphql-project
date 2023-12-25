/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname:
          "relex-graphql-project-jhyjz96w6-nadun-malindas-projects.vercel.app",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
