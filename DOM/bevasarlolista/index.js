console.log("Lista");

var $s = s => document.querySelector(s);
var $c = c => document.createElement(c);

const CONTENT = $s("#content");

const UL = $c("ul");

CONTENT.appendChild(UL);

//$s('#hozzaad').addEventListener("click", function())

$s('input[name="listaelem"]').addEventListener("keypress", function(event){
    //console.dir(event);
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
/*  htmlElement.classList.add(className) - Hozzá adja a htmlElementhez a ClassName css definíciót
                .classList.remove(className) - Kitörli a htmlElementhez a ClassName css definíciót
                .classList.replace(mi, mire) 
                .classList.toogle(className) - Ha hozzá van adva className az Elementhez akkor törli, ha nincs akkor hozzáadja*/
                if (event.ctrlKey)
                    this.classList.toggle("kijelolt");
                else
                    this.classList.toggle("athuzva");
            }
//15.alkalom 18.10!!!! get és set atribute

            UL.appendChild(li);

            $s('input[name="listaelem"]').value = "";
    }
}

$s("#hozzaad").addEventListener("click", createListElement);

$s("#torles").onclick = function(){
    UL.querySelectorAll(".kijelolt").forEach(li => li.remove());
//document.querySelectorAll("ul li.kijelolt").forEach(function(li){
//  UL.removeChild(li);
//} );

}