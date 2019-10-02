const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [],
    performance: {
        hints: false,
        maxEntrypointSize: 300000,
        maxAssetSize: 100000
    },
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
});