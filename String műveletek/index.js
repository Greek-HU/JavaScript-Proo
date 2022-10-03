console.log("String műveletek");
var s = "Szöveg";
/*
    A JavaScriptben a string úgy viselkedik, mint egy "karakter típusu" tömb
    - A stringet mint az egy dimenziós töböt, lehet indexelni.

    A string hossza, ahogyan tömbök esetében. s.length
*/

   // s.charAt(index) - visszatér

console.log(s.charAt(3), s[3]);

    //s.charCodeAt(index) - Visszaadja az "index" pozícióban levő karakter kódját. 
var ind = 2;
console.log("A "+ind+"-as indexen lévőkarakter: "+s[ind]+" és az ASCII ódja "+s.charCodeAt(ind));

    //s.concat(s1,s2,...) - A string után fűzi a paramterként átadott egy vagy több stringet

