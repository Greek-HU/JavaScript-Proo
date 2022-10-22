/*
    1. prompt segítségével kérjetek be egy számot, majd for ciklus segítségével, generáljátok ki
       (és a html documanetumban jelenítsétek meg) a bekért szám 10-es szorzótábláját.
       pl, ha a bekért szám 8, akkor az eredmény:
        1 * 8 = 8
        2 * 8 = 16
        .
        .
        .
        10 * 8 = 80
       A feladat megoldásához használj egyszerű for ciklust.
*/
function szorzotabla(szam){
    var res = "";
    
    for (let i = 1; i <= 10; i++)
        res += `<div>${i} * ${szam} = <b>${i*szam}</b></div>`;

    return res;
}

for (let i = 1; i <= 10; i++)
    document.querySelector("#content").innerHTML += szorzotabla(i) + "<hr>";


/*
2. A bekért számnak írjuk ki az osztóit, amiben 1 és önmaga nem szerepel.
   Ha nincs ilyen, akkor írjuk ki, hogy "a [bekért számnak] nincs osztója".
   (a szögletes zárójel helyére helyettesítsük be a bekért számot)
   A megoldáshoz használj egyszerű for ciklust.
*/

/*
3. Írjunk egy prim nevezetű függvényt, mely beneti paraméternek megkap egy számot, és kimenetként
   visszatér egy boolean típussal (true, ha primszám a bemeneti érték, false, ha nem)
*/

/*
4. Adott az alábbi tömb 
*/
var emberek = [
{
    firstName: "Almási",
    lastName: "Nóémi",
    position: "vezető",
    age: 32
},
{
    firstName: "Kovács",
    lastName: "Gábor",
    position: "dolgozó",
    age: 40
},
{
    firstName: "Jakab",
    lastName: "Orsolya",
    position: "dolgozó",
    age: 28
},
{
    firstName: "Mátyás",
    lastName: "Norbert",
    position: "vezető",
    age: 30
},
{
    firstName: "Herceg",
    lastName: "Ferenc",
    position: "dolgozó",
    age: 41
},
{
    firstName: "Ivácsony",
    lastName: "Gabriella",
    position: "vezető",
    age: 32
},
{
    firstName: "Dusinszki",
    lastName: "Levente",
    position: "dolgozó",
    age: 32
},
{
    firstName: "Gábor",
    lastName: "Irén",
    position: "dolgozo",
    age: 25
},
{
    firstName: "Osváth",
    lastName: "Pongrác",
    position: "dolgozó",
    age: 45
},
{
    firstName: "Fülöp",
    lastName: "Eszter",
    position: "vezető",
    age: 33
}
];

function szures(obj, key, value){

var res = [];

for (let i = 0; i < obj.length; i++) 
    if (obj[i][key] == value) //if (ember.position === 'vezető')
        res.push(obj[i]);

return res;
}

var res = szures(emberek, "position", "dolgozó");

console.log(res);

var szuresRender = function(){

// le kell kerdezni a select erteket (hogy mit valsztottunk ki)
let pos = document.querySelector("#pos").value;

// hasznaljuk a mar megirt szurest (mar tudjuk a value parametert)
var res = szures(emberek, "position", pos);

//
var filterContent = document.querySelector("#filter-content");

filterContent.innerHTML = `<h5>${pos}</h5>`;
filterContent.innerHTML += "<ul>";
// vegig kell menni a szures eredmenyen
for (let i = 0; i < res.length; i++){
    //kigeneraljuk a soron kovetkezo elem html kodjat - amit hozzaadunk a "filtercontenthez"
    filterContent.innerHTML += `<li>${res[i].firstName} ${res[i].lastName}</li>`;
}

filterContent.innerHTML += "</ul>";

}

/*
4.a. Jelenítsétek meg egy listában vagy div táblázatban (kinek amelyik szimpatikusabb)
     Azon szemlyek névsorát (firstName, lastName), akik vezető beosztásban vannak.
4.b.-(ez nem kötelező. Azoknak kaik úgy érzik, hogy meg tudják csinálni.)
     Helyezzetek el egy select-option form elemet a html dokumentumban, és egy listáz gombot.
     A Select mezőben legyen lehetőség kiválasztani a "vezető" és "dolgozó" opciókat.
     Majd a listáz gombra kattintva jelenítsük meg a kiválasztott beosztásban levők névsorát. 
*/    



/*
Jó munkát!!! :)
*/
