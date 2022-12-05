//Első feladat
//var n = prompt("Kérek egy páratlan számot")
var nNumer = parseInt(n);
var nOdd = [];
//nNumer % 2 == 0 ? n = prompt("Kérek egy páratlan számot") : nOdd.push(nNumer);
if (nNumer % 2 == 0){
    //n = prompt("Kérek egy páratlan számot");
}else{ 
    nOdd.push(nNumer);
}
console.log(nOdd);

//Második feladat
function masodik(nu){
    var arrayTwoo = [2];
    arrayTwoo.push(nu);
    var min = Math.min(arrayTwoo); 
};

//Harmadik feladat
//a.
var n = [];
var szoveg = "Botond talált 5 cukorkát. Ebből 2 darabot odaadott Sárának, így maradt neki 3 cukorkája, amiből 1-et Zsuzsának adott. Végül Botondnak 2 cukorkája maradt.";
var num = szoveg.match(/[0-9]/g);
n.push(num);
//b.
console.log(n);
//c.
//console.log(arraTwoo);
//d.
var wArray = [];
var w = szoveg.split(" ");
wArray.push(w);
//var map = wArray.map(function(sz, i){
//    return sz.toUpperCase();});
var wHTML='';
for(let i=0; i<w.length; i++){
    wHTML += `<p>${w[i]}</p>`;
}
document.querySelector("#wArray").innerHTML = wHTML;
//4.feladat

var most = new Date();
var old = new Date("2021-11-20");
let diff = most.getTime() - old.getTime();
let day = Math.ceil(diff / (1000 * 3600 * 24));
var spanHTML='';
for(let i=0; i<wArray.length; i++){
    spanHTML += 
    
    `<span>A dátum óra ${day} nap telt el</span>`;
    span.style.backgroundColor= "rgb(248, 121, 121)";
    span.style.color="red";
}
document.querySelector("#span").innerHTML = spanHTML;
//5.feladat
//6.feladat
function requestp(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange =function(){
            if (xhr.readyState == 4 && this.status == 200)
                resolve(xhr.responseText);
            else if (this.status >= 300)
                reject("Hiba");
        }
        xhr.open("GET", url);
        xhr.send();
    });
}
var todoTableTPL = t => `
        <div class="row">
            <div class="cell">${t.title}</div>
            <div class="cell">${t.completed}</div>
        </div>
        
`
document.querySelector("#load").onclick = function(){
requestp("https://jsonplaceholder.typicode.com/todos")
.then(function(res){
    var todo = JSON.parse(res);
    let sel = document.querySelector("#comp");
            sel.innerHTML = "";
                for(let t of todo)
                    sel.innerHTML += todoTableTPL(t);

}).catch(function(res){
    console.log(res);
})}

