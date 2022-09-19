console.log("Összetett");

/*
    Összetett típusok:
        - Objektumok/Object (Mint adat típus)-> PhP-ban az asszocioatív tömb megfelelellője
        -Tömbbök/Array (egy dimenziós és több dimenziós)
        - Függvények/Function
*/
/////////////////////////////////////////Array/////////////////////////////////////////

var gyumolcskosar = ["alma", "körte", "barack", "szölő", "dió"];
/* 
    - A tömb hosszát a tömb.lenght tulajdonsága határozza meg.
    - A tömb egy elemét a tömb indexén keresztül érjük el
        pl: a gyümölcskosár második elemét
        gyümölskosár[1] kóddal érjük el
    - Minden tömb első indexe a 0
    - Egy tömbnek nem lehet negatív indexe
    - A töb autómatikusan indexelődik
*/
/////////////////////////////////////////Object/////////////////////////////////////////

var ember = {
    csaladnev: "Fazekas",
    keresztnev: "István",
    eletkor: 35,
    foglalkozasas: "Fazekas",
    tanulmanyok: [
        {intezmenyNeve: "ndhjskb",}
    ],
    bemutatozas: function(){
        return `A nevem ${this.csaladnev} ${this.keresztnev} és a foglalkozásom ${this.foglalkozasas}!`
    }
};
/*
    Az object egyes tulajdonságaihoz 2 féle képpen lehet hozzáférni
        -objektum.tulajdonság
        -objektu["tulajdonság"]
*/

/////////////////////////////////////////Fügvények / Function/////////////////////////////////////////
/*
    Függvény nevének definiállásakor, ugyan azok a szabályok érvényesülnek
     mint válzozó nevének definiálásakor!
    Egy függvénynek lehetnek
        - Függvény paraméterei (nulla vagy bármennyi)
        - Egy kimeneti értéke (nem kötelező)
            -Kimeneti érték a "return" kulcsszó
    Egy függvény paraméterként megkaphat egy másik függvényt
*/
function elsoFugvenyem(nev){
    alert("Üdvözöllek kedves " + nev);
}
// Változó deklarálása anonim függvénnyel
// Ebben az esetben a változó nevét mint függvényt használhatjuk.
var udvozlet = function (nev){
    return "Üdvözöllek kedves "+nev+"!"; 
}