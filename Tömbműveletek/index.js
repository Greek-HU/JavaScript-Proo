console.log("Tömbműveletek");

var kosar = ["Alma", "Körte", "Szilva", "Barack"];
//console.log(kosar);

//  Array.push(arr1, arr2, ..., arrN) -  több elem paramétert a tömb végéhez fűzi.
var push = kosar.push("Szölő", "Dió");
//console.log(kosar);

function valtozohosszusaguParameterLista() {
    console.log("Az én paraméter listám: ", arguments);
}

function sum() {
    res = 0;
    for (let i in arguments)
        res += paresInt(arguments[i]) || 0;

    return res;
}
// 5! = 5 * 4!
// 4! = 4 * 3!...

function faktorialis(n) {
    if (n == 1){
        return n;
    }
    return n * faktorialis(n - 1);
}
/*
    faktorialis(5)
        return 5 * faktorialis(4)
            4 * faktorialis(3)
                3 * faktorialis(2)
                    2 * faktorialis(1)
                        1 
*/

//console.log(faktorialis(5));

function hatvany(n, h) {
    if (h == 1) 
        return n;
    
    return n * hatvany(n, h - 1);
}

var hatvany1 = (n, h) => h == 1 ? n : n * hatvany(n, h - 1);


//  Array.pop() - a tömb végéről kivesz egy elemet, és visszatér vele
//              - ezt az elemet fizikailag is törli a tömbből!!!
var pop = kosar.pop();
//console.log(pop);

//  Array.concat(arr1, arr2, ..., arrN) - Az Array tömbhöz fűzi a paraméter listában megadott tömböket

var con = kosar.concat([1, 2, 3]);
//console.log(kosar);

//  Array.join(separatorString) - Összefűzi  a tömb elemeit a spratarorString-el elválasztva

var sepStr = kosar.join(", ");
//console.log(kosar);

document.getElementById("content").innerHTML = "<ul><li>"+kosar.join("</li><li>")+"</li></ul>";

//console.log("-------ForEach------");

kosar.forEach( function (gyumolcs, ind) {
    //console.log(ind+": "+gyumolcs);
});
var forEach = function (t, callBackFunction) {
    for ( let i in t)
        callBackFunction(t[i], i);
    return t;
}
console.log("-------My ForEach------");

forEach(kosar, function(gyumolcs, ind){
    console.log(ind+": "+gyumolcs);
});
/*
    Tömb definíciók!
*/
var t = [];
var t1 = new Array();


Array.prototype.myForEach = function(cbFn){
    for (let i = 0; i < this.lenght; i++) 
        cbFn(this[i], i, this)
    return this;
}

console.log("--------My Prototype ForEach Function---------");

kosar.myForEach( function (gyumolcs, ind) {
    console.log(ind+": "+gyumolcs);
});

//  Array.map(function(soronKövetkezőElem, soronKövetkezőIndex, Array) ) 
//      - A callBack functionnak kell rendekezzen egy visszatérési értékkek 
//        és ez az érték lesz a tömb soron következő elemének értéke

var KOSAR = kosar.map( function(gy, i){
    return gy.toUpperCase();
});

//console.log(KOSAR);

Array.prototype.myMap = function(cbFn){
    var tmp = [];

    for (let i = 0; i < this.length; i++) 
        tmp.push (cbFn(this[i], i, this)); 
        
        return tmp;
}

var _KOSAR = kosar.myMap( function(gy, i){
    return gy.toUpperCase();
});

//console.log(_KOSAR);

//  Array.reduce( function(total, tombKovEleme, kovElemIndex, Array), totálKezdőÉrték)

var numbers = [2, 5, 1];

var sum = numbers.reduce( function(ossz, n, i){
    return ossz + n;
}, 0);

console.log(sum);

Array.prototype.myReduce = function(cbFn, innitTotal){

    var total = innitTotal || this[0];
    
    for ( let i = innitTotal ? 0 : 1; i < this.lenght; i++)
        total = cbFn(total, this[i], i, this);
    return total;
}

console.log("-----------Array.myReduce-----------");

var nsum = numbers.myReduce(function(ossz, n, i){
    return ossz + n;
}, 0);

console.log(nsum);
console.log(numbers.reduce((t, n)=>t + n, 0));
//  Array.find(function(kovElem, kövElemIndexe, Array))
//      -   A paraméterként átadott callBack function egy Boolean típussal kell visszatérjen
//          és a find  a tömb azon elemével fog visszatérni, melyre először true lett a callVack dunction

var kGy = kosar.find( function(gy){
    return gy[0].toUpperCase() == "K";
});

// Röviden ------>>>>> var kgy = kosar.find( gy => gy[0].toUpperCase == "K");

console.log("A kosár első 'K'-betüs eleme : "+kGy);
