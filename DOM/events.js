console.log("events");

var box1 = document.querySelector("#box1");

//Eseménykezelés esemény atributomon keresztül
//  HTMLElem.onesemény = function()
box1.onclick = function(){
    console.log("Sikeres kattintás");
}

//  HTMLElem.addEventListner(eseményNeve, function)

box1.addEventListener("click", function(){
    console.dir(this);
});

function idKiir() {
    console.dir(this.id);
}

box1.addEventListener("click", idKiir);



