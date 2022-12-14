/*
    Először beolvassuk a termekek.json fájlt
    A beolvasott szövegből ki kell nyerni a JSON-t
    Végiglliteraljuk a ermékeket
        minden termék kap egy egyedi azonosítót 'ID'-t
        a pirce mezőn típuskonverziót hatajtunk végre
    
    A módosított JSON-t visszaírjuk a termekek.json fájlba
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'temekek.json');
fs.readFile(filePath, function(err, text){
    let products = JSON.parse(text); //parse szöveget allakít Json-né
    for (let prod of products){ 
        let dt = new Date().getTime();
        if (!prod.id)
            prod.id = dt + "-" + (Math.floor(Math.random()*dt) + 4567888);
        
        /*if(!parseInt(prod.price))
            prod.price = 0;
        else prod.price = parseInt(prod.price);*/
        
        // Ugyan az csak röviden
        prod.price = parseInt(prod.price) == NaN ? 0 : parseInt(prod.price);
    }
fs.writeFile(filePath, JSON.stringify(products), function(err){
    console.log("A termékek frissítve lettek");
})
})