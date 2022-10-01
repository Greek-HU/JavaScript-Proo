console.log("OnlinePIncer");
/*
    3. Hozzatok létre egy tömb változót. És prompt segítségével addig kérjetek be számokat, 
       amíg a számok összege el nem éri a 100-at.
       (Az összeg teszateléséhez használjátok a 2. feladatban megírt függvényt)
       
*/
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
*//*
var list = [];
/*
    1. [Onlinepincér folytatása] Vegyetek fel egy globális rendelések változót, mely legyen tömb;
        A HTML oldalon a "Rendelek" gomb mellé hozzatok létre egy "Rendeléseim" felíratú gombot is.
​
        
*//*
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
/*1.a. Minden rendeléskor, adjátok hozzá a rendelt italt a rendelesek tömbhöz.
        1.b. A "Rendeléseim" gombra kattintva, jeleítsétek meg az oldalon egymás alá a rendelt italokat.
             (pl.: egy html listában)
*
function orderList() {
    
var content = document.querySelector("#content");
var gridString = "";

for (let i = 0; i < list.length; i++) { 

    gridString += '<div class="row">';

        gridString += `<div class="cell">${list[i]}</div>`;
    
    gridString += "</div>";
}

content.innerHTML += gridString; 
}*/
/*
    2. Írjatok egy osszead függvényt, mely paraméterként megkap egy tömböt, és visszatér a tömb elemeinek összegével.
       (a megoldáshoz használjatok for ciklust)
*/
var numbers = [[3],[2]];
function getNum() {
    
    var num = parseInt(document.querySelector("#getNumber").value);
    
    numbers.push(num);
}

function giftNum() {
    

    var numBox = document.querySelector("#numBox");
    var gridNum = "";
    
    for (let i = 1; i < numbers.length; i++) { // sorok bejarasa
    
        gridNum += '<div class="row">';
    
        for (let j = 0; j < numbers[i].length; j++) //az oszlopok vagy cellak bejarasa
            gridNum += `<div class="cell">${numbers[0][0]} + ${numbers[i][j]}
                                         =   
                                         ${numbers[0][0] + numbers[i][j]}</div>`;
        
            gridNum += "</div>";
    }    
    numBox.innerHTML += gridNum; 
}
/*
    4. Írjatok egy korosztály függvényt, mely bemenetként megkapja egy személy életkorát (hogy hány éves), 
       kimenetként pedig visszatér az életkornak megfelelő stringgel.
       (Ezúttal nem if-else, hanem switch-case vezérlési szerkezetet használva.)
*/
function getAge(){
    
    return parseInt( document.querySelector('#age').value );
}
function ageGroup(){
    
    var age = getAge();

    switch (age){

        case (age <= 1):
            console.log("Csecsemő");
            break;

        case (age <= 3):
            console.log("Baba");
            break;
            
        case (age <= 10):
            console.log("Gyerek");
            break;

        case (age <= 16):
            console.log("Serdülő");
            break;

        default:
            console.log("Felnőtt");
            break;

    }
}
/*
    5. Írjatok egy függvényt, mely bemeneti paraméterként megkap 2 tömböt, és visszatér a 2 tömb közös halmazával.
       Vagyis egy tömbbel mely tatalmazza azaokat az elemeket, melyek mindkét tömbbe benne vannak.
       (A megoldásokhoz szorítkozzatok az eddig tanult vezérlési szerkezetekre, mert most már nem a hozott,
        vagy interneten talált megoldásokra leszek kiváncsi, hanem arra, amit eddig tanultunk.)
*/
var numA = [];
var numB = [];
function getA() {
    var a = parseInt(document.querySelector("#a_group").value);

    numA.push(a);
}
function getB() {
    var b = parseInt(document.querySelector("#b_group").value);

    numB.push(b);
}console.log(numA);