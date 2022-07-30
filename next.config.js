
const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache')
const nextConfig = withPWA({
  pageExtensions: ['page.js', 'page.jsx'],
  pwa: {
    dest: "public",
    runtimeCaching,
  }
});

module.exports = nextConfig
