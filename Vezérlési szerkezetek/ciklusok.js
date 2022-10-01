console.log("Ciklusok.js");

/*
    For - lepteto ciklusok
        - for
        - for in
        - for of

    While - felteteles ciklus
        while - eloltesztelo ciklus
        do while - hatultesztelo ciklus

*/

/*
    for

    egyszeru for szintaxisa:

    for ([ciklusvaltozo definialasa]; [feltetel]; [ciklusvaltozo leptetese])

    i++ vagy i = i + 1
*/

for (let i = 1; i <= 10; i++){
    console.log("ciklusban: " + i);
}

var gyumolcskosar = ["alma", "korte", "szilva", "barack"];

var lista = "<ul>";

for (let i = 0; i < gyumolcskosar.length; i++){

    lista += `<li>${gyumolcskosar[i]}</li>`;
}

lista += "</ul><hr>";

document.querySelector("#content").innerHTML = lista;

//jelenitsuk meg paros

console.log("--------paros szamok--------");

for (let i = 2; i <= 28; i = i+2)
    console.log(i);

// FOR IN

console.log("-----------FOR IN------------");

for (let i in gyumolcskosar)
    console.log(gyumolcskosar[i]);


// FOR OF
console.log("-----------FOR OF-----------");

for (let gyumolcs of gyumolcskosar)
    console.log(gyumolcs);


var ember = {
    firstName: "Lakatos",
    lastName: "Nóémi",
    position: "vezető",
    job: "Fazekas",
    age: 32
};

// FOR IN OBJECT

console.log("-----------FOR IN ember----------");

for (const key in ember)
    console.log(key + ": "+ember[key]);

// FOR OF OBJECT

// Az alábbi kód hibát eredményez
/*
for (let property of ember)
    console.log(property);
*/

// For of-al nem lehet egy obejct elemein végig iterálni

/*
    Felteteles ciklusok
        while - eloltesztelo ciklus 
            -eloszor tesztel, es ha a feltetel igaz, csak akkor ismetel
        do while - hatultesztelo ciklus
            - egyszer lefut a ciklusmag, es csak azutan tesztel. 
*/

/*
    példa: Addig olvsunk be elemeket es tegyuk a kosarba, amíg azt nem "mondjuk" hogy eleg
*/

var kosar = [];

//megoldas: hátul tesztelő ciklussal (dowhile)

/*
do {
    
    kosar.push( prompt("tegy valamit a kosarba") );

} while ( kosar[kosar.length-1] != "eleg" );

kosar.pop();
*/

//megoldas: elől tesztelő ciklussal (while)

var kosar2 = [];

var zoldseg = prompt("Tegy valamit a kosarba");

while (zoldseg != "eleg"){

    kosar2.push(zoldseg);
    zoldseg = prompt("Tegy valamit a kosarba");
}

