const path = require("path");

module.exports = {
  entry: "./app/js/scripts.js",
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "bundle.min.js",
  },

  watch: false,
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
