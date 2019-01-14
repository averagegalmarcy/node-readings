var http = require("http");
var url = require("url");
var formidable = require("formidable");


// http.createServer(function(request, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.write("Hello World");
//   response.end();
// }).listen(8888);

// function onRequest(request, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.write("Hello World");
//   response.end();
// }

// http.createServer(onRequest).listen(8888);
// console.log('server has started');

function start(route, handle) {
function onRequest(request, response) {
var postData = "";
var pathname = url.parse(request.url).pathname; console.log("Request for " + pathname + " received.");
    request.setEncoding("utf8");
    
    request.addListener("data", function(postDataChunk) { postData += postDataChunk;
    
    console.log("Received POST data chunk '"+ postDataChunk + "'.");

  });
    
    request.addListener("end", function() { route(handle, pathname, response, postData);

    }); 
  }
    http.createServer(onRequest).listen(8888);
      console.log("Server has started.");
}
    
  exports.start = start;
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("requested for" + pathname  + "received");
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     var content = route(handle, pathname);
//     response.write(content);
//     response.end();
//   }
//   http.createServer(onRequest).listen(8888);
//   console.log("server has started");
// }
// exports.start = start;


