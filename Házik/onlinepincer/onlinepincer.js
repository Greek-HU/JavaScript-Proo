console.log("OnlinePIncer");

/*
    3. Hozzatok létre egy tömb változót. És prompt segítségével addig kérjetek be számokat, 
       amíg a számok összege el nem éri a 100-at.
       (Az összeg teszateléséhez használjátok a 2. feladatban megírt függvényt)
       
*/
/*
    4. Írjatok egy korosztály függvényt, mely bemenetként megkapja egy személy életkorát (hogy hány éves), 
       kimenetként pedig visszatér az életkornak megfelelő stringgel.
       (Ezúttal nem if-else, hanem switch-case vezérlési szerkezetet használva.)
       
*/
/*
    5. Írjatok egy függvényt, mely bemeneti paraméterként megkap 2 tömböt, és visszatér a 2 tömb közös halmazával.
       Vagyis egy tömbbel mely tatalmazza azaokat az elemeket, melyek mindkét tömbbe benne vannak.
       (A megoldásokhoz szorítkozzatok az eddig tanult vezérlési szerkezetekre, mert most már nem a hozott,
        vagy interneten talált megoldásokra leszek kiváncsi, hanem arra, amit eddig tanultunk.)
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

for (let i = 0; i < list.length; i++) { // sorok bejarasa

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
var numList = [11];
function getNum() {

    var number = document.querySelector("#getNumber").value;

    while (number != 0) {
        numList.push(number);
    }
}
