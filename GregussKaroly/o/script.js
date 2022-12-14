/*
    1. Promt segítségével kérd be "n" (n egy numerikus típus) értékét, majd konzolba írd ki az első n, páratlan szám összegét. 
*/
function elsoNParatlan(){
    let n = parseInt( prompt("paratlan szamok darabszama: ") );
    let sum = 0;

    for (let i = 1; i < n*2; i += 2)
        sum += i;

    return sum;
}

//console.log( elsoNParatlan() );

/*
    2. Írj egy függvényt, mely bementi paraméterként megkap egy tömböt, kimenetként pedig visszaadja a tömb legisebb értékét. 
*/

function legkisebb(t){

    let min = t[0];

    for (let ti of t)
        if (ti < min)
            min = ti;

    return min;
}

function legkisebb1(t){
    return Math.min(...t);
}

/*
    3. feladat
*/

var szoveg = "Botond talált 5 cukorkát. Ebből 2 darabot odaadott Sárának, így maradt neki 3 cukorkája, amiből 1-et Zsuzsának adott. Végül Botondnak 2 cukorkája maradt.";


// a. Reguláris kifejezés segítségével szedjük ki a 0-9 közti számokat a szövegből, és tároljuk el egy tömbbe. 

let szamok = szoveg.match(/[0-9]/g);

// b. Konzolban mutassákot meg, hogy hány számot talált a reguláris kifejezés. 

console.log("A regularis kifejezes "+szamok.length + " darab szamot kapott");
// c. A 2. feladatban megírt függvény segítségével konzolba jelenítsétek meg az a. pontban létrehozott tömb legkisebb értékét. 

szamok = szamok.map( n => parseInt(n) );
console.log("A szoveg legkisebb szamerteke: ", legkisebb(szamok));

// d. A "szoveg" változóban szereplő mondatokat jelenítsétek meg külön-külön "p" tegekben a HTML oldalon. 

let mondatok = szoveg.split(/\. /);
mondatok = mondatok.map( m => m[m.length-1] != "." ? m+"." : m );

const f3 = document.querySelector("#feladat-3");

let pString = "";

for (let mondat of mondatok)
    pString += `<p class="myP">${mondat}</p>`;

f3.innerHTML += pString;

/*
    4. írj programot, mely kiszámolja, hogy hány nap telt el 2021 november 20.-a óta. 
    Majd az eredményt jelenítséteg meg a HTML oldalon, egy dinamikusan létrehozott "span" tegben.
    Ennek a "span" tegnek állítsatok piros színt és világos piros háttérszínt. 
*/

function howManyDays(dateString){
    const now = new Date();
    const date = new Date(dateString);

    return Math.round( (now.getTime() - date.getTime()) / (1000*60*60*24) );
}

const span = document.createElement("span");

Object.assign(span.style, {
    color: "red",
    backgroundColor: "#ffb6b6",
    padding: "5px 10px",
    borderRadius: "3px"
});

span.innerText = "2021 november 20. óta: " + howManyDays("2021-11-20") + " nap telt el.";

document.querySelector("#feladat-4").appendChild(span);

/*
    5. Írjatok egy függvényt, mely bemeneti paraméterként megkapja egy négyzetháló sorainak és oszlopainak a számát, és egy selectort. 
    A függvény divekből rakja össze a négyzethálót (mint egy sakktábla), az egyes divekben írjuk bele a div sorszámát, 
    majd az összeállított négyzethálót, jelenítsétek meg a selector segítségével kiválasztott HTML elemben. 
*/

function createGrid(n, m, sel){
    const rowTpl = row => `<div class="prow">${row}</div>`;
    const cellTpl = (ind, css = "") => `<div class="pcell ${css}">${ind}</div>`;

    let rows = "", cellindex = 0, cssName = "", cells = "";

    for (let i = 0; i < n; i++){
        cells = "";
        for (let j = 0; j < m; j++){
            cellindex = ( (n * i) + j ) + 1;
            cssName = ( i + j ) % 2 != 0 ? "pblack" : "";
            cells += cellTpl(cellindex, cssName);
        }    
        rows += rowTpl(cells);
    }

    const gridDiv = document.createElement("div");
    gridDiv.classList.add("pgrid");

    gridDiv.innerHTML = rows;

    document.querySelector(sel).appendChild(gridDiv);
}

createGrid(8, 8, "#feladat-5");

/*
    6. Küldj kérést a https://jsonplaceholder.typicode.com/todos erőforrásra, majd az alábbi templét szerint, 
    (template a HTML kódban) listázd ki csak azokat a tennivalókat, amelyek még nincsenek befejezve. 
*/

function request(url, cbFn){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200)
            cbFn(xhr.responseText);
    }

    xhr.open("GET", url);
    xhr.send();
}

const f6 = document.querySelector("#feladat-6");

request("https://jsonplaceholder.typicode.com/todos", res => {
    let toDos = JSON.parse(res);

    toDos.filter( td => !td.completed).forEach(element => {
        f6.innerHTML += `<li>${element.title}</li>`;
    });

});