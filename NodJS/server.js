var http = require('http');
var server = http.createServer(function(request, response){
    switch(true){
        case request.method == "GET" && request.url == "/":
                response.write("A fooldal betoltodott");
                response.end();
                break;

        case request.method =="GET" && request.url == "/keres1":
            response.write("<div><b>Keres 1<b> teljesitve</div>");
            response.end();
            break;

        case request.method =="GET" && request.url == "/keres2":
            response.write("<div><b>Keres 2<b> teljesitve</div>");
            response.end();
            break;
            
        default:
            response.write("Akert oldal nem taalhato");
            response.end();

    }   
    /*response.write("Hello  Engem a Nodjs kuldott!");
    response.end();*/
});

server.listen(3000);