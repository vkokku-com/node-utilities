/*
	@ OS Module @
	-------------
	# os.tmpdir()
	# os.endianness()
	# os.hostname()
*/


var os = require('os');

// Endianness
console.log('endianness:', os.endianness());

//os type
console.log('OS type:', os.type());

//OS platform
console.log('OS platform:', os.platform());

//Total system memory
console.log('Total memory:', os.totalmem() + '\t bytes');

//Total free memory
console.log('free memory:', os.freemem() + '\t bytes');

//host name
console.log('host name:', os.hostname());

//temp dir
console.log('temp directory:', os.tmpdir());

//arch
console.log('os type:', os.arch());

// release
console.log('os release:', os.release());

//uptime
console.log('os uptime:', os.uptime());

//loadavg
console.log('os load average:', os.loadavg());

// cpus
console.log('os cpus:',os.cpus());

//networkInterfaces
console.log('os networkInterfaces',os.networkInterfaces());

// EOL property
console.log('os End of Line:',os.EOL);