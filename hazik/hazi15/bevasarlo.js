console.log("űrlap");
var $s = s => document.querySelector(s);
var $c = c => document.createElement(c);

const LIST = $s('#content')
const CONTENT = $s("#content");
/*
const UL = $c("ul");

CONTENT.appendChild(UL);

const input = $s('input[name="listaelem"]').addEventListener("keypress", function(event){
    console.dir(event);
    if (event.key == "Enter")
    createListElement();
});

function createListElement(){
    var ujElemText = $s('input[name="listaelem"]').value.trim();
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

$s("#hozzaad").addEventListener("click", createListElement);

$s("#torles").onclick = function(){
    UL.querySelectorAll(".kijelolt").forEach(li => li.remove());

}*/



