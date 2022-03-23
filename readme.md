<!--
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-03-23 22:06:43
 * @LastEditors: lax
 * @LastEditTime: 2022-03-23 23:05:21
 * @FilePath: \program_init\readme.md
-->
# js项目通用文件模板（含自定义插件）
汇总js类项目的通用或可复用文件模板，含自定义插件。不断更新中



# 按文件类型分类检索

## ALI-OSS
### oss.js
* 支持oss自动上传vue/webpack打包的项目（详情请看[vue-cli-plugin-ali-oss](https://github.com/laxnogithub/vue-cli-plugin-ali-oss#readme)）

## BABEL
### .babelrc
* 编译支持@路径-需依赖module-resolver
* vue/cli支持
## BROWSER
### .browserslistrc
* 常用浏览器兼容版本
  
## EDITORCONFIG
### .editorconfig
* 统一项目文件换行符
* 统一项目文件文末换行
* 统一项目文件字符集
* 统一项目文件空行为tab

## ESLINT
### .eslintrc.js
* babel支持
* jest支持
* prettier支持

## GIT
### .gitignore
* node_modules
* dist
* yarn.lock
* .idea
* *.suo
* *.ntvs*
* *.njsproj
* *.sln
* *.sw?
* npm-debug.log*
* yarn-debug.log*
* yarn-error.log*
* .env.local
* .env.*.local

## JEST
### jest.config.js
* 添加jest文件识别逻辑
* 支持vue

## LINT
### .lintstagedrc
* git提交进行vue的语法检查

## TINYPND
### tinypng.js
* 支持打包图片自动经过tinypng压缩（详情请看[vue-tinypng-plugin](https://github.com/laxnogithub/vue-tinypng-plugin.git)）
  
## VUE
### vue.config.js
* vue支持@路径
* 注入html标题和描述
* 图片路径防缓存机制（?v=XXXX）
* css防缓存机制（?v=XXXX）
* js文件防缓存机制（?v=XXXX）
* 生成代码分析报告（BundleAnalyzerPlugin）
* 代码GZIP压缩（CompressionPlugin）
* 自动打包上传阿里oss（vue-cli-plugin-ali-oss）
* 打包图片自动压缩（vue-tinypng-plugin）


## VSCODE
### .vscode/settings.json
* vscode支持@路径
### jsconfig.json
* vscode-jsdoc支持@路径
* 装饰器语法支持

  
## WEBPACK
### webpack.config.js
* webpack支持@路径
* 路径解析函数
