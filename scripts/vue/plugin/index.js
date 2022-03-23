/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-29 20:26:41
 * @LastEditors: lax
 * @LastEditTime: 2022-03-23 23:02:13
 * @FilePath: \program_init\scripts\vue\plugin\index.js
 */

const { filePath } = require("./../config/index");
const { pro, bap } = require("./../env/index");
const css = "css";

const productionGzipExtensions =
	/\.(js|css|json|txt|html|ico|svg|ttf)(\?.*)?$/i;

const productionAliOssUpload =
	/\.(png|jpe?g|bmp|gif|mp4|webm|mp3|js|css|json|ico|txt|ttf|html)/;

const tinypngPlugin = require("vue-tinypng-plugin");
const aliOssPlugin = require("vue-cli-plugin-ali-oss");
const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// plugin
const plugins = [];

const miniCssExtractPlugin = new MiniCssExtractPlugin({
	filename: filePath(css),
	chunkFilename: filePath(css),
});

plugins.push(miniCssExtractPlugin);

if (pro) {
	plugins.push(new tinypngPlugin());
	plugins.push(new aliOssPlugin({ reg: productionAliOssUpload }));
	plugins.push(new CompressionPlugin({ test: productionGzipExtensions }));
}
if (bap) {
	plugins.push(new BundleAnalyzerPlugin());
}

module.exports = plugins;
