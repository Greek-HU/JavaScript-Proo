console.log("Házi5");

/*
    1. Készíts egy olyan osztályt, mely egy tömböt tárolására alkalmas, és
        - Képes kiszamolni az elemek összegét, átlagát, minimumát, maximumát (ezek egy-egy külön függvény legyenek)
        - Egy másik ugyanilyen példány tömbjének elemeiből képes átvenni azokat az elemeket, amelyek még nem szerepelnek saját
        magában
*/

class szamitasok{
    //A Számításokon bellül készít egy tömböt
    constructor(arrays){
        this.arrays = arrays;
    }
    // felveszünk egy össz functiont
    ossz(){
        //visszatérünk az array/tömb lekért összértékeivel
        return this.arrays.reduce((ossz, i) => ossz +i, 0);
    }
    atlag(){
        return this.ossz()/this.arrays.length
    }
    min() {
        return Math.min(...this.arrays);
    }
    max(){
        return Math.max(...this.arrays);
    }
    hasonlit(arrays2){
        //Átvizsgálja a 2 tömböt
        for(let e = 0; e < arrays2.arrays.length; e++){
            // megadunk egy feltételt(tartalmaz nem igaz/false)
            let tartalmaz = false;
            //átnézzük az egyes tömböt
            for (let i = 0; i<this.arrays.length; i++){
                //összahasonlítva, ha az első tömb eleme nem azonos, akkor tovább lép
                if (arrays2.arrays[e] == this.arrays[i]) {
                    tartalmaz = true
                }
            };
            // ha a második tömb elmei küzül valamelyik hiányzik az első tömbből, azt bele .push-olja
            if(tartalmaz == false){
                this.arrays.push(arrays2.arrays[e]);
            }
        }
        //visszatér az első tömbel amibe már bele van téve a kettes tömből hiányzó szám/összeg
        return this.arrays;
        }
}

// Készít a Számítások classon bellül egy Számok tömböt aminek megadjuk az értékeit
var szamok  = new szamitasok([1,4,12,34,51,11,3,8,10,30]);
console.log(szamok);
var szamok2 = new szamitasok([32,6]);
szamok.hasonlit(szamok2);
console.log(szamok);
console.log(szamok.atlag());
document.getElementById("atlag").innerHTML = "A tömb átlaga: "+szamok.atlag();

/*
    2. Készítsük el az online pincér OOP változatát.
        - Az osztály (nem a példány) rendelkezzen egy itallappal (ami egy objekt adattipus es a kulcsok az rendelheto italok nevei)
​
*/
itallap = {
    cola: {
        name: "Coca Cola",
        text: "A "+this.name+"-t nemsokára hozom. Összesen: "+this.ar+" lesz ha nem kér mást",
        ar: 350,
        mennyiseg: "2,5 dl"
    },
    limonade: {
        name: "Limonádé",
        text: "A "+this.name+"-t nemsokára hozom. Összesen: "+this.ar+" lesz ha nem kér mást",
        ar: 300,
        mennyiseg: "3 dl"
    },
    kv: {
        name: "KV",
        text: "A "+this.name+"-t nemsokára hozom. Összesen: "+this.ar+" lesz ha nem kér mást",
        ar: 300,
        mennyiseg: "3 dl"
    },
    sor: {
        name: "Soproni",
        text: "A "+this.name+"-t nemsokára hozom. Összesen: "+this.ar+" lesz ha nem kér mást",
        ar: 300,
        mennyiseg: "3 dl"
    },
    roze: {
        name: "Rozé",
        text: "A "+this.name+"-t nemsokára hozom. Összesen: "+this.ar+" lesz ha nem kér mást",
        ar: 300,
        mennyiseg: "3 dl"
    }
}
class Pincer {
    
    constructor(){
        this.itallap = itallap,
        this.osszeg = 0;
        this.lista = [];
    }
    
    tetel(rendeles){
        let tetelformaz = rendeles.normalize("NFD").replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
        for (const key in this.itallap) 
            if (key == tetelformaz.toLowerCase()) {
                this.lista.push(key)
                return "A rendelést felvettük!";       
            } else {
                return "Eza tétel elfogyott. Kérem válasszon mást."
            }
    }

    rendelesOszsege(){
        for (let i = 0; i < lista.length; i++) {
            const ital = this.lista[i];
            for (const kex in this.itallap[ital]){
                if (key == "ar"){
                    this.osszeg += this.itallap[ital][key];
                }
            }
        }
        return `rendelés összege: ${this.osszeg}+ Ft`;
    }
    szamla(){
        let tabla = `<table class="tabla">`;
        tabla += `<thead> <tr>
            <th> Termék neve: </th>
            <th> Mennyisége: </th>
            <th> Ára: </th>
            </tr> </thead>
            <tbody>`
        for (let i = 0; i <= this.rendeltDolgok.length; i++) {
            let ital = this.rendeltDolgok[i]
            tabla += `<tr>`;
            for (const key in this.itallap[ital]) {

                switch (key) {
                    case ("name"):
                        tabla += `<td>${this.itallap[ital][key]}</td>`
                        break;
                    case ("mennyiseg"):
                        tabla += `<td>${this.itallap[ital][key]}</td>`
                        break;
                    case ("ar"):
                        tabla += `<td>${this.itallap[ital][key]}</td>`
                        break;
                    default:
                        break;
                }

            }
            tabla += `</tr>`;
        }
        tabla += `</tr></tbody> </table>`;
        document.querySelector("#content").innerHTML = tabla;
    
    }
}   
var asztal1 = new Pincer();

var proba = {
    limonade: {
        name: "Limonádé",
        text: "frissen facsart citromot adunk hozza",
        ar: 700,
        mennyiseg: "5 dl"
    },
    kave: {
        name: "kávé",
        text: "feketén vagy tejjel?",
        ar: 300,
        mennyiseg: "3 dl"
    }
};

for (let [key, value] of Object.entries(proba.kave)) {
    if (key == "ar")
        console.log(`${key} : ${value}`);
}

/*
        - mert ez közös
        - A koncepció az, hogy annyi példányt tudjunk ebből az objektumból létrehozni, ahány
        asztal van a vendéglátóegységben.
        - minden asztalnál (azaz minden példányban külön lehet így rendelni)
        - Az osztály rendelkezzen egy rendel metódussal
            - rendeléskor a példányban mentsük el a rendelt tételeket
              így vissza tudjuk kérni a rendelt tételeket
        - Az osztály rendelkezzen egy rendelesegOsszege függvénnyel, ami visszaadja az eddigi rendelések összértékét
        - Az osztály rendelkezzen egy számla  metódussal, ami a képernyőn megmutatja
          egymás alatt a termékeket (egy táblázat valójában, ami 3 oszloppal rendelkezik, [termék neve, mennyisége, ára])
        
​
*/

