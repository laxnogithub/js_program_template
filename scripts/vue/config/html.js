/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-29 21:02:19
 * @LastEditors: lax
 * @LastEditTime: 2022-01-29 21:02:19
 * @FilePath: \demo\scripts\vue\config\html.js
 */
module.exports = (config, json) => {
	// inject title desc
	config.plugin("html").tap((args) => {
		args[0].title = json.title;
		args[0].desc = json.description;
		return args;
	});
};
