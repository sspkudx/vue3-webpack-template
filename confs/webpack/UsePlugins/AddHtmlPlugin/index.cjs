const HtmlPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

// default configuration
const defaultConf = Object.freeze({
    template: resolve(__dirname, '../../../../html/index.htm'),
    templateParameters: {
        lang: 'en-uk',
    },
    inject: 'body',
    title: 'Webpack project!',
});

// use eslint-webpack-plugin
const useHtmlPlugin = (conf = defaultConf) => new HtmlPlugin(conf);

module.exports = {
    useHtmlPlugin,
    defaultConf,
};