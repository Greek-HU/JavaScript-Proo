console.log("events");

var box1 = document.querySelector("#box1");

//Eseménykezelés esemény atributomon keresztül
//  HTMLElement.onesemény = function()
box1.onclick = function(){
    console.log("Sikeres kattintás");
}

//  HTMLElement.addEventListner(eseményNeve, function)

box1.addEventListener("click", function(){
    console.dir(this);
});

function idKiir() {
    console.dir(this.id);
}

box1.addEventListener("click", idKiir);



