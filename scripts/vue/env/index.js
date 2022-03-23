/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-29 20:30:49
 * @LastEditors: lax
 * @LastEditTime: 2022-01-29 20:59:40
 * @FilePath: \demo\scripts\vue\env\index.js
 */

const pro = process.env.NODE_ENV === "production";
const bap = process.env.BAP_NEV === "bap";

module.exports = { pro, bap };
