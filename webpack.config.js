const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const isDevelopment = process.env.NODE_ENV === "production";
const react_refresh_webpack_plugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",

  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    extensions: [".js", ".jsx", "tsx", "ts"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3004,
    devMiddleware: {
      publicPath: "https://localhost:3004",
    },
    hot: "only",
  },
  plugins: [
    isDevelopment && new react_refresh_webpack_plugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
            },
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
