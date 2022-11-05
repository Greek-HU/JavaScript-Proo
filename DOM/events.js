console.log("events");

var box1 = document.querySelector("#box1");

/*
    Esemenykezeles esemenyattributumon keresztul.

    HTMLElement.onesemeny = function(){}
*/

box1.onclick = function(event) {
    console.log("Sikeres kattintas");
    console.log(this);
}


   // HTMLElement.addEventListener(esemenyNeve, function)


box1.addEventListener("click", function(event) {
    //console.dir(this);
    
    if(event.target == this) // csak ha a dobozra kattintok, ha az almára akkor nem adja ki
    console.dir(event);
} );

function idKiir(){
    console.dir(this.id);
}

box1.addEventListener("click", idKiir);