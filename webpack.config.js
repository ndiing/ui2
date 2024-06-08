// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    devServer: {
        open: true,
        host: "localhost",
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/i,
            //     loader: "babel-loader",
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    //
                    stylesHandler,
                    "css-loader",
                    // "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    //
                    stylesHandler,
                    "css-loader",
                    // "postcss-loader",
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    // optimization: {
    //     minimize: isProduction,
    //     minimizer: [new TerserPlugin()],
    // },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";

        // config.plugins.push(
        //     new WorkboxWebpackPlugin.GenerateSW(),
        //     new CompressionPlugin({
        //         filename: '[path][base].gz',
        //         algorithm: 'gzip',
        //         test: /\.(js|css|html|svg)$/,
        //         threshold: 8192,
        //         minRatio: 0.8,
        //     })
        // );
    } else {
        config.mode = "development";
    }
    return config;
};
