/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-04-12 16:44:57
 * @LastEditors: lax
 * @LastEditTime: 2022-03-23 22:34:07
 * @FilePath: \program_init\webpack.config.js
 */
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  output: {
    path: resolve("bin"),
  },
  resolve: {
    // 设置别名
    alias: {
      "@": resolve("src"),
      "@test": resolve("test")
    }
  },
  mode: process.env.NODE_ENV || "development"
};
