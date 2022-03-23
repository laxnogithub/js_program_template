/*
 * @Description: jest.config.js 模板
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-11-19 21:32:34
 * @LastEditors: lax
 * @LastEditTime: 2022-03-23 22:43:30
 * @FilePath: \program_init\jest.config.js
 */

/* #############说明#############
 * 1.添加jest文件识别逻辑
 * #############说明#############
 */
module.exports = {
	preset: "@vue/cli-plugin-unit-jest",
	testMatch: [
		"**/test/**/?(*.)(spec|test).js?(x)",
		"**/?(*.)(spec|test).js?(x)",
	],
};
