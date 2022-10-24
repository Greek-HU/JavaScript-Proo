class Lottery{
    constructor(bullet = 90, holdNumber = 5){
        Object.assign(this, {
            bullet, holdNumber,
            lotBox: [], pullTry: []
        });

        this.reset();
    }

    reset(){
        for (let i = 1; i < this.bullet; i++) {
            this.lotBox.push(i);

        this.shuffle();
        }
    }
    shuffle(step = 1){
        var randBullet;

        do {
            for (let i = 0; i < this.lotBox.length; i++) {
                randBullet = Lottery.rand(1, this.lotBox.length-1);
                //megcseréli az elemek helyét úgy hogy bármelyiket is elveszítenénk
                [this.lotBox[i], this.lotBox[randBullet]] = //Ez lényegébe egy Bubble sort!!!!!!
                [this.lotBox[randBullet], this.lotBox[i]];
            }
            step--;
        } while (step > 0)
    }

    static rand(a = 1, b = this.bullet){
        return Math.floor(Math.random()*(b - a))+ a;
    }
    pull(){

    }
}