const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const config = {

    entry: "./src/index.js",

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                test: /\.js$/
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                precss,
                                autoprefixer
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],

            // Individual bootstrap components
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Alert: "exports-loader?Alert!bootstrap/js/dist/Alert",
        })
    ]

};

module.exports = config;