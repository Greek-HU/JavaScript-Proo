console.log("Auto");
class Auto{
    constructor(rendszam, tankMeret, tankolhato, atlFogy, kilometerAll, 
                literAll, megtettKm){
        Object.assign(this, {
            rendszam, tankMeret, tankolhato, atlFogy, kilometerAll,
            literAll, megtettKm,

        });
    }
    tankol(tankoltLiter){
        if (this.literAll <= 50) {
                this.literAll = this.literAll + tankoltLiter;
            return this.tankolhato = true
        }
        
        return false;
    }
    megy(){
        this.literAll = this.literAll - this.atlFogy;
        if (!this.tankolhato)
            this.tankolhato = true;
            this.megtettKm = this.megtettKm + 100; 
    }
    
}
/*
​​
    - rendelkezzen a egy tankol metódussal, ami paraméterként megkapja, hogy hány litret szeretnénk tankolni.
        - A tankolás sikeres, ha a tartályba belefér még a tankolni kívánt mennyiség
        - A tankolás sikertelen, ha nem fér bele a kívánt mennyiség.
        - A metódus visszatér a tankolás sikerével vagy sikertelenségével, azaz egy logikai típussal.
​
    - rendelkezzen egy szervíz (szerviz) metódussal, ami lefut előszőr a konstruktorban.
        - Ez a 10 000 km-enkénti kötelező szervízet jelenti.
        - ha megtettünk vele 10 000 km tvolságot, kötelezően szervízelni kell, anékül ne indulhasson el az autó.
          szervíz után természetesen ez a számláló nullázódik.
​
    - rendekezzen egy száguld (szaguld) metódussal, ami paraméterben megkapja az utazás távolságát km-ben.
        - az üzemanyag fogyjon annyival, amennyi szükséges a megtenni kívánt távolság megtételéhez.
        - a megtett km-ek növekedjen a megtett út hosszával.
        - ha nincs elegendő üzemanyag, az autó ne induljon es térjen vissza "tankolj" üzenettel.
        - ha eljött a kötelező szervíz ideje, az autó ne induljon el és térjen vissza "szerviz" üzenettel.
        - ha sikeresen megtette a távot, térjen vissza "siker" üzenettel.
*/