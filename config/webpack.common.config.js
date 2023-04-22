const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  resolve: {
      extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
      alias: {
        '@': resolve('src'),
        pages: resolve('src/pages'),
        components: resolve('src/components'),
        router: resolve('src/router'),
        actions: resolve('src/redux/actions'),
        reducers: resolve('src/redux/reducers')
      }
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js|\.tsx|\.ts)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre' // 这里一定要配置，不然一堆报错，而且错误不在自己写的代码里
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => {
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    flexbox: 'no-2009'
                  })
                }
              }
            }
          }
        ],
        sideEffects: true,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ],
  },
}
