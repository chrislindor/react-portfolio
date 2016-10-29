module.exports = {
  entry: "./app/main.js",
  output: {
    path: "public",
    filename: "bundle.js"
  },
  devServer: {
    inline:true,
    contentBase: './public',
    port: 3200
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
