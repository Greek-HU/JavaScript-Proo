
console.log("Összetett"); 

/*
    Öszetett típusok:

        - Objektum - Object -> Php-ban az asszociativ tomb megfeleloje
            - mint adattípus 
        - Tömbbök - Array
            - egy dimenziós 
            - többdimenziós
        - Függvények - Function
*/

/*
    Tömbök - Array
*/

var gyumolcskosar = ["alma", "korte", "barack", "szolo", "köszméte"];

/*
    - A tömb hosszat a tomb.length tulajdonsága határozza meg.
    - A tömb egy elemét a tömb indexén keresztül érjük el
        pl: a gyümölcskosár második elemét
        gyumolcskosar[1]
        koddal erjül el.
    - Minden tömb első indexe a 0
    - Egy tömbnek nem lehet negatív indexe
    - A tomb automatikusan indexelodik
*/

/*
    Object
*/

var ember = {
    csaladnev: "Fazekas",
    keresztnev: "Pista",
    eletkor: 35,
    foglalkozas: "Kovacs",
    bemutatkozas: function(){
        return `A nevem ${this.csaladnev} ${this.keresztnev} es a foglalkozasom ${this.foglalkozas}`
    }
};

/*
    Az object egyes tulajdonságaihoz 2 féle képpen lehet hozzáférni

        - objektum.tulajdonsag
        - objektum["tulajdonsag"]

*/

/*
    Függvények - function

    - Függvény nevének definiálásakor ugyan azok a szabályok érvényesülnek, mint változó nevének definiálásakor.
    - Egy függvénynek lehetnek bemeneti értékei, ezeket nevezzük a függvény paramétereinek, amiből lehet
      nulla, vagy bármennyi.
    - Egy függvénynek lehet kimeneti értéke (nem kötelező)
        - a kimeneti értéket a return kulcsó adja.

    - Egy függvény paraméterként megkaphat egy másik függvényt

*/

function elsoFuggvenyem(nev){

    alert("Üdvözöllek kedves " + nev + "!");
}

// Változó deklarálása anonim függvénnyel.
// Ebben az esetben a változó nevét mint a függvény használhatjuk.

var udvozlet = function(nev){ 

    return "Üdvözöllek kedves " + nev + "!";
}

/*
    Tobb dimenzios tombok 
        2 dimenzios tombok - matrixok

    var xo = 
    [
        [x, x, o],
        [x, o, o],
        [x, o, x]
    ];

    xo[sor][oszlop]
    xo[2][1]

    tetris elem L

    [
        [1, 0],
        [1, 0],
        [1, 1]
    ]

*/

/*
    NEm vettuk, csupan valasz egy kerdesre
*/

console.log("------forEach------");

gyumolcskosar.forEach( function(gy, i){
    console.log(i + ": "+gy);
});

console.log("------End forEach------");


var emberek = [
    ["Pista", "pista@akarmi.hu", "30 456 1236"],
    ["Jancsi", "jancsi@akarmi.hu", "30 234 1236"],
    ["Gizi", "gizi@akarmi.hu", "30 567 1236"],
    ["Piri", "piri@akarmi.hu", "30 789 1236"]
];

/*
    Egyszeru pelda
*/
for (let sorIndex = 0; sorIndex < emberek.length; sorIndex++) { // sorok bejarasa

    for (let oszlopIndex = 0; oszlopIndex < emberek[sorIndex].length; oszlopIndex++){ //az oszlopok vagy cellak bejarasa
        console.log(emberek[sorIndex][oszlopIndex]);

    }

    console.log("---------End row "+sorIndex+"-----------");
    
}


var content = document.querySelector("#content");
var gridString = "";

for (let i = 0; i < emberek.length; i++) { // sorok bejarasa

    gridString += '<div class="row">';

    for (let j = 0; j < emberek[i].length; j++) //az oszlopok vagy cellak bejarasa
        gridString += `<div class="cell">${emberek[i][j]}</div>`;
    
    gridString += "</div>";
}

//console.log(gridString);

content.innerHTML += gridString; 

