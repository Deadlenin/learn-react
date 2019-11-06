const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const build = path.join( __dirname, '../dist' );

const PATHS = {
    conf: path.join(__dirname),
    src: path.join(__dirname, '../src'),
    dist: build,
    public: '/dist',
    assets: 'assets/'
};


module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        reactLearn: PATHS.src,
    },
    output: {
        filename: `js/[name].[hash].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: '/node_modules/',
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/react'
                    ],
                    plugins: [
                        '@babel/proposal-class-properties',
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-syntax-dynamic-import'
                    ]
                }
            }
        }, {
        }, {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: PATHS.conf} }
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: PATHS.conf } }
                }
            ]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json','.scss'],
        alias: {
            '~': PATHS.src,
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            //filename: `${PATHS.assets}css/[name].[hash].css`,
            filename: `css/[name].[hash].css`,
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/${PATHS.assets}img`, to: `img` },
            //{ from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
            //{ from: `${PATHS.src}/static`, to: '' },
        ]),
        new HtmlWebpackPlugin( {
            filename: 'index.html',
            favicon: `${PATHS.src}/assets/favicon.ico` ,
            template: `${PATHS.src}/assets/index.html`
        } )
    ],
};