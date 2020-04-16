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
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/, // 使用 css-loader 时， CSS 中的 url('./my-image.png') loader 会识别这是一个本地文件，
                // 并将 './my-image.png' 路径，替换为输出目录中图像的最终路径。html-loader 以相同的方式处理 <img src="./my-image.png" />。
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 15360, // size <= 15KB, 改成15257(<14.9KB)试试?
                            name: "[name]-[hash:5].min.[ext]", // 设置文件名(>limit的情况)
                            publicPath: "./", // 设置资源文件的引用根路径
                            outputPath: "style/" // publicPath/outputPath/[name].[ext]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // 自动生成html
            filename: "index.html",
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style/[name].css"
        })
    ],
    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        host: "192.168.1.38", //本机的局域网ip
        port: "9527",
        open: true //是否运行成功后直接打开页面
    }
};
