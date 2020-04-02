
1、什么是webpack
2、核心概念
2.1、入口
2.2、输出
2.3、loader
2.4、插件（plugins）
2.5、模式
3、weback使用流程
3.1、创建项目
3.2、 安装
1、什么是webpack
webpack是目前JavaScript主流的工程自动构建工具 ，vue、react以及angular等项目的脚手架都是基于webpack进行构建的。
模块打包机（module bundle）：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。
     处理应用程序时，会递归的构建一个 依赖关系图（dependency graph），会包含应用程序需要的每一个模块，然后将这些所有的模块打包成一个或者多个bundle， （ 从 webpack v4.0.0开始，可以不引入一个配置文件 ）
使用webpack让开发变得更加简洁。
模块化 可以使复杂的程序细化成为各个小的文件
预处理器 可以对Scss，less等CSS预先进行处理

--------------------------------------------------------------------------------
2、核心概念
2.1、入口
在webpack中指定一个（或多个）入口文件，来作为构建内部依赖图的开始，在入口文件中，webpack会自动找出有哪些模块和库是入口起点依赖的
单个入口写法：
module.exports = {
  entry: './path/to/my/entry/file.js' // 入口文件
};

对象语法：
const config = {
  entry: {
     app: './src/app.js',
    vendors: './src/vendors.js'
  }
};

2.2、输出
output属性告诉webpack在哪里输出它所创建的bundles，以及命名，基本是整个应用程序结构，都会被编译到指定的输出路径的文件夹中，你可以通过在配置中制定一个output字段来配置这些处理过程
const path = require('path');// 用于操作文件路径
module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),// 打包后的输出目录（path.resolve()方法将一系列路径或路径段解析为绝对路径。---nodejs的模块）“
    // __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    filename: 'my-first-webpack.bundle.js'// 打包后的模块名称
  }
};


2.3、loader
loader 让 webpack 能够去处理那些非 JavaScript 文件，可以将所有类型的文件转换为 webpack 能够处理的有效模块
webpack配置中有两个目标：
1、test属性，用于表示出应该被对应的loader进行转换的某个和或者某些文件
2、use ，表示进行转换时，应该使用哪个loader
 module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }

（“嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先使用 raw-loader 转换一下。”）
在 webpack 配置中定义 loader 时，要定义在 module.rules 中，而不是 rules，否则会被webpack给出警告

2.4、插件（plugins）
插件可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务
使用插件，需要require插件，然后添加到plugins中，也可以在配置文件中因为不同目的而多次使用同一个插件，这是就需要通过new来创建一个实例
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const config = {
  ...
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

2.5、模式
选择 development 或 production 之中的一个，来设置mode参数，可以启用响应模式下的webpack内置的优化
module.exports = {
  mode: 'production'
};




--------------------------------------------------------------------------------
3、weback使用流程

3.1、创建项目

目录结构

基础代码
index.html是主入口，需要设置根目录并且将打包后的文件导入


index.js是入口文件
基础代码
index.html是主入口，需要设置根目录并且将打包后的文件导入
<!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>

index.js是我们写的模块
document.getElementById("app").innerText = 'webpack';

3.2、 安装

第一步
要在项目根目录用npm init初始化，生成package.json文件
npm init

初始化过程中会有好多提示，如果非正式项目下可以直接回车调过，括号里的都是默认的,正式项目下可以根据情况填写每一步
name: (webpackDemo) // 项目名称
version: (1.0.0) // 版本号
description: // 项目的描述
entry point: (index.js) // 入口文件
test command: // 测试命令
git repository: // git仓库
keywords: // 关键字
author: // 作者创始人
 license: (ISC) //许可:(ISC)
About to write to C:\Users\Administrator\Desktop\webpackDemo\package.json:

{
  "name": "webpackdemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this ok? (yes) // 这里直接输入yes就可以了



第二步 安装webpack
npm install webpack -g // 全局安装
npm install webpack --save-dev // 项目内安装

如果不想安装最新的版本那么得在webpack后面加一个@然后在填入你要安装的版本号，当然安装最新版本时可以加@版本号也可以不加@版本号

webpack4版需要去额外安装webpack-cli
npm install webpack@4 --save-dev
npm install webpack@4 webpack-cli --save-dev

接下来看下配置文件
{
  "name": "webpackdemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.29.5",
    "webpack-cli": "^3.2.3",
  }
}

注意：package.json文件中不能有注释，在运行的时候请将注释删除


第三步 使用Webpack打包

在当前项目webpackDemo文件夹下新创建一个文件webpack.config.js,写入简单的配置代码，目前的配置主要涉及到的内容是入口文件路径和打包后文件的存放路径
// webpack2的配置
module.exports = {
    entry:  __dirname + "/app/main.js", // 之前提到的唯一入口文件
    output: {
        path: __dirname + "/common", // 打包后的文件存放的地方
        filename: "index.js" // 打包后输出文件的文件名
    }
}
// webpack4的配置
module.exports = {
    // webpack4需要添加这个配置，development为开发环境，production为生产环境
    mode: "development",
    entry:  __dirname + "/app/main.js", // 之前提到的唯一入口文件
    output: {
        path: __dirname + "/common", // 打包后的文件存放的地方
        filename: "index.js" // 打包后输出文件的文件名
    }
}

注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
有了这个配置之后，再打包文件，可以直接执行npx webpack

更加方便的打包操作：
根据上面的方式来看我们只要配置了webpack.config.js就可以将打包的路径命令省去
npm可以引导任务执行，对npm进行配置后可以在命令行中使用简单的npm start命令来替代上面略微繁琐的命令。在package.json中对scripts对象进行相关设置即可，设置方法如下。
{
  "name": "webpackdemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server --open",
    "start": "webpack" // 修改的是这里，JSON文件不支持注释，引用时请清除
  },
  "dependencies": {
  "webpack": "^4.42.1",
  "webpack-cli": "^3.3.11",
  ...
}
}

注：package.json中的script会安装一定顺序寻找命令对应位置，本地的node_modules/.bin路径就在这个寻找清单中
npm的start命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用npm start就可以执行其对于的命令

现在只需要使用npm start就可以打包文件了

