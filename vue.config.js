/*
 * @Description: vue配置默认模板文件
 * @Version: 1.2.0
 * @Author: lax
 * @Date: 2020-04-01 12:54:53
 * @LastEditors: lax
 * @LastEditTime: 2022-03-23 22:50:10
 */
const {
	filePath,
	path,
	generatePublicPath,
	injectHTML,
	imgHandler,
} = require("./scripts/vue/config");
const plugins = require("./scripts/vue/plugin");
const json = require("./package.json");
const publicPath = generatePublicPath(json);
module.exports = {
	configureWebpack: (config) => {
		/* vue 断点 */
		config.devtool = "source-map";
		const js = "js";

		// output
		const output = {
			filename: filePath(js),
			chunkFilename: filePath(js),
		};

		return { output, plugins };
	},
	/* 设置build的引用文件路径 */
	publicPath,
	/* 生产环境sourcemap 清除 */
	productionSourceMap: true,
	/* 取消文件名hash值 */
	filenameHashing: false,
	chainWebpack: (config) => {
		// 注入标题和描述
		injectHTML(config, json);
		// 图片hash防缓存机制
		imgHandler(config, publicPath);

		/* 支持@ */
		config.resolve.alias
			.set("@", path("./src"));
	},
};
