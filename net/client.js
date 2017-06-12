var net = require('net');

var port = 9000;
var host = '127.0.0.1'

var client = new net.Socket()

client.setEnconding = 'utf-8'

client.connect(port,host,function(){
	client.write('你好')
	
})
//接收服务器传回的数据
client.on('data',function(data){
	console.log('服务器回复：'+data)
	
	say();
	
	
})
//读取一行
var readline = require('readline')
//建立多个通信对象之间通信的IO通道
var r1 = readline.createInterface({
	//设置标准的输入、输出
	input:process.stdin,
	output:process.stdout
});

function say(){
	r1.question('请输入要发送的内容：',function(inputstr){
		//inputstr 在控制台输入的文本内容
		
		if(inputstr!='bay'){
			client.write(inputstr);
		}else{
			client.destory();
			r1.close();
		}
	})
}






