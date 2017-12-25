/**
 * Created by lin.chen on 2017/7/11.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config.js');

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,	// 服务的公共路径
    hot: true,								// 启动热更新，wepack-dev-server中需相应配置
    inline: true,							// inline模式，另外一种模式是iframe，webpackDevServer的启动模式而已
    historyApiFallback: true,				// 如果访问路径404了，是否返回index.html
    stats: { colors: true },				// 控制台输出的配置，启用不同信息不同的颜色
    disableHostCheck: true,                 // 解决不能根据ip访问（新版的webpack-dev-server出于安全考虑，默认检查hostname，如果hostname不是配置内的，将中断访问。）
});

//将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});
server.listen(8888, function() {
    console.log('正常打开8888端口');
});
