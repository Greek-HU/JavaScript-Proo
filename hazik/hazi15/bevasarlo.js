console.log("űrlap");

class List{
    constructor(){
        Object.assign(this, {
            elemek: ["liszt"]
        });
    }
    createBox(){
        //$c = c => document.createElement(c);
        const CONTENT = document.createElement("#content");

        var div = document.createElement("<div>");
        var div = this.elemek;
        return div;
    }
    gitValue(){
        var ujElem = $s(`input[name="listaelem"]`).value.trim();
        var text = document.createTextNode(ujElem);

        div.appendChild(text);
        this.elemek;
            this.elemek.push(ujElem);
            
            
        return this.elemek;        
       }
    click(){
        $s('input[name="listaelem"]').addEventListener("keypress", function(event){
            if (event.key == "Enter")
            console.log("Siker");
        });
    }
    createListElement(){
        var ujElemText = $s('input[name="listaelem"]').value.trim();
            if (ujElemText.length > 1){
                var txt = document.createTextNode(ujElemText);
                var li = $c("div");
    
                li.appendChild(txt);
    
                DIV.appendChild(li);
    
                $s('input[name="listaelem"]').value = "";
        }   
    }
}
/*const CONTENT = $s("#content");

const DIV = $c("div");

CONTENT.appendChild(DIV);

$s('input[name="listaelem"]').addEventListener("keypress", function(event){
    if (event.key == "Enter")
    createListElement();
});

function createListElement(){
    var ujElemText = $s('input[name="listaelem"]').value.trim();
        if (ujElemText.length > 1){
            var txt = document.createTextNode(ujElemText);
            var li = $c("div");

            li.appendChild(txt);

            DIV.appendChild(li);

            $s('input[name="listaelem"]').value = "";
    }
}*/



