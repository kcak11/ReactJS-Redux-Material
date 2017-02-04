
// Karma configuration
// Generated on Sat Jan 14 2017 08:20:46 GMT-0800 (Pacific Standard Time)
var webpack = require("webpack"),
    path = require("path");

module.exports = function(config) {
  config.set({
    basePath: "./",
    frameworks: ["jasmine"],
    files: [
        "./test/**/*.spec.js"
    ],
    preprocessors: {
        "./test/**/*.spec.js": ["webpack"]
    },
    webpack: {
        module: {
            loaders: [
                { test: /\.js$/, loader: "jsx-loader" },
                { test: /\.less$/, loader: "style!css!less" }
            ]
        },
        plugins: [
            new webpack.ResolverPlugin([
                new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
            ])
        ],
        resolve: {
            root: [path.join(__dirname, "./bower_components"), path.join(__dirname, "./src")]
        }
    },
    webpackMiddleware: {
        noInfo: true
    },
    plugins: [
        require("karma-webpack"),
        require("karma-jasmine"),
        require("karma-chrome-launcher")
    ],
    reporters: ["dots"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false
  });
};
