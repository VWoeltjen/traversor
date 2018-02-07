var path = require('path');

module.exports = {
    entry: './src/traversor',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "traversor.js",
        library: "traversor",
        libraryTarget: "umd"
    },
    module: {
        rules: [
        ]
    },
    resolve: {
        alias: {
        }
    }
    devtool: "source-map",
    plugins: [
    ]
};