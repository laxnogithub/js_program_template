/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-29 21:08:54
 * @LastEditors: lax
 * @LastEditTime: 2022-01-29 21:08:54
 * @FilePath: \demo\scripts\vue\config\filePath.js
 */
const pathResolve = require("path");
module.exports = {
	filePath: (name) => `${name}/[name].${name}?v=[hash:6]`,
	path: (url) => pathResolve.resolve(__dirname, "./../../../", url),
};
