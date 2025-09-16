# Main commands and actions

## Sources
* `https://habr.com/ru/articles/524260/`
* `https://www.taniarascia.com/how-to-use-webpack/`
* `https://github.com/taniarascia/webpack-boilerplate/`
## `Dependensies`, `nvm`, `npm`
```bash
npm list
.../webpack-5-tutorial
├── @babel/core@7.12.9
├── @babel/plugin-proposal-class-properties@7.12.1
├── @babel/preset-env@7.12.1
├── babel-loader@8.1.0
├── html-webpack-plugin@4.5.2
├── webpack-cli@5.0.1
└── webpack@5.75.0

npm list -g
.../.nvm/versions/node/v17.4.0/lib
├── corepack@0.10.0
├── http-server@0.12.3
└── npm@8.5.1
```
## `Initialisation`
* major commands
  * `npm -v`
    * 8.5.1
  * `node -v`
    * v17.4.0
  * `mkdir webpack-5-tutorial`
  * `cd webpack-5-tutorial`
  * `npm init -y`
    * get
      * folders
        * `dist`
        * `node_modules`
      * `package` files
  * `npm i -D webpack@5.75.0 webpack-cli@5.0.1`
    * `https://github.com/taniarascia/webpack-boilerplate/blob/master/package.json`
  * `git init`
* create
  * `.gitignore`
    ```text
    dist
    node_modules
    ```
  * src/
    * `template.html`
    * `index.js`
## `entry` and `output` points
* create `webpack.config.js`
  * `entry` point
  * `output` point
## `build` script
*  in `package.json`
  ```json
  //..,
  "scripts": {
    "build": "webpack"
  },
  //...
  ```
* 🍏 npm run build
  * get dist/`main.bundle.js`
## `Html` `Webpack` plugin
* create src/`template.html` by `emmet` command `!`
* `npm i -D html-webpack-plugin@4.5.2`
  * `https://www.npmjs.com/package/html-webpack-plugin?activeTab=versions`
* add `Html Webpack Plugin` in `webpack.config.js`
  ```js
  module.exports = {
    //..,
    plugins: [
      new HtmlWebpackPlugin({
        title: 'webpack boilerplate',
        template: path.resolve(__dirname, './src/template.html'),
        filename: 'index.html' // output file
      }),
    ]
  }
  ```
* 🍏 npm run build
  * get dist/`index.html`
## `HTTP Server`
* `npm i -g http-server@0.12.3`
  * `https://www.npmjs.com/package/http-server?activeTab=versions` 5 yers
* 🟡 `npm run build`
  ```bash
  WARNING in configuration
  The 'mode' option has not been set, webpack will fallback to 'production' for this value.
  Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
  Learn more: https://webpack.js.org/configuration/mode/
  ```
* 🍏 run `http-server`
  * go to `dist` directory and run `http-server`
    * in terminal
      ```bash
        webpack-5-tutorial % cd dist
        dist % http-server
      ```
    * 🍏 look at `http://127.0.0.1:8080` -> Interesting!
      * it is the `heading.textContent` from src/`index.js`
## `development` / `production` mode
* set `development` or `production` mode in `webpack.config.js`
  * `https://webpack.js.org/configuration/mode/`
  ```js
  module.exports = {
    //..,
    mode: 'development',
  };
  ```
* 🍏 `npm run build`
## `Clean` `Webpack` plugin
* needs for cleaning of `dist` folder before `npm run build`
  * NOTE: although `npm run build` command automaticly replaces files in the `dist` folder
* 🔴 `npm i clean-webpack-plugin@4.0.0`
  * `https://www.npmjs.com/package/clean-webpack-plugin?activeTab=versions`
  * errors
    ```bash
    ...
    npm WARN EBADENGINE   required: { node: '20 || >=22' },
    ...
    ```
  * `npm uninstall clean-webpack-plugin`
  * 🍏 `npm list`
* 🔴 `npm i clean-webpack-plugin@3.0.0`
  * errors
    ```bash
    ...
    npm WARN EBADENGINE   required: { node: '20 || >=22' },
    ...
    ```
  * `npm uninstall clean-webpack-plugin`
  * 🍏 `npm list`
