console.log("box");
$s = s => document.querySelector(s);
var mozgoDoboz = $s("#mozgo");

mozgoDoboz.onclick = function(event){
    console.log("Nem cseszted el");
    console.dir(mozgoDoboz);
    //this.classList.toggle("jobbra");

}
/*$s("#mozgo").addEventListener("keypress", function(event){
    console.log("Rajta vagy");
    if(event.key == "Enter" ){         
        mozgoDoboz.style.marginLeft="15px";

    }
        
})*/
$s('#mozgo').addEventListener("keypress", function(event){
    console.log("negyed siker");
    if (event.key == "Enter"){
        console.log("Fél siker");
    }
});