/*
​
---------- Gyakorlatok Stringekkel -----------------
!!!!!! Az alábbi feladatokhoz ne használj reguláris kifejezéseket !!!!!!!
​
    1. Kerjetek be prompt segitsegevel egy nevet Es konzolban jelenitsetek meg ennek a nevnek a monogramjat
       (tehat a kezdobetuit)
*/
/*var nev = prompt("Kérem adja meg a nevét:");

var nevArray = nev.split("");
var vezNev = nevArray[0].charAt(0);
//var kerNev = nevArray[]
console.log(vezNev);
//2. kerjetek be egy hosszab szoveget, es konzolban irjatok ki a szoveg mondatainak a szamat.
var szoveg = prompt("Kérnék egy mondatot:");

console.log(szoveg.split(".","!").length + " szo van a mondatban!");*/
/*<script>
const myText = "This is a paragraph. Is it?";
const stop = /[.!?]/;
const sentence = myText.split(stop);
console.log(sentence.length - 1);
</script>*/
//3. Írj függvényt, mely bemeneti paraméterként megkap egy fájlnevet, kimenetként pedig visszatér a fájl kiterjesztésével.
function fileName(file) {
    return file.split(".")[1];
}
console.log(fileName("fájlnév.exe"));
//4. írjatok egy getMonth("2022-10-6") nevezetű függvényt, mely bemenetként megkap egy datum stringet
//       YYYY-MM-DD dátimformátumban és kiírja a dátumban szereplő hónapot.
function getMount(date) {
    return date.split("-")[1];
}
console.log(getMount("2022-10-06"));

function getDatePara(date, parameter) {
    switch (true) {
        case year:
        return date.split(".")[0];

        case mounth:
        return date.split(".")[1];

        case day:
        return date.split(".")[2];

        default:
        return ("Nem jó értéket adott meg!");
        break;
    }
    return date.split(".")[];
}
console.log(getDatePara(""));