* webpack.config.output.`clean` `true`
  * AI: В Webpack 5 встроена функция очистки выходной директории без дополнительных плагинов. Достаточно добавить в конфигурацию:
    ```js
    javascript
    module.exports = {
      //...,
      output: {
        //...,
        clean: true, // Очищает output.path перед сборкой
      },
      //...
    };
    ```
## `Babel` installation
* add a `Game class` in `index.js`
* 🔴 `npm run build`
* `babel-loader` integrates `Babel` into the `Webpack` build process
  * `https://www.npmjs.com/package/babel-loader?activeTab=versions`
* `@babel/core` contains whole functionality of `Babel`
  * `https://www.npmjs.com/package/@babel/core?activeTab=versions`
* `@babel/preset-env` is lots of presets for old browser envirement
  * `https://www.npmjs.com/package/@babel/preset-env?activeTab=versions`
* `@babel/plugin-proposal-class-properties` compiles `class`, `object`, etc to `ES5`
  * `https://www.npmjs.com/package/@babel/plugin-proposal-decorators?activeTab=versions`
* install `babel-loader`, `@babel/core`, `@babel/preset-env`, etc
  * `npm i -D babel-loader@8.1.0 @babel/core@7.12.9 @babel/preset-env@7.12.1 @babel/plugin-proposal-class-properties@7.12.1`
* `browserslist`
  * `https://habr.com/ru/articles/598495/` about 
    * `browserslist`, 
    * `polyfill`, 
    * `core-js`, 
    * `Babel`, 
    * ` Webpack --analyze`
  * `DeepSeek browserslist`
    * /Users/aliv/Documents/0_Docs/0_Job/Coding/DeepSeek_Ex
  * example:
    ```json
    "browserslist": [
      "last 1 version",
      "> 1%",
      "not dead"
    ]
    ```
  * `npx browserslist`
    ```bash
    npx browserslist
    and_chr 139
    and_ff 142
    and_qq 14.9
    and_uc 15.5
    android 139
    chrome 140
    chrome 139
    chrome 138
    chrome 137
    chrome 112
    chrome 109
    edge 140
    edge 139
    edge 138
    firefox 142
    firefox 141
    firefox 140
    firefox 128
    ios_saf 18.5-18.6
    ios_saf 18.4
    kaios 3.0-3.1
    kaios 2.5
    op_mini all
    op_mob 80
    opera 121
    opera 120
    safari 18.5-18.6
    safari 18.4
    samsung 28
    samsung 27
    ```
  * browsers useability `https://caniuse.com/usage-table`
  * `https://github.com/browserslist/browserslist?tab=readme-ov-file#config-file`
* `core-js` is a popular lib of `polyfills`
  * `polyfill` is a code that implements a new feature for working in old versions of this environment
    * `https://ru.wikipedia.org/wiki/Полифил`
  * example of `Object.assign(target, ...sources)`
    ```js
    /* core-js lib has a unecceptable hude weight */
    // import 'core-js';
    /* only required object is imported from this lib */
    import 'core-js/actual/object/assign';

    const target = { a: 1, b: 2 };
    const source1 = { b: 4, c: 3 };
    const source2 = { d: 5 };

    /* The target object will be changed */
    /* (added by copies of the source1 and the source2) */
    /* and returned */
    const target = Object.assign(target, source1, source2);

    /* { a: 1, b: 4, c: 3, d: 5 } */
    /* target.b is replaced by sourc1.b */
    console.log(result);
    ```
  * NOTE about `Babel` and `core-js`: 
    * `Babel` is used to replace `polyfills` and other `complexity`
      * `npmjs` downloaded (millions) total / weekly
        * `core-js` 
          * `168` / `32` 
        * `@babel/core`
          * `301` / `58`
    * `core-js` + `Babel`
      ```js
      // .babelrc.js
      module.exports = {
        "presets": [["@babel/preset-env", {
          "useBuiltIns": "usage",
          "corejs": 3
        }]]
      }
      ```
