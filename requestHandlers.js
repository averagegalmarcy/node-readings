// var exec = require("child-process").exec;

var querystring = require("querystring");
    fs = require("fs");

function start(reponse, postData) {
  console.log("request handler 'start' was called");
  var body = '<html>'+'<head>'+'<meta http-equiv="Content-Type" content="text/html; '+'charset=UTF-8" />'+'</head>'+'<body>'+'<form action="/upload" method="post">'+'<textarea name="text" rows="20" cols="60"></textarea>'+'<input type="submit" value="Submit text" />'+'</form>'+'</body>'+'</html>';
16

  // exec("ls -lah", function(error, stdout, stderr) {
    reponse.writeHead(200, { "Content-Type": "text/plain"});
    response.write(body);
    reponse.end();
  }
  function upload(response, postData) {
    console.log("requested handler upload was called");
    reponse.writeHead(200, { "Content-Type": "text/plain"});
    response.write("You've sent " + 
    querystring.parse(postData).text);
    reponse.end();

}
function show(response) {
  console.log("Request handler 'show' was called.");
  response.writeHead(200, {"Content-Type": "image/png"});
  fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
