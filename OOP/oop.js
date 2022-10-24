console.log("oop");

var ember = {
    vnev: "Kovacs",
    knev: "Andrea",
    kor: 35,
    bemutatkozas: function(){
        return "A nevem "+this.vnev+" "+this.knev+" és "+this.kor+" éves vagyok!";
    }
}
console.log(ember.bemutatkozas());

var ember1 = {
    vnev: "Vass",
    knev: "Ede",
    kor: 40,
    bemutatkozas: function(){
        return "A nevem "+this.vnev+" "+this.knev+" és "+this.kor+" éves vagyok!";
    }
}
//console.log(ember1.bemutatkozas());
function creatEmber(vnev, knev, kor) {
    return {
        vnev, knev, kor,
        bemutatkozas: function(){
            return "A nevem "+this.vnev+" "+this.knev+" és "+this.kor+" éves vagyok!";
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------
function cEmber(vnev, knev, kor) {
    this.vnev = vnev;
    this.knev = knev;
    this.kor = kor
    
    this.bemutatkozas = function(){
        return`A nevem ${this.vnev} ${this.knev} és a korom ${this.kor}!`;
    }
}
//----------------------------------------------------------------------------------------------------------------------
function CreateEmber(vnev, knev, kor) {
    this.vnev = vnev;
    this.knev = knev;
    this.kor = kor
}

CreateEmber.prototype.bemutatkozas =function(){
    return`A nevem ${this.vnev} ${this.knev} és a korom ${this.kor}!`;

};

var createember1 = new CreateEmber("Horvath", "Aranka", 28);
//console.log(createember1.bemutatkozas());
document.getElementById("content").innerHTML = ember.bemutatkozas();

var cEmber2 = new cEmber("Izsak", "Daniel", 38);
//console.log(cEmber2.bemutatkozas());
//----------------------------------------------------------------------------------------------------------------------

class Ember{
    constructor(vnev, knev, kor){
        this.vnev = vnev;
        this.knev = knev;
        this.kor = kor
    }
    bemutatkozas(){
        return`A nevem ${this.vnev} ${this.knev} és a korom ${this.kor}!`;
    }
}
var ember2 = new Ember("Hegyi", "Marton", 25);
//console.log(ember2.bemutatkozas());

var ember3 = new Ember ("Kovacs", "Livia", 27);
//console.log(ember3.bemutatkozas());
//----------------------------------------------------------------------------------------------------------------------
class Melos extends Ember{
    berszamitas(){
        
    }
}
