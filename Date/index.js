var most = new Date();

/*
    Az informatikai idő, az nem más, mint az 1970 január a óta eltelt miliszekundumok száma!!!
    - időbélyeg - timestamp

    most.getTime() - visszaaja az időt

    !!! A JavaScriptben nincs beállítható dátumforma !!!

    Lehetséges dátum formátumok:
        YYYY-MM-DD
        DD/MM/YYYY

        YYYY-MM-DD hh:mm:ss
*/
//  Stringként, mikor egy strinben adom meg a dátum elemeket
    var d1 = new Date("1998-05-15");

//  Amikor paraméter listává inicializáljuk
//      new Date(év, hónap, nap, óra, perc, másodperc) 
//         - mind opcionális, tehát jobbról balra haladva ell lehet hagyni őket
var d2 = new Date(2015, 3)

var hónap = ["Január", "Február", "Március", "Árpilis", "Május", "Június",
        "Július", "Augusztus", "Szeptember", "Október", "November", "December"];
console.log("Most "+hónap[most.getMonth()]+" hónapot írunk");

/*  A dátum "típust" timestamp-el is lehet inicializálni

        .getFullYear() - visszaadja a dátum évszámát
        .getMoutnh() - visszaadja a hónapot
               !!! A JavaScript értelmezése szserint a 0.-ik
        .getDate() - visszaadja hogy hányadika van
        .getDay() - visszaadja a hét napjának az indexét
                !!! A hét első napja a vasárnap JS szerint és a számindexe, amivel a függvény visszatér az a 0
*/
console.log("Ma "+most.getDate()+"-e/a van");

/*  Idő lekérdezése
        .getHours()
        .getMinutes()
        .getSecounds()

    setTimeout(function, milisec) - időzít egy scriptet/függvényt                 
*/
setTimeout(function(){
    console.log("Az időzített script lefutott");
    
}, 3000)
console.log("ezt a szöveget a setTimeout után logoltuk ki");

var p = new Promise((resolve, reject) => {
    x = 10;
    setTimeout(function(){
        if (x == 10)
        resolve("Siker!");
        else
        reject("Az ígéret nem teljesült");
    },3000);
});

p
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
console.log("Promis hívás után");

/*
    setInterval(function(), milisec) 
        - létrehoz egy ismétlődő időzítőt
        -milisecundumonként lefuttatja a függvényt, amíg azt meg nem szüntetjük
        - visszatér az időzítés ID-jével
    clearInterval(időzítőId) 
        - törli az időzítőId-vel ellátott időzítést
*/
var clock =document.querySelector("#clock");

/*var tId = setInterval(function(){
    let d = new Date();

    clock.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}, 1000);*/
function ora(){
    clock.innerHTML = new Date().toLocaleTimeString();
} 
ora();
var tId = setInterval(ora, 1000);

document.querySelector("#stop").onclick = function(){
    clearInterval(tId);
    tId = null;
};
document.querySelector("#start").onclick = function(){
    if(tId==null){ 
        ora();
        tId = setInterval(ora, 1000);
    }
};

function age(dateString){
    var bDay = new Date(dateString);
    var now = new Date();
    var years = new Date(now.getTime() - bDay.getTime());
    return years.getUTCFullYear() - 1970;
}function milSecToDay(milices){
    var day = 1000*60*60*24;
    return Math.round(milices/day);
}
