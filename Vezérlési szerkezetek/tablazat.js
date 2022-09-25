var emberek = [
    {
        firstName: "Almási",
        lastName: "Nóémi",
        position: "vezető",
        age: 32
    },
    {
        firstName: "Kovács",
        lastName: "Gábor",
        position: "dolgozó",
        age: 40
    },
    {
        firstName: "Jakab",
        lastName: "Orsolya",
        position: "dolgozó",
        age: 28
    },
    {
        firstName: "Mátyás",
        lastName: "Norbert",
        position: "vezető",
        age: 30
    },
    {
        firstName: "Herceg",
        lastName: "Ferenc",
        position: "dolgozó",
        age: 41
    },
    {
        firstName: "Ivácsony",
        lastName: "Gabriella",
        position: "vezető",
        age: 32
    },
    {
        firstName: "Dusinszki",
        lastName: "Levente",
        position: "dolgozó",
        age: 32
    },
    {
        firstName: "Gábor",
        lastName: "Irén",
        position: "dolgozo",
        age: 25
    },
    {
        firstName: "Osváth",
        lastName: "Pongrác",
        position: "dolgozó",
        age: 45
    },
    {
        firstName: "Fülöp",
        lastName: "Eszter",
        position: "vezető",
        age: 33
    }
    
];

var table = "<ul>";

for(let i = 0; i < emberek.length; i++){
    table += `<li>${emberek[i]['firstName']} 
                ${emberek[i]['lastName']} 
                ${emberek[i]['position']}
            </li>`;
}
table += "</ul>";
document.querySelector("#tablazat").innerHTML = table;
