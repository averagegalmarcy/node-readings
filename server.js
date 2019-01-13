var http = require("http");
var url = require("url");

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

// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("requested for" + pathname  + "received");
//     route(pathname);
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("Hello World 2");
//     response.end();
//   }
//   http.createServer(onRequest).listen(8888);
//   console.log("server has started");
// }
// exports.start = start;
// database.query("SELECT * FROM hugetable", rows => {
//    var result = rows;
// });
// console.log('Hello World');

function start() {
  console.log("request handler 'start' was called");
}

function upload() {
  console.log("requested handler upload was called");
}

exports.start = start;
exports.upload = upload;