const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  images: {
    domains: ["cdn-images-1.medium.com", "medium.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
});
