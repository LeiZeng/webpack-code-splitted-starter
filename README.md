Quick start for webpack code splitting
-------------------------------------

Refference:
[Official Sample](https://github.com/webpack/webpack/tree/v2.1.0-beta.8/examples/common-chunk-and-vendor-chunk)

##Getting start
`npm i && npm run build`

Code dependencies structure:
```
  src/
    pageA.js
      vendor1
      utilA
      utilB
    pageB.js
      utilB
      utilC
    pageC.js
      vendor2
      utilA
      utilC
```

Code bundles structure:
```
  dist/js/
    vendor.js
      webpack_vendor
      vendor1
      vendor2
    common.js
      utilA
      utilB
      utilC
    pageA.js
    pageB.js
    pageC.js
```

webpack configuration:
```js
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
```
