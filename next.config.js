const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

const aliases = require('./alias-config');

const HOST = process.env.HOST || 'http://localhost:3000';
const PORT = process.env.PORT || 3000;

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
  publicRuntimeConfig: {
    HOST,
    PORT,
  },
})));
