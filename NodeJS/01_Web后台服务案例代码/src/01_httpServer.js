// 1.引入http模块
const http = require('http');

// 2.调用方法，创建服务对象
// request : 请求报文对象；response：响应报文对象；
const server = http.createServer(function(request , response) {
    response.end('hello!');
});

// 3.监听端口，启动服务
// 8000 ： 服务占用的端口，共65536端口
// 127.0.0.1 ：本机的回环地址
server.listen(8000 , function() {
    console.log('后台服务正常启动，占用端口8000。。。')
})