## `Babel` settings
* add `module: { rules: [...] }` in `webpack.config.js`
  ```js
  module.exports = {
    //..,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ]
    },
  }
  ```
  * NOTE: `typescript-loader` needs for `Tyrescript`
    ```js
    module.exports = {
      module.exports = {
        //..,
        module: {
          rules: {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: ['typescript-loader'],
          },
        }
      }
    }
* create `babel.config.json` (early named as `.babelrc`)
* add `presets` and `plugins` in `babel.config.json`
  ```js
  {
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
  }
  ```
* 🍏 `npm run build`
* 🍏 run `http-server`
  * go to `dist` directory and run `http-server`
    * in terminal
      ```bash
        webpack-5-tutorial % cd dist
        dist % http-server
      ```
    * 🍏 look at `http://127.0.0.1:8080` -> Interesting!
      * it is the `heading.textContent` from src/`index.js`
## Images `.png` via `asset/resource`
* create src/`images`/`example.png`
  * from `https://www.vecteezy.com/free-png/`
* add a `img` code snippet in `src/index.js`
  ```js
  import coffeePng from './images/cup-of-coffee-200.png'
  //...
  const img = document.createElement('img')
  img.src = coffeePng
  img.width = 100
  img.setAttribute('height', 100)

  const app = document.querySelector('#root')
  app.append(..., img)
  ```
  * 🔴 `npm run build`
    ```bash
    ERROR in ./src/images/example.png 1:0...
    You may need an appropriate loader to handle this file type... in ./src/index.  js
    See https://webpack.js.org/concepts#loaders
    ```
    * see `https://webpack.js.org/concepts#loaders` and get nothing
* `Assets` Modules work with `fonts`, `icons`, `images`, `etc` without any loaders
  * `https://webpack.js.org/guides/asset-modules/`
  * there are `three` loaders up to webpack-5
    * `raw-loader`
    * `url-loader`
    * `file-loader`
  * this `four` loaders replace old ones starting from webpack-5
    * `assets/resource` partialy instead of `file-loader`
    * `assets/inline` instead of `url-loader`
    * `asset` partialy instead of `url-loader`
    * `assets/source` instead of `raw-loader`
* in `webpack.config.js` add `asset/resource` for `images`
  * `https://webpack.js.org/guides/asset-modules/#resource-assets`
  ```js
  module.exports = {
    //..,
    module: {
      rules: [
        //..,
        {
          test: /\.(gif|png|jpg|jpeg|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash:8][ext][query]'
          }
        },
      ]
    },
  }
  ```
* get dist/`[full hash].png`
  * 🍏 `npm run build`
* use `rules.generator: { filename: 'images/[hash:8][ext]' }`
  * `https://webpack.js.org/guides/asset-modules/#custom-output-filename`
    ```js
    module.exports = {
      //..,
      module: {
        rules: [
          //..,
          {
            test: /\.(gif|png|jpg|jpeg|svg)$/i,
            type: 'asset/resource',
            generator: {
              // filename: 'images/[name][ext]'
              filename: 'images/[hash:8][ext]'
        }
          }
        ]
      },
    }
    ```
  * 🍏 `npm run build`
    * get dist/`images`/`limited_hash.png`
  * 🍏 `dist % http-server`
* use `output.assetModuleFilename` vs `rules.generator`
  * `https://webpack.js.org/guides/asset-modules/#custom-output-filename`
  * `https://webpack.js.org/configuration/output/#outputassetmodulefilename`
  ```js
  module.exports = {
    //..,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
      assetModuleFilename: 'images/[hash:8][ext]',
    },
    //...
    module: {
      rules: [
        //...,
        {
          test: /\.(?:iso|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
          // generator: {
          //   filename: 'images/[hash:8][ext][query]'
          // }
        }
      ]
    },
  }
  ```
  * 🍏 `npm run build`
    * get dist/images/`[hash:8].png`
  * 🍏 `dist % http-server`
## Image `.svg` via `asset/inline` (`Fonts` too)
* src/images/`hot-air-balloon-svgrepo-com.svg`
  * `https://www.svgrepo.com/svg/530601/hot-air-balloon`
* Create `svg` node in `index.js`
  ```js
  //...
  const block = document.createElement('div');
  block.style.width = '100%';
  block.style.height = '200px';
  block.style.background = `url(${balloonSvg}) center/cover no-repeat`; 

  const app = document.querySelector('#root')
  app.append(..., block)
  ```
* add `module.rules` in `webpack.config.js`
  ```js
  module: {
    rules: [
      //...,
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ]
  }
  ```
  * 🍏 `npm run build`
  * 🍏 `dist % http-server`
## 
