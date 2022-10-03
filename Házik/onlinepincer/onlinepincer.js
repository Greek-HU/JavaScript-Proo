console.log("OnlinePIncer");

var list = [];
/*
    1. [Onlinepincér folytatása] Vegyetek fel egy globális rendelések változót, mely legyen tömb;
        A HTML oldalon a "Rendelek" gomb mellé hozzatok létre egy "Rendeléseim" felíratú gombot is.
        
    1.a. Minden rendeléskor, adjátok hozzá a rendelt italt a rendelesek tömbhöz. 
*/
function rendeles(){
    
    var rendel = document.querySelector("#rendeles").value;

    switch (rendel){

        case "cola":
            list.push(rendel);
            console.log("Maris hozom");
            break;

        case "limonade":
            list.push(rendel);
            console.log("Nagyon finomat keszitunk");
            break;
            
        case "kave":
            list.push(rendel);
            console.log("Tejjel vagy tejszinnel?");
            
        case "viz":
            console.log("Hozom a vizet");
            break;

        default:
            console.log("Sajnos a " + rendel + " nincs az itallapon");
            break;

    }
}
/*
        1.b. A "Rendeléseim" gombra kattintva, jeleítsétek meg az oldalon egymás alá a rendelt italokat.
             (pl.: egy html listában)
*/
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
/*
    2. Írjatok egy osszead függvényt, mely paraméterként megkap egy tömböt, és visszatér a tömb elemeinek összegével.
       (a megoldáshoz használjatok for ciklust)
*/
var numbers = [];
function pushNum() {
    numbers.push(parseInt(document.querySelector("#pushNumber").value));
    var sum = sumNum(numbers);
    var numBox = document.querySelector("#numBox");
    var gridNum = "";
    gridNum += '<div class="row">';    
        gridNum += `<div class="cell">${sum}</div>`;
    gridNum += "</div>";
    numBox.innerHTML += gridNum; 
}

function sumNum(nums) {    
    
    var osszeg = 0;
    for (let i = 0; i < nums.length; i++){ 
        // (let numbers of nums); <--- Ugyan az mint a felső!!!! 
        osszeg += nums[i];
    } 
    return osszeg;
}
/*
    4. Írjatok egy korosztály függvényt, mely bemenetként megkapja egy személy életkorát (hogy hány éves), 
       kimenetként pedig visszatér az életkornak megfelelő stringgel.
       (Ezúttal nem if-else, hanem switch-case vezérlési szerkezetet használva.)
*/
function ageGroup(){
    
    var age = parseInt(document.querySelector('#age').value);
    switch (true){
        // res = "";
        case (age <= 1):
            console.log("Csecsemő");
            break;

        case (age <= 3):
            console.log("Baba");
            break;
            
        case (age <= 10):
            console.log("Gyerek");
            break;

        case (age <= 17):
            console.log("Serdülő");
            //res = ("Serdülő"); <---így is lehet
            break;

        default:
            console.log("Felnőtt");
            break;

    }
    // return res;
}
/*
    5. Írjatok egy függvényt, mely bemeneti paraméterként megkap 2 tömböt, és visszatér a 2 tömb közös halmazával.
       Vagyis egy tömbbel mely tatalmazza azaokat az elemeket, melyek mindkét tömbbe benne vannak.
       (A megoldásokhoz szorítkozzatok az eddig tanult vezérlési szerkezetekre, mert most már nem a hozott,
        vagy interneten talált megoldásokra leszek kiváncsi, hanem arra, amit eddig tanultunk.)
*/
var tombA = [];
var tombB = [];
function otosFeladat() {
    var o = otos(tombA,tombB);
        document.querySelector("#otos").innerHTML = o;
}
    otosFeladat();
function otos(a,b) {
    var result = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                result.push(a[i]);
            }
        }        
    }
    return result;
}
/*
    6. Írjatok egy függvényt, mely feltölt egy tömböt sakktábla szerűen. Vagyis, ami előállít egy sakktáblát.
       Bementi paraméterként megkapja a függvény, hogy a tábla hányszor, hányas legyen, majd előállít egy mátrixot
       melyben a fehér négyzeteket 0, míg a fekete négyzeteket 1 jelöli. 
​
       Tehát, ha a bemeneti paraméter 4, akkor a következő képpen nézzen ki a kigenerált mátrix.
       [
         [0, 1, 0, 1],
         [1, 0, 1, 0],
         [0, 1, 0, 1],
         [1, 0, 1, 0]
       ]
       vagyis, mint a sakktábla.
*/
printSakkMatt(sakkmatt(8));

function sakkmatt(dim){
    var table = [];

    for (let i = 0; i < dim; i++) {
        table[i] = [];//tabla.push([]);
        for (let j = 0; j < dim; j++) {
            table[i][j] = (i + j) % 2 ? 1 : 0;//tabla[i].push( ( i + j ) % 2 == 0 ? 0 : 1 );
        }
    }      

    return table;
}

function printSakkMatt(table){
    for (let i = 0; i < table.length; i++) {
        console.log(table[i]);
    }
}