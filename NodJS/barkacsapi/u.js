const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'termekek.json');

fs.readFile(filePath, function(err, text){
    let products = JSON.parse(text); 

    for (let prod of products){
        let dt = new Date().getTime();
        if (!prod.id)
            prod.id = dt + "-" + (Math.floor( Math.random()*dt ) + 452123654);

        if (prod.price)
            prod.price = !parseInt(prod.price) ? 0 : parseInt(prod.price);
        else prod.price = 0;
    }

    fs.writeFile(filePath, JSON.stringify(products), function(err){
        console.log("...A termekek frissitese sikeresen befejezodott.");
    });

});