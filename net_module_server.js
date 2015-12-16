/*
	@ Net Module @
	--------------

*/
var net = require('net');
var server = net.createServer(function(connection) {
    console.log('client connected');
    connection.on('end', function() {
        console.log('client disconnected');
    });
    connection.write('Hello World \r \n');
    connection.pipe(connection);
});

server.listen(8000, function() {
    console.log('Server is listening on port 8000');
});
