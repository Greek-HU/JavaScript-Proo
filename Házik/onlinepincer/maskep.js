//re.1. Adott az alábbi string

var cicus = "Cirmi délben eszik majd alszik egy nagyot. Aztán ha felkelt játszik egyet.";

/*
    Reguláris kifejezés segítségével szedjük ki a "cicus" változó tartalmból az ik-es igéket.
*/

console.log(cicus.match(/ik$/g));

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

/*
re.4. Írjunk reguláris kifejezést, amely a teljes nevekre illeszkedik 
(Csaladnev Keresztnev)
*/

