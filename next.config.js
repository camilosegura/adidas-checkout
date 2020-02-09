const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

const aliases = require('./alias-config');

module.exports = withFonts(withCSS(withSass({
  // cssModules: true,
  webpack(config) {
    const { alias } = config.resolve;
    const configAlias = { ...config };

    configAlias.resolve.alias = {
      ...alias,
      ...aliases,
    };

    return configAlias;
  },
})));
