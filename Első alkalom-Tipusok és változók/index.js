console.log("Tipusok és Változók");
/*
    Az adattípusok 2 nagy csoportra osztjuk

        1. Egyszerű típusok
            - String
            - Number
            - Boolean
        2. Összetett típusok
            - Array - Tömbök
            - Object - Statikus objektumok - PhP-ban Asszociatív tömb - JS-ben - Json
            - Function

let szoveg = "Az én első adatom";
let Szoveg = "Az én második adatom";

var sel = "#content";

document.querySelector(sel).innerHTML = szoveg + " " + Szoveg;

document.querySelector(sel).innerHTML += `
                                            <br>
                                                <span style="color: red; bacground-image: url('kep.jpg')">
                                                    Ez egy piros szöveg
                                                </span>
                                        `;

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

var a = `"<br>"\"idezet\" az idezetben \n Escape karakter segítségével`; //

document.querySelector(sel).innerHTML += a;

/*
    Escape karakterek

    /n - New line
    /r - Carrige return
    /b - backspace
    /t - Horizontal Tabulator
    /v - Vertical Tabulator
*/

////////////////Number - Számok////////////

let num = 45; //egész szám
let dotNum = 12.5; //tizedes szám

////////////////Typeof - típushatározó/////

console.log( "a num valtozo tipusa: " + (typeof num));

////////////////Boolean - logikai típus////
    ///- 2 értéket vehet fel: true - igaz, false - hamis

var igaz = true;
var hamis = false;