console.log("Ciklusok");

/* --------------For (Léptető ciklus)-------------
    - for
        for (ciklusváltozó definiálása;
             feltétel;
             ciklusváltozó léptetése)
             i++ = (i = i + 1)
    - for in
    - for of 
---------------While (feltételes ciklus)-----------
    - while / elől tesztelő
    - do while / hátul tesztelő
*/

for (let i=1; i<=10; i++){
    console.log(i);
}

var gyumolcskosar = ["alma", "körte", "szilva", "barack"];

var list = "<ul>";

for(let i = 0; i < gyumolcskosar.length; i++){
    list += `<li>${gyumolcskosar[i]}</li>`;
}
list += "</ul>";
document.querySelector("#content").innerHTML = list;

