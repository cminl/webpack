const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: __dirname + "/src/common/main.js", // 之前提到的唯一入口文件
    output: {
        path: path.resolve(__dirname, "dist"), // 打包后的文件存放的地方
        filename: "[name].bundle.js" // 打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // 自动生成html
            filename: "index.html",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style/[name].css"
        })
    ]
};
