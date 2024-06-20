const webpack = require('webpack');

module.exports = function override(config, env) {
    // Fallback to use an empty module for `crypto`
    config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
    };

    return config;
};
