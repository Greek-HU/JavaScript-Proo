console.log("String műveletek");
var s = "Szöveg";
/*
    A JavaScriptben a string úgy viselkedik, mint egy "karakter típusu" tömb
    - A stringet mint az egy dimenziós töböt, lehet indexelni.

    A string hossza, ahogyan tömbök esetében. s.length
*/

//    s.charAt(index) - visszatér

console.log(s.charAt(3), s[3]);

//    s.charCodeAt(index) - Visszaadja az "index" pozícióban levő karakter kódját. 
var ind = 2;
console.log("A "+ind+"-as indexen lévőkarakter: "+s[ind]+" és az ASCII ódja "+s.charCodeAt(ind));

//    s.concat(s1,s2,...) - A string után fűzi a paramterként átadott egy vagy több stringet
//        - A .concat alternatívája a "+" operátor

var ujString = s.concat(" masik", "szoveg");
console.log(ujString);


//    s.repeat(x) X-szer fogja ismételni a String szöveget
//       - pl: ismételjük meg 10-szer az s értékét

console.log(s.repeat(10));

//    s.toUpperCase() - Csuppa nagybetüssé alakítja a szöveget
//    s.toLowerCase() - Csuppa kisbetüssé alakítja a szöveget

//    - Visszatér a nagy illetve kisbetűs változattal, de nem írja felül a string értékét!

//    s.trim() - levágja a "white space-eket"/üres karaktereket/szóközöket...

//    s.indexOf(karakter/szöveg) - visszaadja a paraméterként megadott szöveg első előforulásának indexét
//         - ha nincs benne a keresett string akkor a visszatérési érték -1
    
//    s.lastIndexOf(karakter/szöveg) - visszaadja a paraméterként megadott szöveg utolsó előforulásának indexét

var email = "gregusk89@gmail.com";

function emailTest(e) {
    var kukacIndex = e.lastIndexOf("@");
    var pontIndex = e.lastIndexOf(".");

    if (kukacIndex > -1 && pontIndex > -1 && kukacIndex < pontIndex) 
        return true;

    return false;
    
}
//     s.search(keresendő szöveg) - referenciája az .indexOf függvénynek
//          - visszaadja a keresendőSzöveg első előfordulásának helyét/indexét.

//     s.includes(keresett szöveg, startIndex) - True hogyha benne van a Stringben, False ha nincs
//        - startIndex paraméter opcionális - numerikus típus ettől az indextől kezdve keres
//        - startIndex - default értéke: 0/nulla !!!
    
//    innerText csak a szöveget adja vissza innerHTML az egész oldalt

document.body.innerText.includes("Itt a keresett szöveg");

//    s.split(separatorString) - separatorString szerint feldarabolja a Stringünket. 
//                             - Majd visszatér a stringünk daraboktömbjével
//                             - Az eredmény már nem tartlamazza azt, ami szerint feldaraboltunk.
//                             - A split reguláris kifejezések mentén is képes darabolni.
var mondat = "Jancsi és Juliska elmentek az erdőbe!"
console.log(mondat.split(" "));
console.log(mondat.split(" ").length + " szo van a mondatban!");

//------------------------------------String alatti striingeket

//      s.slice(start, end) - visszatér a 2 bemeneti index közti szakasszal.
//      s.substring(start, end) - visszatér a 2 bemeneti index közti szakasszal.
//          - mindkét füvény esetében az end paraméter opcionális.
//            amennyiben nem adjuk meg, úgy a String.length értéket kapja
console.log(s.slice(1, 3));
//      pl: írjunk fügvényt, mely a bemeneti paramétereket definiálja email címből visszatér a domain névvel
function domainInEmail(e) {
    if (emailTest(e))
        return e.slice(e.lastIndexOf("@")+1, e.lastIndexOf("."));
    return false;
}
console.log(domainInEmail(email));

//      .substr(start, lenght) - visszaadja a start indextől a szamított length  darabszámú karakter a stringből
//          - a length parameter opcionális - amennyiben nem adja meg, úgy végigmegy a stringben
console.log(s.substr(2, 4));

//      .replace(mit, mire) - a "mit" paraméterét lecseréli a "mire" paraméterére.
//          - a cserét elvégzi az első talalatig
//      .replaceAll(mit, mire) - a "mit" paraméterét lecseréli a "mire" paraméterére.
//          - a cserét elvégzi az összes találatra
var szov = "Barna kedvenc színe a barna ezért barna autója van";

console.log(szov.replace("barna", "piros"));
console.log(szov.replaceAll("barna", "piros"));

//      Reguláris kifejezések
//            -a reguláris kifeezések illeszkedési minték, melyek egy szövegre illeszthetőek.
//      pl: ilyen illeszkedési minta pl egy datumformatum. /[0-9]{4}--[0-9]{2}--[0-9]{2}/ YYYY-MM-DD
console.log(szov.replace( /barna/gim, "piros" )); 
        
        //(i) kis és nagybetüt semmibevesz, (g) globálisan keres

var szov2 = "Kata alma kompótot főz, és meggylekvért tett a pitébe";

console.log(szov2.replace(/alma|meggy/gi, "körte"));

