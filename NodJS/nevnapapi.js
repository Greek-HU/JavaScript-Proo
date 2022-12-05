const http = require('http');
const fs = require('fs');
var nameDays = {};

function getNameDays(date){
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return nameDays[month][day];
}

http.createServer(function(re, res){
    switch(true){
        case re.method == "GET" && re.url == "/nevnap":
            fs.readFile(__dirname+'/nevnapapi/nevnapok.json', function(err, fileContent){

            //fs.readFile(__dirname + "/nevnapok.json", function(err, resText){
                nameDays = JSON.parse(resText);
                let resNames = JSON.stringify(getNameDays(new Date()));
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