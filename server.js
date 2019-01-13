var http = require("http");

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

function start() {
  function onRequest(request, response) {
    console.log("requested received");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World 2");
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("server has started");
}
exports.start = start;
// database.query("SELECT * FROM hugetable", rows => {
//    var result = rows;
// });
// console.log('Hello World');