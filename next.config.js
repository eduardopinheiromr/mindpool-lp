module.exports = {
  images: {
    domains: ["picsum.photos"],
  },
  // i18n: {
  //   locales: ["en", "fr", "es"],
  //   defaultLocale: "en",
  // },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};
