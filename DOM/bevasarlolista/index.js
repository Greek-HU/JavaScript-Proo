console.log("Lista");

var $s = s => document.querySelector(s);
var $c = t => document.createElement(t);

const CONTENT = $s("#content");

const UL = $c("ul");

CONTENT.appendChild(UL);

$s("#hozzaad").addEventListener("click", function(){
    var ujElemText = $s('input[name="listaelem"]').value.trim();
        if (ujElemText.length > 1){
            var txt = document.createTextNode(ujElemText);
            var li = $c("li");

            li.appendChild(txt);
            li.onclick = function(){
                li.remove();
                console.log(this.innerText);
            }

            UL.appendChild(li);

            $s('input[name="listaelem"]').value = "";
    }
})