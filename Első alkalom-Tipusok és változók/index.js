console.log("Tipusok es valtozok");

/*
    Az adatípusokat 2 nagy csoportra osztjuk

        1. Egyszerű típusok
            - String
            - Number
            - Boolean
            
        2. Összetett típusok
            - Array - Tömbök
            - Object - Statikus objektumok - php-ban Aszociativ tömb - Javascriptben - JSON
            ~ Function
*/

// Egy soros megjegyzes

/*
    Ez egy
    tobb soros
    komment
    vagyis megjagyzes
*/

//*

/*
    Változók

    String - Szövegtípus
*/

let szoveg = "Az en elso adatom.";
let Szoveg = 'Egy "masik" adat.';


//*/

/* 
    - Egy változó neve:
        - nem tartlamazhat speciális karaktereket
            - kivétel ez alól a "$" es az "_" jelek
        - tartalmazhat számot, de nem kezdődhet vele

        - !!! Soha Nem definiálunk ékezetes változó neveket !!!

    !!! FIGYELEM !!!
    A Javascript kis és nagybetű érzékeny


    - Amikor egy változót definilunk, akkor tulajdonképpen lefoglalunk egy memoriacímet a számítógépen, aminek
    nevet adunk. Ez lesz a változó neve, és azt az adatot, amit erre a memóriacímre írunk, a változó nevén keresztül
    tudjuk elérni.

*/

var sel = "#content";

document.querySelector(sel).innerHTML = szoveg + " " + Szoveg;

/*
    A stringek Javascriptben többfélék lehetnek:

        - "" - kettesidézőjel
        - '' - egyesidézőjel
        - `` - BackTick - Template string
*/

var kepUrl = "akarmi.jpg"

document.querySelector(sel).innerHTML += `
    <br>
    <span style="color: #ff0000; background-image: url('${kepUrl}')">
        ${szoveg}
    </span>
`;

var a = `<br>"idezet" az idezetben \n\t Escape karakter segitsegevel`; //

document.querySelector(sel).innerHTML += a;


/*
    Escape karakterek

    \n - New line
    \r - Carriage return
    \b - backspace
    \t - Horizontal Tabulator
    \v - Vertical Tabulator
*/

/*
    Number - Szamok
*/

let num = 45; //egesz szam
let dotNum = 12.5; //tizedes szam - a tizedes jel az a pont

/*
    typeof - tipushatározó
*/

console.log( "a num valtozo tipusa: " + (typeof num) );

/*
    Boolean - logikai tipus
        - 2 értéket vehet fel: true - igaz, false - hamis
*/

var igaz = true;
var hamis = false;










