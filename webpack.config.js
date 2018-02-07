var path = require('path');

module.exports = {
    entry: './src/traversor',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "traversor.js",
        library: "traversor",
        libraryTarget: "umd",
        libraryExport: "default"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }            
        ]
    },
    resolve: {
        alias: {
        }
    },
    devtool: "source-map"
};