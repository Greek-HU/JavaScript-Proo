//re.1. Adott az alábbi string

var cicus = "Cirmi délben eszik majd alszik egy nagyot. Aztán ha felkelt játszik egyet.";

/*
    Reguláris kifejezés segítségével szedjük ki a "cicus" változó tartalmból az ik-es igéket.
*/

console.log(cicus.match(/[ik$]{2}/ig ));

/*
re.2. irjatok regularis kifejezest, mely egy szovegbol kiveszi a datumido karakterlancokat
 pl 2021.09.28 09:59 (UTC)
*/
