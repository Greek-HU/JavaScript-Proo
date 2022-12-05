const http = require('http');
const fs = require('fs');
var nameDays = {};

function getNameDays(date){
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return nameDays[month][day];
}
//házi  /nev/Jakab - visszaadja azon dátumot amikor a megadott névnap van
http.createServer(function(re, res){
    const reArray = re.url.split('/').splice(1);


    switch(true){
        case re.method == "GET" && re.url == "/nevnap": //A mai névnapot adja vissza

            fs.readFile(__dirname + "/nevnapok.json", function(err, resText){
                nameDays = JSON.parse(resText);
                let resNames = JSON.stringify(getNameDays(new Date()));
                res.writeHead(200, {"Content-type": "application/json; charset=utf-8"});
                res.write(resNames);
                res.end(); 
            });
            break;
        case re.method == "GET" && reArray[0] == "datum": //Dátum szerinnt adja vissza a névnapot
            fs.readFile(__dirname + "/nevnapok.json", function(err, resText){
                nameDays = JSON.parse(resText);
                    
                let resNames = JSON.stringify(getNameDays(new Date('1985-'+reArray[1])));
                    res.writeHead(200, {"Content-type": "application/json; charset=utf-8"});
                    res.write(resNames);
                    res.end(); 
            });
            break;

        default:
            res.write("Ervenytelen keres");
            res.end(); 
    }
}).listen(3000)