var listak = [];
$P.qS("#new-list").onclick = function(){
    listak.push(new Lista("#content"));
}

class Suti{
    #v = [];
    constructor(){
        //this.v = "";
    }
    /** 
    * @param {string} v 
    */
    
    set val(v){
        //this.v += "; "+v;
        this.#v.push(v);
    }

    get val(){
        //return this.v;
        return this.#v.join("; ");
    }
}

var s = new Suti() ;

s.val