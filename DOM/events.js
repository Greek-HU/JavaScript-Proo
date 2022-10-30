console.log("events");

var box1 = document.querySelector("#box1");

/*
    Esemenykezeles esemenyattributumon keresztul.

    HTMLElement.onesemeny = function(){}
*/

box1.onclick = function() {
    console.log("Sikeres kattintas");
    console.log(this);
}

/*
    HTMLElement.addEventListener(esemenyNeve, function)
*/

box1.addEventListener("click", function() {
    console.log(this);
} );

function idKiir(){
    console.log(this.id);
}

box1.addEventListener("click", idKiir);