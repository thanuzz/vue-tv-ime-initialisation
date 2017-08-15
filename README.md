<img src="https://camo.githubusercontent.com/728ce9f78c3139e76fa69925ad7cc502e32795d2/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67" alt="VueJS Logo" width="200" height="200"/>

# VueJS TS Locale<br/>[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-version-img]][npm] [![Downloads][npm-downloads-img]][npm] [![Build Status][ci-img]][ci] [![Dependencies][deps-img]][deps]

[VueJS] Plugin for advanced localization of web applications using typescript

[sponsor-img]: https://img.shields.io/badge/Sponsored%20by-TWCAPPS-692446.svg
[sponsor]: https://www.twcapps.com
[VueJS]: https://github.com/vuejs/vue
[ci-img]:  https://travis-ci.org/bartsidee/vue-ts-locale.svg
[ci]:      https://travis-ci.org/bartsidee/vue-ts-locale
[deps]: https://david-dm.org/bartsidee/vue-ts-locale
[deps-img]: https://david-dm.org/bartsidee/vue-ts-locale.svg
[npm]: https://www.npmjs.com/package/vue-ts-locale
[npm-downloads-img]: https://img.shields.io/npm/dm/vue-ts-locale.svg
[npm-version-img]: https://img.shields.io/npm/v/vue-ts-locale.svg


## Links

- [GitHub](https://github.com/bartsidee/vue-ts-locale)
- [NPM](https://www.npmjs.com/package/vue-ts-locale)


## Installation

Should be installed locally in your project source code:

```bash
npm install vue-ts-locale --save
```

## Integration

Inside your VueJS application you have to register the `VueLocale` plugin:

```js
import VueLocale from "vue-ts-locale";

Vue.use(VueLocale,
{
  language: SELECTED_LANGUAGE,
  currency: SELECTED_CURRENCY,
  messages: MESSAGE_TEXTS
})
```

While these are typical examples of values:

- `SELECTED_LANGUAGE`: `"de"`, `"en"`, `"fr"`, ... (any valid language identifier)
- `SELECTED_CURRENCY`: `"EUR"`, `"USD"`, ... (any valid currency from [CLDR data](http://www.currency-iso.org/dam/downloads/lists/list_one.xml))
- `MESSAGE_TEXTS`: `{ key : value, ...}`

