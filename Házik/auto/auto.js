console.log("Auto");
class Auto{
    constructor(rendszam, tankMeret, tankolhato, atlFogy, kilometerAll, 
                literAll, megtettKm, kilometerenkent, fogyliter){
        Object.assign(this, {
            rendszam, tankMeret, tankolhato, atlFogy, kilometerAll,
            literAll, megtettKm, kilometerenkent, fogyliter

        });
    }
    
   
    tankol(tankoltLiter){
        this.literAll = this.literAll + tankoltLiter;
        if (this.literAll < 50) {
                this.tankolhato = false;
            return this.tankolhato = true;
        }
        else { 
            this.literAll = 50;
        return this.tankolhato = false;
        }
    }
    megy(){
        if (this.literAll == 0) {
            alert("Tankolnod kell először!")
        } else if (this.megtettKm == 10000) {
            alert("Szervizelni kell a kocsit!")
        } 
        else {
            this.literAll = this.literAll - this.atlFogy;
            this.tankolhato = true;
            this.megtettKm = this.megtettKm + 100;
        }
    }
    szerviz(){
        return this.megtettKm = 0;
    }
    szaguld(tavolsag){
        this.kilometerenkent = this.atlFogy / 100;
        this.fogyliter = tavolsag * this.kilometerenkent;
            this.literAll = this.literAll - this.fogyliter;
            if (this.literAll <= 0) {
                alert("Üres a tank!")
            }
        this.megtettKm = this.megtettKm + tavolsag;
            if (this.megtettKm == 10000) {
                alert("Vidd a kocsid szervízbe!")
            }
        return alert("Siker!")
    }
}
