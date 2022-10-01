console.log("Vezerlesi szerkezetek");

function getAge(){
    
    return parseInt( document.querySelector('input[name="age"]').value );
}

function szamolj(){

    console.log( getAge() >= 18 ? "Nagykoru" : "Kiskoru" );
}

console.log("----------------if else------------------");

function szamolj1(){

    let age = getAge();

    if (age >= 18)
        console.log(age + ": Nagykoru");
    else
        console.log(age + ": Kiskoru");
}

/*
    if else if else...
*/

function korosztaly(){
    let age = getAge();

    if (age <= 1)
        console.log(age + ": Csecsemo");
    else if (age <= 3)
        console.log(age + ": Baba");
    else if (age <= 10)
        console.log(age + ": Gyerek");
    else if (age <= 16)
        console.log(age + ": Serdulo");
    else 
        console.log(age + ": Felnott");
        
}

