class Lottery{
    constructor(bullet = 90, holdNumber = 5){
        Object.assign(this, {
            bullet, holdNumber,
            lotBox: [], pullTry: [],
            lastPullBullet: 0
        });

        this.reset();
    }

    reset(){
        this.pullTry = [];

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
        var randBullet;
        //amíg kissebb a megadott maximális húzási értéknél
        if (this.pullTry.length < this.holdNumber) {
            //3at tekerünk
            this.shuffle(3);
            randBullet = Lottery.rand(0, this.lotBox.length-1);
                //kiveszi a splice-al és a [0] értékre helyezi a húzott számot
                this.lastPullBullet = this.lotBox.splice(randBullet, 1)[0];
            //be "puss"olja a kihúzott számot a tömbünkbe 
            this.pullTry.push(this.lastPullBullet);

            return this.lastPullBullet;

        }
        return 0;
    }
}