const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const aliases = require('./alias-config');

module.exports = withCSS(withSass({
  cssModules: true,
  webpack(config) {
    const { alias } = config.resolve;
    const configAlias = { ...config };

    configAlias.resolve.alias = {
      ...alias,
      ...aliases,
    };

    return configAlias;
  },
}));
