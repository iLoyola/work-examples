const path = require("path");

module.exports = {
  mode: "development",
  watch: true,
  entry: path.join(__dirname, "webpack", "main"),
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "assets/js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: [".json", ".js", ".jsx"]
  }
};