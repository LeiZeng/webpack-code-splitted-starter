var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        vendor: ["./src/vendor1", "./src/vendor2"],
        pageA: "./src/pageA",
        pageB: "./src/pageB",
        pageC: "./src/pageC"
        // older versions of webpack may require an empty entry point declaration here
        // common: []
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js"
    },
    plugins: [
        new CommonsChunkPlugin({
            // The order of this array matters
            names: ["common", "vendor"],
            minChunks: 2
        })
    ]
};
