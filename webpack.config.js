const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: process.env.NODE_ENV == "development" ? "development" : "production",
  output: {
    filename: "[name]-[hash:8].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV == "development" ? "style-loader" : null,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    port: 9999,
    open: true,
    // liveReload: true,
    hot: true,
  },
};
