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
    function User(vnev, knev, kor) {
        this.lastName = vnev;
        this.firstName = knev;
        this.age = kor
    }

    User.prototype.bemutatkozas =function(){
        console.log(users.bemutatkozas());
        return`A nevem ${this.vnev} ${this.knev} és a korom ${this.kor}!`;
    
    };/*
    var content = document.querySelector("#elso");
    var gridString = "";
    
    for (let i = 0; i < res.length; i++) { 
    
        gridString += '<div class="row">';
    
            gridString += `<div class="cell">${res.bemutatkozas()}</div>`;
        
        gridString += "</div>";
    }
    
    content.innerHTML += gridString;
    
    
    
    
    var createember1 = new CreateEmber("Horvath", "Aranka", 28);
    //console.log(createember1.bemutatkozas());
    document.getElementById("content").innerHTML = ember.bemutatkozas();
    