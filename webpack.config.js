const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
