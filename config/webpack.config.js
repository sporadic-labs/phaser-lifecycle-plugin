/* eslint-env node */

const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const root = path.resolve(__dirname, "..");

module.exports = function(env, argv) {
  const isDev = argv.mode === "development";

  return {
    context: path.join(root, "src"),
    entry: {
      "phaser-lifecycle-plugin": "./index.js",
      "phaser-lifecycle-plugin.min": "./index.js"
    },
    output: {
      filename: "[name].js",
      path: path.resolve(root, "dist"),
      library: "PhaserLifecyclePlugin",
      libraryTarget: "umd",
      libraryExport: "default"
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({ include: /\.min\.js$/, sourceMap: true })
      ]
    },
    externals: {
      phaser: {
        root: "Phaser",
        commonjs: "phaser",
        commonjs2: "phaser",
        amd: "phaser"
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
    devtool: isDev ? "eval-source-map" : "source-map"
  };
};
