/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-01-06 19:35:40
 * @LastEditors: lax
 * @LastEditTime: 2022-01-29 21:13:20
 * @FilePath: \demo\scripts\vue\config\index.js
 */
const injectHTML = require("./html");
const generatePublicPath = require("./publicPath");
const { path, filePath } = require("./filePath");
const imgHandler = require("./imgHandler");
module.exports = {
	filePath,
	path,
	injectHTML,
	generatePublicPath,
	imgHandler,
};
