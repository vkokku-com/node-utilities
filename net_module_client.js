var net = require('net');

var client = net.connect({port:8000},function(){
	console.log('Client connected to the server on port 8000');
});

client.on('data',function(data){
	console.log(data.toString());
	client.end();
});

client.on('end',function(){
	console.log('disconnected from the server');
});