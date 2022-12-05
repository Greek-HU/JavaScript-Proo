/*
    1. Kerjetek be prompt segitsegevel egy nevet Es konzolban jelenitsetek meg ennek a nevnek a monogramjat
       (tehat a kezdobetuit)
*/
var nev = prompt("Kérem adja meg a nevét:");
var nevArray = nev.split(" ");
var vezNev = nevArray[0].charAt(0);
var kerNev = nevArray[1].charAt(0);
console.log(vezNev, kerNev);

//2. kerjetek be egy hosszab szoveget, es konzolban irjatok ki a szoveg mondatainak a szamat.
var szoveg = prompt("Kérnék egy mondatot:");
//console.log(szoveg.split(".","!").length + " sor van a mondatban!");
const stop = /[.!?]/;
const sentence = szoveg.split(stop);
console.log(sentence.length - 1);

//3. Írj függvényt, mely bemeneti paraméterként megkap egy fájlnevet, kimenetként pedig visszatér a fájl kiterjesztésével.
function fileName(file) {
    return file.split(".")[1];
    //lastIndexOf a helyes megoldás, mivel a fájlok nevében több pont is lehet!!!!!!!!!!!! 
}
var fname = (fileName("fájlnév.exe"))
var harmaskod = (`function fileName(file) {
    return file.split(".")[1];
}`)
function harmadik() {
    document.getElementById("harmadik").innerHTML = harmaskod;
}
console.log(fname);
//4. írjatok egy getMonth("2022-10-6") nevezetű függvényt, mely bemenetként megkap egy datum stringet
//       YYYY-MM-DD dátimformátumban és kiírja a dátumban szereplő hónapot.
function getMounth(date) {
    var mounths = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];
    var d = date.split(".");
    return mounths[parseInt(d[1])];
}
function getDateParam(date, season) {
    var dateIndex = {
        "year": 0,
        "mount": 1,
        "day": 2
    };
    var d = date.split(".");

    return d[dateIndex[season]];
}
/*function getDatePara(date, parameter) {
    switch (parameter) {
        case "year":
        return date.split(".")[0];

        case "mounth":
        return date.split(".")[1];

        case "day":
        return date.split(".")[2];

        default:
        return ("Nem jó értéket adott meg!");
    
    }
}
console.log(getDatePara("2022.10.08", "day"));

function getMount(date) {
    return date.split("-")[1];
}
console.log(getMount("2022-10-08"));*/

//----------------------------------------------Reguláris kifejezéses feladatok-------------------------------
//re.1. Adott az alábbi string

var cicus = "Cirmi délben eszik majd alszik egy nagyot. Aztán ha felkelt játszik egyet. És ha esik, Ázik";

/*
    Reguláris kifejezés segítségével szedjük ki a "cicus" változó tartalmból az ik-es igéket.
*/
console.log(cicus.match(/[\wőöúűóáéóí]+ik/gi));
/*
re.2. irjatok regularis kifejezest, mely egy szovegbol kiveszi a datumido karakterlancokat
 pl 2021.09.28 09:59 (UTC)
*/
var szoveg = ("A mai dátum 2022.10.07 és a pontos idő 12:23");

var datumIdo = szoveg.match(/[0-9]{4}.[0-9]{2}.[0-9]{2}/g);
var ido = szoveg.match(/[0-9]{2}:[0-9]{2}/g);
console.log(datumIdo, ido);
/*
re.3. Irjunk regularis kifejezest mely kiveszi egy sztringbol az aritmetikai muveleteket.
 (nem csak a muveletjeleket, hanem a a muveletsort)
*/   
var matek = "Adott a következő feladat: [(12+34)*2]/3 Odjuk meg a feladatot";
console.log(matek.match(/[0-9\[\]()+\-*/ ]{3,}/g));
var osszeadas = ("2+3=5");

console.log(osszeadas.replace(/[0-9]|[+,=]/g, ""));
/*
re.4. Írjunk reguláris kifejezést, amely a teljes nevekre illeszkedik 
(Csaladnev Keresztnev)
*/
var szov = "Ismertem egy embert, akit Farkas-Hegyi Jánosnakk hívtak.";

console.log(szov.match(/([A-ZÁÉŰÚŐÓÜÖÍ][a-záéűúőóüöí]+[\s\-]?){2,}/g));