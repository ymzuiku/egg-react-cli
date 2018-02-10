var fse = require('fs-extra')
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require('autoprefixer')
var client = process.env.client  || 'react'
var dllManifestPath = path.join(__dirname, '../', '../', `/client-${client}/assets/dll/dll-manifest.json`)
let isHaveDll = fse.existsSync(dllManifestPath)
let dllPligins = isHaveDll?[new webpack.DllReferencePlugin({
  // context: __dirname,
  manifest: dllManifestPath,
})]:[]

let cssLoaders = [
  {
    loader: require.resolve('style-loader'),
    options: {
      sourceMap: true,
    },
  },
  {
    loader: require.resolve('css-loader'),
    options: {
      sourceMap: true,
    },
  },
{
  loader: require.resolve('postcss-loader'),
  options: {
    // sourceMap: 'inline',
    sourceMap: true,
    ident: 'postcss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
    ],
  },
},
]

module.exports = {
  entry: {
    app: `./client-${client}/index.js`,
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, `../../public/${client}`),
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'vue': 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, `../../client-${client}`),
    }
  },
  plugins: [
    // 全局变量
    new webpack.ProvidePlugin({
      $: 'jquery',
      _:'underscore'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `../../client-${client}/index.html`)
    }),
    new webpack.HashedModuleIdsPlugin(),
    ...dllPligins,
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        exclude: function (path) {
          // 路径中含有 node_modules 的就不去解析。
          var isNpmModule = !!path.match(/node_modules/) || !!path.match(/assets/)
          return isNpmModule;
        },
        loader: 'babel-loader',
        query: {
          presets: ['react', "es2015", "stage-0", "env",],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.css$/,
        use: [...cssLoaders],
      },
      {
        test: /\.styl$/,
        use: [
          ...cssLoaders,
          {
          loader: "stylus-loader", options: {
            strictMath: true,
            noIeCompat: true,
            sourceMap: true,
          }
        },]
      },
      {
        test: /\.less$/,
        use: [
          ...cssLoaders,
          {
          loader: "less-loader", options: {
            strictMath: true,
            noIeCompat: true,
            sourceMap: true,
          }
        },]
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // mimetype: 'image/png',
              // fallback: 'responsive-loader',
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  stats: "errors-only",  //minimal
}