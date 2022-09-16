console.log("Operatorok ok");

/*
    Operátorok

    Aritmetikai operátorok - matematikai műveleteket végzők
        "+" - összeadás (összeadás stringeket is összead, stringet és számot is össze tud adni de a végeredmény string lesz)
        "-" - kivonás
        "*" - szorzás
        "/" - osztás
        "%" - maradékos osztás
        "**" - hatványozás

    Operátor működése:
        [operandus1 operátor operandus2] - Az operátor műveletet hajt végre az operandus1 és opreandus 2 közt és
        balról jobbra értékelődik ki
---------------------------------------------------------------------------------------------------
var a = 5;
var b = 12;

var szorzás = a * b;

var a = prompt("Kérem az 'a' értékét");
var b = prompt("Kérem az 'b' értékét");

---------------------------------------------------------------------------------------------------
document.getElementById("content").innerHTML = `${a} * ${b} = ${a * b}`;

 
    Műveletek sorrendje megeggyezik az algebrában használt műveletek sorrendjével

    pl: 1 + 2 * 3 = 7
---------------------------------------------------------------------------------------------------

console.log("5" + a);


    Logikai operátorok
        "&&" - and - logikai és (akkor lesz igaz, ha mindkét oldala igaz/true)
        "||" - or - logikai vagy (akkor igaz, ha az egyik oldala legalább igaz)
        "!" - not - logikai tagadás 
---------------------------------------------------------------------------------------------------
    Összehasonlító operátorok
        ">"     - nagyobb
        "<"     - kissebb
        ">="    - nagyobb vagy egyenlő
        "<="    - kissebb vagy egyenlő
        "!="    - nem egyenlő
        "!=="   - szigorúan nem egyenlő
        "=="    - eggyenlő
        "==="   - szigorúan egyenlő
!!!!!   JavaScriptben az összehasonlító operátorokat csak és kizárólag egyszerű típusok esetén lehet alkalmazni !!!!!
!!!!!   Összetett típusok esetén helytelen eredményeket produkál !!!!!!
---------------------------------------------------------------------------------------------------
    Típuskonverzió
        Stringből - számmá
        - parseInt() - átalakítja a stringben levő egész számot egész számmá
        - parseFloat(string) - átalakítja a stringben lévő tizedes számot

        - Number(string) - átalakítja stringet számmá
    Számból - Stringet
        - A legegyszerübben:
            Hozzá adjuk egy üüres stringhez
            pl:
                let v = 12;
                console.log( "" + v );
        - String(v);
---------------------------------------------------------------------------------------------------
    ? - : operátor páros

    Szintaxisa:

        [kifejezés] ? [eredmény ha igaz] : [eredmény ha hamis]
*/

var age = parseInt( prompt("Hány éves vagy?") );

alert( `A felhasználó: ${ age >= 18 ? "Nagykoru" : "Kiskoru"}` );
