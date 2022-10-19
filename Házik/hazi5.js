console.log("Házi5");
import { users } from "./users.js";
console.log(users);
//console.log(users.findIndex(users.active == true));

function szures(users, key, value){

    var res = [];
    
    for (let i = 0; i < users.length; i++) 
        if (users[i][key] == value) 
            res.push(users[i]);
    
    return res;
    }
    
    var res = szures(users, "lastName", "Vass");
    
    console.log(res);


    
    var content = document.querySelector("#elso");
    var gridString = "";
    
    for (let i = 0; i < users.length; i++) { 
    
        gridString += '<div class="row">';
    
            gridString += `<div class="cell">${users[i]}</div>`;
        
        gridString += "</div>";
    }
    
    content.innerHTML += gridString; 
    