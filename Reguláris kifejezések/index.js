//      Reguláris kifejezések (Regular Expression) Js RegEx
//            -a reguláris kifeezések illeszkedési minték, melyek egy szövegre illeszthetőek.
//      pl: ilyen illeszkedési minta pl egy datumformatum. /[0-9]{4}--[0-9]{2}--[0-9]{2}/ YYYY-MM-DD
var d = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
console.log(d.test("2022-10-05"));

//      Jelölásek reguláris kifejezésekben

/*      [] - egy szakaszt jelölünk
        [0-9] - számok halmaza
        [a-z] - kisbetük halmaza
        [A-Z] - nagybetük halmaza
        [a-zA-Z] - z összes betü
        [a-zA-Z0-9] - az alfannumerikus karakterek

        \d - digit, minden ami szám - [0-9]
        \w - minden ami betü [A-z]
        \W - minden ami nem betü
        \s - üres karakterek - white spaces

        n{} - n ismétlődseinek számát dja meg
        n{x} - n x-szer ismétlődik
        n{x,z} - minimum x-szer, maximum z-szer ismétlődhet
        n{x,} - minimum x-szer, maximum akárhányszor ismétlődhet

        n+ - minimum egyszer vagy akárhányszor ismétlődhet
        n* - zérószor ismétlődhet
        n? - zérószor vagy csak egyszer ismétlődhet

        n$ - a végéhez illeszkedik
        n^ - az elejéhez illeszkedik

        ?=n - minden olyan karakterláncnak megfelel, melyet "n" követ
        ?!n - minden olyan karakterláncnak megfelel, melyet "n" nem követ

        [A-zéáőúűöüóíÉÁŐÚŰÖÜÓÍ] - Az összes Magyar karakter

*/
var s = "Pistike 10 lufijából kidurrant 3, viszont piroskának van még 135 lufija.";
var szamok = s.match(/[0-9]/g);// vagy pedig - s.match(/[0-9]{1,}/g)
console.log(szamok);

var menetrend = "A busz 10:30-kor indul és 11:45-kor érkezik meg.";
var idopontok = menetrend.match(/[0-9]{2}:[0-9]{2}/g)
console.log(idopontok);

var d = "2022.10.05";
console.log(d.replace(".", "-"));
//var dArray = d.split(".");
