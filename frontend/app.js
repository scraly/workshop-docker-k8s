const { Console } = require('console');
const http = require('http');
const url = require("url");
const port = 8000

// Define backend name and port to call
var backendName = "backend"
if (process.env.BACKEND_NAME) {
    var backendName = process.env.BACKEND_NAME
   } 
console.log(backendName);

var backendPort = 8080
if (process.env.BACKEND_PORT) {
    var backendPort = process.env.BACKEND_PORT
   } 
console.log(backendPort);

var backendURL = 'http://' + backendName + ':' + backendPort
console.log(backendURL)

// Create our HTTP server
var server = http.createServer((request, res) => {

    // Parse the request url
    const reqUrl = url.parse(request.url).pathname
    if(request.method == "GET" && reqUrl == "/") {
        let data = '';

        // Call the backend with its service's name and its port
        //http.get('http://backend:8080', (response) => {
            http.get(backendURL, (response) => {

        
                // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
                response.setEncoding('utf8');
            
                // As data starts streaming in, add each chunk to "data"
                response.on('data', (chunk) => {
                    data += chunk;
                });
            
                // The whole response has been received. Print out the result.
                response.on('end', () => {
                     
                    // Display in a HTML page the response of our backend service
                    res.writeHead(200, {"Content-Type": "text/plain"});
                    res.end(data);
                });
            });
            
    }

});

// Start the server and listen in the specified port
server.listen(port)
console.log("Server running at http://127.0.0.1:" + port)