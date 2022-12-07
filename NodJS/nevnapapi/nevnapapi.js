const http = require('http');
const fs = require('fs');
var nameDays = {};

function getNameDays(date, data){
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return nameDays[month][day];
}
function getNameDaysToName(name, data){
    const ret = {
        name,
        main: [],
        other: []
    };
    for (let month in data){
        for (const day in data[month]) {
                 if (data[month][day].main.includes(name))
                 ret.main.push({month, day});

                 if (data[month][day].other.includes(name))
                 ret.other.push({month, day});
        }
    }
    return ret;
}
http.createServer(function(re, res){
    const reArray = re.url.split('/').splice(1);

    switch(true){
        case re.method == "GET" && re.url == "/nevnap": //A mai névnapot adja vissza
            fs.readFile(__dirname + "/nevnapok.json", function(err, resText){
                nameDays = JSON.parse(resText);
                let resNames = JSON.stringify(getNameDays(new Date(), nameDays));
                res.writeHead(200, {"Content-type": "application/json; charset=utf-8"});
                res.write(resNames);
                res.end(); 
            });
            break;

        case re.method == "GET" && reArray[0] == "datum": //Dátum szerinnt adja vissza a névnapot
            fs.readFile(__dirname + "/nevnapok.json", function(err, resText){
                nameDays = JSON.parse(resText);
                    
                let resNames = JSON.stringify(getNameDays(new Date('1985-'+reArray[1]), nameDays));
                    res.writeHead(200, {"Content-type": "application/json; charset=utf-8"});
                    res.write(resNames);
                    res.end(); 
            });
            break;

        case re.method == "GET" && reArray[0] == "nev": //Név megadásával visszaadja a dátumát
            fs.readFile(__dirname + "/nevnapok.json", function(err, resText){
                nameDays = JSON.parse(resText);

                let resData = JSON.stringify(getNameDaysToName(decodeURI(reArray[1]), nameDays));
                res.writeHead(200, {"Content-type": "application/json; charset=utf-8"});
                res.write(resData);
                res.end();
            });
            break;
        default:
            res.write("Ervenytelen keres");
            res.end(); 
    }
}).listen(3000)