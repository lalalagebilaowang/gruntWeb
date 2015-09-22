//模拟后端行为  分迭代   完全前后端分离  并行开发 最后联调，初期定好所需功能的api即可 使用node.js
var express = require('express'),  //加载express模块
	simData = require('./simData');  //加载模拟数据模块
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');  //加载解析request参数模块
var app = express();
var http = require('http').createServer(app);  
// var io = require('socket.io').listen(http);   //sockeio长连接可用于长时间推送数据
app.set('port', 19000);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());

http.listen(19000, function() {
	console.log('监听端口：19000');
});

/**********************************begin*****************************/
//
app.get('/shasha', function(req, res) {
  var channelType = req.body.channelType + '';  //解析参数
	res.send(simData.simData1);  //返回参数
	console.log('todayTotalData' + app.get('port'));  //打印日志
 });
