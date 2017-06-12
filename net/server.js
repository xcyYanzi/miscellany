//引入net模块
var net = require('net');
//创建网络服务
var clientServer = new net.createServer();
//创建需要在服务器上通信的对象
var clientMap = new Object;
//创建流水账号，保证通信对象不重复
var i = 0;
//创建链接事件
clientServer.on('connection',function(client){
	//client 存储在服务器通道上的通信对象，可以接收、发送数据
	console.log('客户端已启动，消息传来')
	//设置具体的多个通信对象
	client.name=++i;
	clientMap[client.name] = client;
	





	
	client.on('data',function(data){
		console.log('客户端发来一条消息：'+data)

		huifu(data,client)
	})
	
})

function huifu(message,client){
//	client.write('消息已收到')
	for(var key in clientMap){
		clientMap[key].write(client.name+'说：'+message)
	}	
}


clientServer.listen(9000)



