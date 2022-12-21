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
                let htmlres = fileContent.toString().replace("/*codereplace*/", "var gyumolcs = 'alma';"); 
                response.write(fileContent);
                response.end();
            });
            break;
        case request.method == "GET" && request.url == "/adatok.js":
            response.writeHead(200, {'Content-type': 'text/javascript'});
            response.write("var adatok = "+JSON.stringify(["akarmi.csv", "egymasik.csz"]));
            response.end();
            break;

        case request.method == "GET" && request.url == "/products":
            fs.readFile(__dirname+'/termekek.json', function(err, resText){
                response.writeHead(200, {'Content-type':'application/json; charset=utf8'});
                response.write(resText);
                response.end();
            });
            break;
        
            case request.method == "POST" && request.url == '/product':

            var postData = '';

            request.on('data', function(chunk){
                postData += chunk;
            });

            request.on('end', function(){
                const PRODUCT = JSON.parse(postData);
                let dt = new Date().getTime();

                PRODUCT.img = "img/noimage.jpg";
                PRODUCT.id = dt + "-" + (Math.floor( Math.random()*dt ) + dt);

                console.log(PRODUCT);

                fs.readFile(__dirname + '/termekek.json', function(err, resText){
                    
                    const PRODUCTS = JSON.parse(resText);
                    PRODUCTS.push(PRODUCT);

                    fs.writeFile(__dirname + '/termekek.json', JSON.stringify(PRODUCTS), function(err){
                        response.writeHead(200, {'Content-type': 'application/json; charset=utf8'});
                        response.write(JSON.stringify({message: "OK"}));
                        response.end();
                    });

                });
            }); // END request onend

            break;
            case request.method == "POST" && request.url == '/editproduct':

            var postData = '';

            request.on('data', function(chunk){
                postData += chunk;
            });

            request.on('end', function(){
                const PRODUCT = JSON.parse(postData);

                console.log(PRODUCT);

                fs.readFile(__dirname + '/termekek.json', function(err, resText){
                    
                    const PRODUCTS = JSON.parse(resText);

                    let editedProduct = PRODUCTS.find(p => p.id == PRODUCT.id);
                        editedProduct.name = PRODUCT.name;
                        editedProduct.price = PRODUCT.price;

                    fs.writeFile(__dirname + '/termekek.json', JSON.stringify(PRODUCTS), function(err){
                        response.writeHead(200, {'Content-type': 'application/json; charset=utf8'});
                        response.write(JSON.stringify({message: "OK"}));
                        response.end();
                    });

                });
            }); // END request onend

            break;

            case request.method == "DELETE" && reqPath[0] == 'product':

            const productId = reqPath[1];

            //console.log(productId);

            fs.readFile(__dirname + '/termekek.json', function(err, fileContent){

                const PRODUCTS = JSON.parse(fileContent);

                var deletedIndex = PRODUCTS.findIndex( p => p.id == productId );

                if (deletedIndex > -1){
                    PRODUCTS.splice(deletedIndex, 1);
                    fs.writeFile(__dirname + '/termekek.json', JSON.stringify(PRODUCTS), function(err){
                        response.writeHead(200, {'Content-type': 'application/json; charset=utf8'});
                        response.write(JSON.stringify({message: "A termek sikeresen torolve"}));
                        response.end();
                    });
                } else{
                    response.writeHead(200, {'Content-type': 'application/json; charset=utf8'});
                    response.write(JSON.stringify({message: "Sajnaljuk, de ilyen termek nincs az adatbazisban"}));
                    response.end();
                }

            });

            break;
        
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
    