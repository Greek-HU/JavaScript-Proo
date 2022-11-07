console.log("űrlap");
var $s = s => document.querySelector(s);
var $c = c => document.createElement(c);

const CONTENT = $s("#content");

const UL = $c("ul");

CONTENT.appendChild(UL);

const input = $s('input[name="listaelem"]').addEventListener("keypress", function(event){
    if (event.key == "Enter")
    item.createListElement();
});

class LIST{
    constructor(ujElemText = ["Liszt"]){
        Object.assign(this, {
            ujElemText
        });

    }
    createListElement(){
         var ujElemText = $s(`input[name='listaelem']`).value.trim();
            if (ujElemText.length > 1){
                var txt = document.createTextNode(ujElemText);
                var li = $c("li");
    
                li.appendChild(txt);
                li.onclick = function(event){
                    if (event.ctrlKey)
                        this.classList.toggle("kijelolt");
                    else
                        this.classList.toggle("athuzva");
                }
    
                UL.appendChild(li);

                $s('input[name="listaelem"]').value = "";
        }
    }
}
const item = new LIST();
$s("#hozzaad").addEventListener("click", item.createListElement);

$s("#torles").onclick = function(){
    UL.querySelectorAll(".kijelolt").forEach(li => li.remove());

}



