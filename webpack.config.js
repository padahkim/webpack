const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const isDevelopment = process.env.NODE_ENV !== "production";

  return {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
      },
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    devtool: isDevelopment ? "eval-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.json"),
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
    ],
  };
};
