/*------------------------Első feladat-------------------------*/
var num1 = parseInt(prompt("Kérem adjon meg egy számot")) ;

/*

let list = "<ul>";

for(let i = 1; i <= 10; i++){
    list += `<li>${i*num1}</li>`;
}
list += "</ul>";
document.querySelector("#elso_feladat").innerHTML = list;


/*------------------------Második feladat-------------------------*/
var oszthato =  `A ${num1}-nak/nek van osztója!`;

let list2 = "<ul>";

for (let j = 2; j < num1; j++){
    if (num1%j==0) {
        list2 += `<li>${j}</li>`;
        document.querySelector("#masodik_feladat").innerHTML = oszthato;
    } else {
        document.querySelector("#masodik_feladat").innerHTML = (`A ${num1}-nak/nek nincs osztója!`);
    }
}
list2 += "</ul>";

document.querySelector("#masodik_feladat").innerHTML = list2;
/*

var oszhato = num1%j==0;
var nemOszthato =  `A ${num1}-nak/nek nincs osztója!`;

let list2 = "<ul>";

for (let j = 2; j < num1; j++){
       
    if (oszhato){
        list2 += `<li>${j}</li>`;
    } 
    else {
        document.querySelector("#masodik_feladat").innerHTML = nemOszthato;
    }
}

list2 += "</ul>";

document.querySelector("#masodik_feladat").innerHTML = list2;


/*------------------------Harmadik feladat-------------------------*/

function action() {
    let number = parseInt(document.querySelector('input[name="primeNumer"]').value);
let isPrime = true;

if (number === 1) {
    console.log(false);
}

else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(true);
    } else {
        console.log(false);
    }
}

else {
    console.log(false);
}
}


