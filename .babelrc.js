const { version: corejs } = require('core-js/package.json');

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs,
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [['@babel/plugin-transform-runtime']],
};
