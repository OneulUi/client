/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "ec2-13-124-159-141.ap-northeast-2.compute.amazonaws.com",
        port: "8080",
        pathname: "/ootds/images/**",
      },
    ],
  },
};

export default nextConfig;
