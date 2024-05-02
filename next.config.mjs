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
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination:
  //         "http://ec2-3-36-88-73.ap-northeast-2.compute.amazonaws.com:8080/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;
