const nextConfig = {
  /* config options here */
  // output: "standalone",
  compress: true,
  images: {
    // unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "fiverr-res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "satisfyhost.com",
      },
      {
        protocol: "https",
        hostname: "www.aitit.info",
      },
      {
        protocol: "https",
        hostname: "techhelpbd.com",
      },
    ],
  },
};

export default nextConfig;
