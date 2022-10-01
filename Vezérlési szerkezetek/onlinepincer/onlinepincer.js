console.log("OnlinePIncer");

function rendeles(){

    var rendel = document.querySelector("#rendeles").value;

    switch (rendel){

        case "cola":
            list.push(rendel);
            console.log("Maris hozom");
            break;

        case "limonade":
            console.log("Nagyon finomat keszitunk");
            break;
            
        case "kave":
            console.log("Tejjel vagy tejszinnel?");
            
        case "viz":
            console.log("Hozom a vizet");
            break;

        default:
            console.log("Sajnos a " + rendel + " nincs az itallapon");
            break;

    }
}

function pushList() {
    var list = [];

    var lista = "<ul>";

for (let i = 0; i < list.length; i++){

    lista += `<li>${list[i]}</li>`;
}

lista += "</ul><hr>";

document.querySelector("#content").innerHTML = lista;


    /*var rendel = document.querySelector("#rendeles").value;

        while (rendel != "eleg"){

    list.push(rendel);
    
}*/}
console.log(list);
  /*  var list = document.querySelector("#content");
    

    for (let i = 0; i < list.length; i++) { 
    
        console.log("---------End row "+sorIndex+"-----------");
        
    }
    
    
    var content = document.querySelector("#content");
    var gridString = "";
    
    for (let i = 0; i < list.length; i++) {
    
        gridString += '<div class="row">';
    
        for (let j = 0; j < list[i].length; j++) //az oszlopok vagy cellak bejarasa
            gridString += `<div class="cell">${list[i][j]}</div>`;
        
        gridString += "</div>";
    }
    
    //console.log(gridString);
    
    content.innerHTML += gridString; 
}*/