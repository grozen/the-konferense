const { createConfig, defineConstants, env, entryPoint, setOutput, sourceMaps, addPlugins } = require('@webpack-blocks/webpack2');
const devServer = require('@webpack-blocks/dev-server2');
const postcss = require('@webpack-blocks/postcss');
const typescript = require('@webpack-blocks/typescript');
const tslint = require('@webpack-blocks/tslint');
const extractText = require('@webpack-blocks/extract-text2');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const fs = require('fs');

const preprocessor = production => ({
    PRODUCTION: production,
    DEVELOPMENT: !production
});

const ifdef = (opts, block) => context => {
    let conf = block(context);
    conf.module.loaders[0].loaders.push(`ifdef-loader?json=${JSON.stringify(opts)}`);
    return conf;
}

const tsIfDef = production => ifdef(preprocessor(production), typescript({
    useCache: true,
    cacheDirectory: 'node_modules/.cache/at-loader'
}));

const appPath = (...names) => path.join(process.cwd(), ...names);

const customConfig = fs.existsSync(appPath('webpack.config.js')) ?
    require(appPath('webpack.config.js')) :
    {};

function imageHandler () {
  return (context) => ({
    module: {
      loaders: [
        {
          test: context.fileType('image'),
          loaders: [ 'file-loader' ]
        }
      ]
    }
  })
}

if(customConfig === undefined) {
    throw new Error('The 3.0 update is a breaking release, you need to upgrade manually. Please refer to https://github.com/cyclejs-community/create-cycle-app-flavors#migrating');
}

module.exports = createConfig([
    () => customConfig, //Include user config
    tslint(),
    postcss([
        autoprefixer({ browsers: ['last 2 versions'] })
    ]),
    defineConstants({
        'process.env.NODE_ENV': process.env.NODE_ENV
    }),
    addPlugins([
        new HtmlWebpackPlugin({
            template: './index.ejs',
            inject: true,
            favicon: 'public/favicon.png',
            hash: true
        }),
        new webpack.ProvidePlugin({
            Snabbdom: 'snabbdom-pragma'
        })
    ]),
    env('development', [
        tsIfDef(false),
        devServer(),
        sourceMaps(),
        addPlugins([
            new webpack.NamedModulesPlugin()
        ])
    ]),
    env('production', [
        tsIfDef(true),
        imageHandler(),
        addPlugins([
            new CleanWebpackPlugin(['dist'], {root: appPath()}),
            new webpack.optimize.UglifyJsPlugin(),
            new CopyWebpackPlugin([
                {from: '2016/dist', to: '2016'},
                {from: 'CNAME'},
                {from: 'public/opengraph.png', to: 'opengraph.png'},
                {from: 'public/code-of-conduct-klarna-events.pdf'}
            ])
        ])
    ])
])
