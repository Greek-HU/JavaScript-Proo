const http = require('http');
const fs = require('fs'); //file system
const path = require('path');
//const { type } = require('os');
const MIME = {
    js: "text/javascript",
    json: "application/json",
    html: "text/html",
    css: "text/css",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    svg: "image/svg+xml",
    csv: "text/csv",
    txt: "text/plain",
    ico: "image/x-icon",
    type: function(ext){
        return MIME[ext] != undefined ? MIME[ext] : MIME.txt;
    }
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

        case request.method == "GET" && request.url == "/products":
            fs.readFile(__dirname+'/termekek.json', function(err, resText){
                response.writeHead(200, {'Content-type':'application/json; charset=utf8'});
                response.write(resText);
                response.end();
            });
            break;
        /*case request.method == "GET" && request.url == "/":
            
            fs.readFile('/termekek.json', (err, data), ()=>{
                const prod = JSON.parse(data);
                function createId(){
                    for (let i = 0; i<prod.length;i++){
                                    prod[i].id = i+1;
                        }}
                fs.writeFile('/termekek.json', JSON.stringify(prod), ()=>{
                    response.end(JSON.stringify(prod));
                });
            }); 
            break;*/
        default:
            let ext = path.extname(request.url).slice(1);
            let mimetype = MIME.type(ext);
            fs.readFile(path.join(__dirname, "public", request.url), function(err, fileContent){
                if (err){
                    response.writeHead(200, {'Content-type': MIME.type("txt")});
                    response.write("A kért oldal nem található");
                    response.end();
                }else{
                    response.writeHead(200, {'Content-type': mimetype });
                    response.write(fileContent);
                    response.end();
                }
            })
    }
}).listen(3000);
/*
    Házi feladat, upgrade.js
    
       - Minden termékhez generálni egyedi id.-t
       - Minden terméknek legyen number a price kulcsa

            Beolvasod a temekek.json álományt
            Átalakítjuk a fileContent-et js számára is értelmezhető a struktúrává
            végig iterálunk a tömbön
                - a termékhez id-t adunk
                -price mezőt num tipusuvá alakítjuk
            az eredmenyt visszaírjuk
 */