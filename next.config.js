// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === "production";

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    disable: !isProd,
  },
  images: {
    domains: ["ipfs.io", "castles-banner-api.s3.us-east-1.amazonaws.com"],
  },
});
