console.log("Házi5");
import { users } from "./users.js";
console.log(users);
//console.log(users.findIndex(users.active == true));

function szures(obj, key, value){

    var res = [];
    
    for (let i = 0; i < obj.length; i++) 
        if (obj[i][key] == value) 
            res.push(obj[i]);
    
    return res;
    }
    
    var res = szures(users, "lastName", "Vass");
    
    console.log(res);


function orderList() {
    
    var content = document.querySelector("#content");
    var gridString = "";
    
    for (let i = 0; i < list.length; i++) { 
    
        gridString += '<div class="row">';
    
            gridString += `<div class="cell">${list[i]}</div>`;
        
        gridString += "</div>";
    }
    
    content.innerHTML += gridString; 
    }