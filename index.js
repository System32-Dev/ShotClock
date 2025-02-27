var static = require('node-static');
 
var fileServer = new static.Server('./public', { cache: 0 });
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080);