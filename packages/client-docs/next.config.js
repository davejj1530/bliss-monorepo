const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@bliss/core"]);
const withImages = require("next-images");
module.exports = withPlugins([withTM(), withImages], {
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  images: {},
});
