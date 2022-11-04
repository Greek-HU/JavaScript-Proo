console.log("űrlap");
$s = s => document.querySelector(s);
$c = c => document.createElement(c);
class List{
    constructor(){
        Object.assign(this, {
            elemek: ["liszt"]
        });
    }
    
    hozzáad(ujElem){
        var ujElem = $s(`input[name="listaelem"]`).value.trim();
        var text = document.createTextNode(ujElem);
        var div = $c("<div>");

        div.appendChild(text);
        this.elemek;
            this.elemek.push(ujElem);
            
            
        return this.elemek;        
       }
       
}