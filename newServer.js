var http = require('http')
var url = require('url')

function onRequest(request, response) {
	if (url.parse(request.url).pathname !== '/favicon.ico') {
		var pathname = url.parse(request.url).pathname
		console.log('Request for ' + pathname + ' received.')
		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.write('Request for ' + pathname + ' received.')
		response.end()
	}
}

http.createServer(onRequest).listen(8888)
console.log('Server has started.')