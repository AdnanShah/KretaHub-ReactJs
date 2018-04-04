'use strict';  // eslint-disable-line

/**
 * Webpack configuration base class
 */
const fs = require('fs');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const npmBase = path.join(__dirname, '../../node_modules');

class WebpackBaseConfig {

    constructor() {
        this._config = {};
    }

    /**
     * Get the list of included packages
     * @return {Array} List of included packages
     */
    get includedPackages() {
        return [].map((pkg) => fs.realpathSync(path.join(npmBase, pkg)));
    }

    /**
     * Set the config data.
     * This will always return a new config
     * @param {Object} data Keys to assign
     * @return {Object}
     */
    set config(data) {
        this._config = Object.assign({}, this.defaultSettings, data);
        return this._config;
    }

    /**
     * Get the global config
     * @return {Object} config Final webpack config
     */
    get config() {
        return this._config;
    }

    /**
     * Get the environment name
     * @return {String} The current environment
     */
    get env() {
        return 'dev';
    }

    /**
     * Get the absolute path to src directory
     * @return {String}
     */
    get srcPathAbsolute() {
        return path.resolve('./src');
    }

    /**
     * Get the absolute path to tests directory
     * @return {String}
     */
    get testPathAbsolute() {
        return path.resolve('./test');
    }

    /**
     * Get the default settings
     * @return {Object}
     */
    get defaultSettings() {
        const cssModulesQuery = {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]-[local]-[hash:base64:5]'
        };

        return {
            context: this.srcPathAbsolute,
            devtool: 'eval',
            devServer: {
                contentBase: ['./public/', './src/'],
                publicPath: '/assets/',
                historyApiFallback: true,
                hot: true,
                inline: true,
                port: 3000
            },
            entry: './index.js',
            module: {
                rules: [
                    {
                        enforce: 'pre',
                        test: /\.js?$/,
                        include: this.srcPathAbsolute,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react', 'stage-2']
                        }

                    },
                    {
                        test: /^.((?!cssmodule).)*\.css$/,
                        loaders: [
                            {loader: 'style-loader'},
                            {loader: 'css-loader'}
                        ]
                    },
                    {
                        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot|ico)$/,
                        loader: 'file-loader'
                    },
                    {
                        test: /^.((?!cssmodule).)*\.styl$/,
                        loaders: [
                            {loader: 'style-loader'},
                            {loader: 'css-loader'},
                            {loader: 'stylus-loader'}
                        ]
                    },
                    {
                        test: /\.json$/,
                        loader: 'json-loader'
                    },
                    {
                        test: /\.cssmodule\.(sass|scss)$/,
                        loaders: [
                            {loader: 'style-loader'},
                            {
                                loader: 'css-loader',
                                query: cssModulesQuery
                            },
                            {loader: 'sass-loader'}
                        ]
                    },
                    {
                        test: /\.cssmodule\.css$/,
                        loaders: [
                            {loader: 'style-loader'},
                            {
                                loader: 'css-loader',
                                query: cssModulesQuery
                            }
                        ]
                    },
                    {
                        test: /\.cssmodule\.less$/,
                        loaders: [
                            {loader: 'style-loader'},
                            {
                                loader: 'css-loader',
                                query: cssModulesQuery
                            },
                            {loader: 'less-loader'}
                        ]
                    },
                    {
                        test: /\.cssmodule\.styl$/,
                        loaders: [
                            {loader: 'style-loader'},
                            {
                                loader: 'css-loader',
                                query: cssModulesQuery
                            },
                            {loader: 'stylus-loader'}
                        ]
                    }, {
                        test: /\.js?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                extends: path.join(__dirname, '../../.babelrc'),
                                cacheDirectory: true
                            }
                        }
                    },

                ]
            },
            output: {
                path: path.resolve('./dist/assets'),
                filename: 'app.js',
                publicPath: './assets/'
            },
            plugins: [
                new ExtractTextPlugin('styles.css'),
            ],
            resolve: {
                alias: {
                    assets: `${this.srcPathAbsolute}/assets/`,
                    actions: `${this.srcPathAbsolute}/actions/`,
                    components: `${this.srcPathAbsolute}/components/`,
                    constants: `${this.srcPathAbsolute}/constants`,
                    config: `${this.srcPathAbsolute}/config/${this.env}.js`,
                    containers: `${this.srcPathAbsolute}/containers/`,
                    reducers: `${this.srcPathAbsolute}/reducers/`,
                    app: `${this.srcPathAbsolute}/app/`,
                    styles: `${this.srcPathAbsolute}/styles/`,
                    util: `${this.srcPathAbsolute}/util/`
                },
                extensions: ['.js', '.jsx'],
                modules: [
                    this.srcPathAbsolute,
                    'node_modules'
                ]
            }
        };
    }
}

module.exports = WebpackBaseConfig;
