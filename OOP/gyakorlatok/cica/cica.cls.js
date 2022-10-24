class Cica {
    constructor(neve, sulya, ehes){
        Object.assign(this, {
            neve, sulya, ehes,
            sulyaCsokken: 0.1
            });
        }
        eszik(kajaMennyiseg){
            if (this.ehes) { 
                this.sulya = Number((this.sulya + kajaMennyiseg).toFixed(2));
                this.ehes = false;
                return true; 
            }
            return false;
        }
        futkos(){
            this.sulya = Number((this.sulya - this.sulyaCsokken).toFixed(2));
            if (!this.ehes)
            this.ehes = true;
        }
}