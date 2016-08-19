var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.send('<h1>Welcome Realtime Server</h1>');
});

io.on('connection', function(socket){
	console.log('a user connected')
	// 监听新用户加入
	socket.on('login', function(obj){
		console.log(obj);
	})
	//监听用户退出
	socket.on('disconnect', function(){

	})
	socket.on('message', function(obj){
		io.emit('message', obj);
		console.log('接收到message: '+obj)
	})
})

http.listen(3001, '192.168.10.106', function(){
	console.log('listening on *:3000');
});
