console.log("Tömbműveletek");

var kosar = ["Alma", "Körte", "Szilva", "Barack"];
console.log(kosar);

//  Array.push(arr1, arr2, ..., arrN) -  több elem paramétert a tömb végéhez fűzi.
var push = kosar.push("Szölő", "Dió");
console.log(kosar);

function valtozohosszusaguParameterLista() {
    console.log("Az én paraméter listám: ", arguments);
}

function sum() {
    res = 0;
    for (let i in arguments)
        res += arguments[i];

    return res;
}

//  Array.pop() - a tömb végéről kivesz egy elemet, és visszatér vele
//              - ezt az elemet fizikailag is törli a tömbből!!!
var pop = kosar.pop();
console.log(pop);

//  Array.concat(arr1, arr2, ..., arrN) - Az Array tömbhöz fűzi a paraméter listában megadott tömböket

var con = kosar.concat([1, 2, 3]);
console.log(kosar);

//  Array.join(separatorString) - Összefűzi  a tömb elemeit a spratarorString-el elválasztva

var sepStr = kosar.join(", ");
console.log(kosar);

document.getElementById("content").innerHTML = "<ul><li>"+kosar.join("</li><li>")+"</li></ul>";