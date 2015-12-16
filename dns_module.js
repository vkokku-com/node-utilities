var dns = require('dns');

dns.lookup('www.google.com', function(err, address, family) {
    console.log('address :', address);
    console.log('family :', family);
    dns.reverse(address, function(err, hostnames) {
        if (err) {
            console.log(err.stack);
        }
        console.log('reverse for address' + ' ' + address + ' ' + ':' + JSON.stringify(hostnames));
    });
});
