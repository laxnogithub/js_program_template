/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-29 20:59:25
 * @LastEditors: lax
 * @LastEditTime: 2022-03-23 22:54:50
 * @FilePath: \program_init\scripts\vue\config\publicPath.js
 */
const { pro } = require("./../env/index");
const { path } = require("./../config/filePath");
const aliOssPlugin = require("vue-cli-plugin-ali-oss");
const DEFAULT_PUBLIC_PATH = "./";

module.exports = (json) => {
	let publicPath = aliOssPlugin.getPrefix(require(path("./oss.js")), json.name);
	publicPath = pro ? publicPath : DEFAULT_PUBLIC_PATH;
	return publicPath;
};
