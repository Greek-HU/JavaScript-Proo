console.log("Elso hazi");


//var u_name = prompt("Adjon meg egy felhasználónevet:");

//document.getElementById("content").innerHTML = `Üdvözlöm ` + u_name;

var num1 = parseInt( prompt("Kérem az első szám értékét") );
var num2 = parseInt( prompt("Kérem az második szám értékét") );
var biger = num1 <= num2 || num1 >= num2;
//alert ( `Az ${num1} és ${num2} közül a = ${  num1 <= num2 || num1 >= num2 ? num1 : num2  } a nagyobb`);

/*if ( num1 <= num2 )
{
    alert (`A megadott számok közül ${num2} a nagyobb!`);
}
else {
    alert (`A megadott számok közül ${num1} a nagyobb!`)
}*/

document.getElementById("content").innerHTML = `${a} közül ${b} = ${biger}`;
