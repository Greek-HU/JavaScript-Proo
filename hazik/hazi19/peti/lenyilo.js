// 1. Feladat:
/*
    1.Terjesszétek ki a JavaScript Sting osztályát egy deaccentationHU metódussal (String.prototype.deaccentationHU) azaz ékezetmentesítő
    funkcióval. Ami eltávoltja a magyar ékezeteket a szövegből. Tehát átalakítja a szöveget. 
*/
String.prototype.deaccentationHU = function () {

    var accents = 'áéíóöőúüűÁÉÍÓÖŐÚÜŰ';
    var replace = 'aeiooouuuAEIOOOUUU';
    accents = accents.split('');
    replace = replace.split('');
    var textLength = this.length;
    var text = '';
    for (var i = 0; i < textLength; i++) {
        var pos = accents.indexOf(this[i]);
        if (pos > -1) {
            text += replace[pos];
        } else {
            text += this[i];
        }
    }
    return text;
}
let s = "Ékezetes szöveg";
console.log(s.deaccentationHU());

// 2. Feladat:
/*
    2. jQuery segítségével valósítsunk meg egy Accordion szerkezetet. Adott hozzá az accordion.html
    Ebben a feladatban oldjuk meg azt, hogy az accordion elemei közül, egyszerre csak egy legyen nyitva. Ahogy azt default állapotban, azaz, ha
    üresen betöltitek a HTML oldalt van, alapból. És az egyes elemek fejlécében mindig az a szöveg legyen olvasható, ami történik, ha rákattintunk.
    TEhát, ha össze van csukva, akkor a "Lenyit", míg, ha le van nyitva, akkor az "Összecsuk" felirat legyen olvasható.
​
    Megjegyzés: Az összecsukáshoz, és a lenyitáshoz, használjátok a jQuery .slideUp(), .slideDown() és/vagy a () metódusokat.
    Az előző elem jQueryben a .prev(), míg a következő elemet a .next() metódus adja vissza. Amire még szükségetek lehet az a .attr(kulcs, ertek), ami 
    a nativ Javascriptből a HTMLElement.set/getAttribte() függvényeknek felelnek meg.
​
*/

$(document).ready(function(){

    $('.lenyilo-ct').click(function () {

        let lenyit = $(this).children(".lenyit");
        let lenyilo = $(this).children(".lenyilo");
        let valaszt = lenyit.text();

        if (valaszt == "Osszecsuk") {
            lenyilo.slideUp("slow");
            lenyit.text("Lenyit");

        }else {

            $(".lenyilo").each(function () {
                $(this).slideUp("slow");
            });

            $(".lenyit").each(function () {
                $(this).text("Lenyit");
            });

            lenyilo.slideDown("slow");
            lenyit.text("Osszecsuk");
        }
    });

});