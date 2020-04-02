const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js", // 之前提到的唯一入口文件
    output: {
        path: path.resolve(__dirname, "../lib"), // 打包后的文件存放的地方
        filename: "[name].bundle.js" // 打包后输出文件的文件名
    },
    plugins: [
        new HtmlWebpackPlugin({ // 自动生成html
            filename: "index.html",
            template: path.resolve(__dirname, "../", "index.html")
        })
    ]
};
