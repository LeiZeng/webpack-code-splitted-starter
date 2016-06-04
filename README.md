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
    vendor
      webpack_vendor
      vendor1
      vendor2
    common
      utilA
      utilB
      utilC
    pageA
    pageB
    pageC
```
