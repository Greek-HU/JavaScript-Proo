console.log("Auto");
class Auto{
    constructor(rendszam, tankMeret, tankolhato, atlFogy, kilometerAll){
        Object.assign(this, {
            rendszam, tankMeret,
            tankolhato,
            atlFogy, kilometerAll,
            

        });
    }
    tankol(tankoltLiter){
        if (this.tankolhato) {
            this.tankMeret = 
                this.tankMeret + tankoltLiter;
            this.tankolhato = false; 
            return true;
        }
        return false;
    }
    megy(){
        this.tankMeret = this.tankMeret - this.atlFogy;
        if (!this.tankolhato)
            this.tankolhato = true;
    }
}