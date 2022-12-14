//Első feladat
/*function elsoNParatlan(){
    let n = parseInt(prompt('Páratlan számok darabszáma: '));
    let sum = 0;
    for(let i = 1; i < n*2; i += 2)
        sum += i;
    return sum;
}
console.log(elsoNParatlan());*/
//Második feladat
function legkisebb(t){
    let min = t[0];
    for (let ti of t)
        if (ti < min)
            min = ti;
    return min;
}
//vagy
function legkisebb1(t){
    return Math.min(...t)
}
//Harmadik 
// a. feladat
var szoveg = "Botond talált 5 cukorkát. Ebből 2 darabot odaadott Sárának, így maradt neki 3 cukorkája, amiből 1-et Zsuzsának adott. Végül Botondnak 2 cukorkája maradt.";
var szamok = szoveg.match(/[0-9]/g);
// b. feladat
console.log('A reguláris kifejezés '+szamok.length+' darab szamot kapott');
// c. feladat
szamok = szamok.map(n => parseInt(n))
console.log('A szöveg legkisebb számértéke: ', legkisebb(szamok));
// d. feladat
let mondatok = szoveg.split(/\. /);
mondatok = mondatok.map(m => 
    m[m.length-1] != '.' ? m+'.' : m);

const f3 = document.querySelector('#feladatHarom');
let pString = '';
for(let mondat of mondatok)
    pString += `<p>${mondat}</p>`
f3.innerHTML += pString;
//4. feladat
function howManyDays(dataString){
    var most = new Date();
    var date = new Date(dataString);
    return Math.round((most.getTime() - date.getTime()) / (1000*60*60*24));
}
const span = document.createElement("span");
Object.assign(span.style,{
    color: "red",
    backgroundColor:"#ffb6b6",
    padding: "5px 10px",
    borderRadius: "4px"
});
span.innerHTML = "2021 november 20 óta: "+howManyDays("2021-11-20")+" nap telt el."
document.querySelector('#feladatNegy').appendChild(span);
//5. feladat
function createGrid(n, m, sel){
    const rowTpl = row => ` <div class="prow">${row}</div>`
    const cellTpl = (ind, css = "") => ` <div class="pcell" ${css}>${ind}</div>`

    let rows = "", cellindex = 0, cssName = "", cells = "";
    for(let i = 0; i < n; i++){
        cells = "";
        for(let j = 0; j < m; j++){
            cellindex = ( ( n * i ) + j ) + 1;
            cssName = ( i + j ) % 2 != 0 ? "pblack" : "";
            cells += cellTpl(cellindex, cssName);
        }
        rows += rowTpl(cells);
    }
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("pgrid");
    gridDiv.innerHTML = rows;
    document.querySelector(sel).appendChild(gridDiv);
}
createGrid(8, 8, "#feladatOt");
//6.feladat
function request(url, cbFn){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200)
            cbFn(xhr.responseText);
    }
    xhr.open("GET", url);
    xhr.send();
}
const f6 = document.querySelector("#feladatHat");
request("https://jsonplaceholder.typicode.com/todos", res => {
    let toDos =JSON.parse(res);
    //let filteredToDos = 
    toDos.filter(td => !td.completed).forEach(element => {
        f6.innerHTML += `<li>${element.title}</li>`
    });
    //console.log(filteredToDos);
})