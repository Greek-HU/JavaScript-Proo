const http = require('http');
const fs = require('fs'); //file system
const MIME = {
    js: "text/javascript",
    json: "application/json",
    html: "text/html",
    css: "text/css"
}
http.createServer((request, response)=>{
    switch(true){
        case request.method == "GET" && request.url == "/":
            fs.readFile(__dirname+'/public/index.html', function(err, fileContent){
                response.writeHead(200, {'Content-type':'text/html; charset=utf8'});
                response.write(fileContent);
                response.end();
            });
            break;
            default:
                response.writeHead(200, {'Content-type':'text/html; charset=utf8'});
                response.write("A kért oldal nem található");
                response.end();
    }
}).listen(3000);
