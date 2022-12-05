var http = require('http');

var server = http.createServer(function (request, response) {

    console.log("cookie: ", request.headers.cookie);
    console.log("url ", request.url);

    switch (true) {

        case request.method == "GET" && request.url == "/":
            response.write("A főoldal betöltödött");
            response.end();
            break;

        case request.method == "GET" && request.url == "/keres1":
            response.write(`<div> A Keres 1 teljesitve <div>`);
            response.end();
            break;

        case request.method == "GET" && request.url == "/keres2":
            response.write(`<div>A Keres 2 teljesitve <div>`);
            response.end();
            break;

        default:
            //response.writeHead();
            response.write("Ezt a kért oldal nem található");
            response.end();
    }


});

server.listen(3000);