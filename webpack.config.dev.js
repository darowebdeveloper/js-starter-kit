import path from "path";

export default {
  mode: "development", // set node development environment
  devtool: "eval-source-map", // debug or compile code
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "src"), // in dev, files served from memory
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
