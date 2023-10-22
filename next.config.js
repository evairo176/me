/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "doox8aoh16cwoxm4.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
