console.log("Elso hazi");

/////////////1. feladat/////////////
var u_name = prompt("Adjon meg egy felhasználónevet:");

document.getElementById("content").innerHTML = `Üdvözlöm \n \t ` + u_name;

/////////////2. Feladat/////////////

var num1 = parseInt( prompt("Kérem az első szám értékét") );
var num2 = parseInt( prompt("Kérem az második szám értékét") );
var biger = num1 <= num2 || num1 >= num2;

if ( num1 <= num2 )
{
    alert (`A megadott számok közül ${num2} a nagyobb!`);
}
else {
    alert (`A megadott számok közül ${num1} a nagyobb!`)
}

var a = 5;
var b = 12;

/////////////3. Feladat/////////////
var szorzat = a * b;

document.getElementById("3_1feladat").innerHTML = ` <span style="color: #6495ED">${a}</span> 
                                                    <span style="color: #32CD32"> * </span>
                                                    <span style="color: #6495ED">${b}</span> 
                                                    <span style="color: #32CD32"> = </span>
                                                        <span style="color: #6495ED">${szorzat}</span>`;
var osszeadas = a + b;                                                        
document.getElementById("3_2feladat").innerHTML = ` <span style="color: #6495ED">${a}</span> 
                                                    <span style="color: #32CD32"> + </span>
                                                    <span style="color: #6495ED">${b}</span> 
                                                    <span style="color: #32CD32"> = </span>
                                                        <span style="color: #6495ED">${osszeadas}</span>`;
var kivon = a - b;                                                        
document.getElementById("3_3feladat").innerHTML = `<span style="color: #6495ED">${a}</span> 
                                                    <span style="color: #32CD32"> - </span>
                                                    <span style="color: #6495ED">${b}</span> 
                                                    <span style="color: #32CD32"> = </span>
                                                        <span style="color: #6495ED">${kivon}</span>`;
var oszt = a / b;                                                        
document.getElementById("3_4feladat").innerHTML = `<span style="color: #6495ED">${a}</span> 
                                                    <span style="color: #32CD32"> / </span>
                                                    <span style="color: #6495ED">${b}</span> 
                                                    <span style="color: #32CD32"> = </span>
                                                        <span style="color: #6495ED">${oszt}</span>`;
/////////////4. Feladat/////////////
if ( a % 2 == 0){
    console.log(`Az "a"-ként megadott szám: Páros!`); 
}
else {
    console.log(`Az "a"-ként megadott szám: Páratlan!`);
}
/////////////5. Feladat/////////////*/

var age = parseInt( prompt("Hány éves vagy?") );

if ( 25 <= age && age <=35 ){
    console.log(`Az életkorod 25 és 35 közé esik!`); 
}
else {
    console.log(`Fiatalabb vagy mint 25 vagy pedig idősebb mint 35!`);
}



