var http = require("http");  
  
http.createServer(function(request, response) {  
  response.writeHead(200, {"Content-Type": "text/plain"});  
  response.write("Hello World啊 node.js");  
  response.end();  
}).listen(8888);  
  
   var  ps =  new Buffer('TG91dGMxMjM=', 'base64')
   console.log(ps)
console.log("Server running at http://127.0.0.1:8888/");  