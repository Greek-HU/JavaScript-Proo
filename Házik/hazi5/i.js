class Szamitasok {
    constructor(tomb) {
        this.tomb = tomb;
    }
    osszesen() {
        return this.tomb.reduce((osszesen, i) => osszesen + i, 0);
    }
    atlag(){
        return this.osszesen()/this.tomb.length
    }
    min() {
        return Math.min(...this.tomb);
    }
    max() {
        return Math.max(...this.tomb);
    }
    masol(tomb2) {
        for(let e = 0; e < tomb2.tomb.length; e++){
            let tartalmaz = false;
            for (let i = 0; i < this.tomb.length; i++) {
                if (tomb2.tomb[e] == this.tomb[i]){
                    tartalmaz = true
            }
        };
        if(tartalmaz == false){
            this.tomb.push(tomb2.tomb[e]);
        }
    }
    return this.tomb;
    }
}
var szamok = new Szamitasok([1, 2, 5, 23, 44, 3, 12, 100, 0, 100, 66]);
console.log(szamok.atlag());
var szamok2 = new Szamitasok([32, 6, 5]);
szamok.masol(szamok2);
console.log(szamok);