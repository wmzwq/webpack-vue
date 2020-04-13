一个功能单独封装到一个模块中

浏览器
   AMD(Require.js)、CMD(Sea.js)
服务端 commonjs

ES6模块化是浏览器与服务器通用的模块化方案
 1 每一个js文件也是一个模块
 2 import导入模块
 3 export导出模块

 npm i --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
 npm i --save @babel/polyfill
npm i html-webpack-plugin 生成预览界面
 npm i style-loader css-loader -D css加载器
 npm i less-loader -D  less加载器
 npm i less -D less核心包
 npm i sass-loader node-sass -D sass加载器
 npm i postcss-loader autoprefixer -D 自动添加css浏览器前缀
 npm i url-loader -D 图片加载器
 npm i file-loader -D 
 npm i babel-loader @babel/core @babel/runtime -D babel加载器
 npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D 语法插件
 npm i -D vue-loader vue-template-compiler vue加载器