const aliases = require('./alias-config');

module.exports = {
  webpack(config) {
    const { alias } = config.resolve;
    const configAlias = { ...config };

    configAlias.resolve.alias = {
      ...alias,
      ...aliases,
    };

    return configAlias;
  },
};
