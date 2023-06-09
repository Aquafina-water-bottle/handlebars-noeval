A small script to build and house a minified handlebars that works on with [Yomitan](https://github.com/themoeway/yomitan). All credits go to the people at [Kibana](https://github.com/elastic/kibana).

NOTE: Please do NOT use this script for general production purposes! It would be better to:
1. Wait until [this gets moved upstream](https://github.com/handlebars-lang/handlebars.js/issues/1934)
2. Wait until they publish it as an [individual package](https://github.com/elastic/kibana/issues/150522)

Do not expect this to be maintained for very long, especially because we are looking to
replace Handlebars entirely with a different solution.

## Building

```
npm ci
npm run build
```

<!--
npm install --save-dev --save-exact esbuild
npm install --save-dev handlebars esbuild
-->

