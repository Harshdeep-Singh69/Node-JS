/*It referes to the cross platform as well as open source run time environment 

Purpose of node js:
-Used to execute the code outside the browser
-Saves time


Limitations:
-API(Application programming interface) is not stable:The problem arise that most of the developers encounter in the application i.e API,it keeps on changing at frequent interval and doesnt remain stable.
-Doesnt have a strong library support system.
The javascript doesnt have a robust(strong) library system as compared to others*/

var http = require("http");
http.createServer(function(request,response){
    //send the http header
    //HTTP status: 200 :OK
    //Content Type: text/plain
response.writeHead(200,{'Content-Type': 'text/plain'});    
response.end('Welcome to the world of Node Js');
}).listen(8085);
//Console will print the message
console.log("My surver is running at port http://127.0.0.1:8085");
