/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-29 21:11:53
 * @LastEditors: lax
 * @LastEditTime: 2022-02-22 20:47:43
 * @FilePath: \demo\scripts\vue\config\imgHandler.js
 */
module.exports = (config, publicPath) => {
	config.module.rule("images").use("url-loader").loader("file-loader").options({
		publicPath,
		name: "img/[folder]/[name].[ext]?v=[hash:6]",
	});
	const mediaRule = config.module.rule("media");
	mediaRule.uses.clear();
	mediaRule.use("url-loader").loader("file-loader").options({
		publicPath,
		name: "[folder]/[name].[ext]?v=[hash:6]",
	});
};
