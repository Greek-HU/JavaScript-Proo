map()-"Egy tömb adataiból egy új tömböt készít úgy hogy nem ér az eredeti tömbünkhöz"
    const tomb = [1, 2, 3, 4, 5];

    const tomb2 = tomb.map(
    (aktualisElem) => aktualisElem * 2
    );

    console.log(`tomb2 = ${tomb2}`);
filter()-"Tömbben keres"
const eredmeny = tomb.filter(aktualisElem => 
                    (aktualisElem % 2) === 0);
                    console.log(eredmeny)

loLowerCase()-"Csuppa kisbetüre alakítja a szöveget"
include("k")-"Átvizsgálja hogy a szövegben/tömbben hol található pl: 'k'-betü"
find()-"Magát csak a megadott elemet keresi és azzal tér vissza találatként"