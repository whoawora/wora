/** @type {import('next').NextConfig} */
const nextConfig = {
   output: "export",
  //  webpack(config) {
  //     config.infrastructureLogging = { debug: /PackFileCache/ }
  //     return config;
  //   },
    images: {
      unoptimized: true
  }
};

module.exports = nextConfig
