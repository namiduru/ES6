module.exports = {
    entry: `${__dirname}/src/app.js`,
    output : {
        path: `${__dirname}/dist`,
        filename: `bundle.js`
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}