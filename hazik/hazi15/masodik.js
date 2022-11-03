console.log("űrlap");

var $s = s => document.querySelector(s);
var $c = t => document.createElement(t);

const CONTENT = $s("#content");

const UL = $c("ul");

CONTENT.appendChild(UL);

$s('#hozzaad').addEventListener("click", function(){
    
    var ujElemText = `Az ön adatai: `+$s('input[name:"name"').value.trim();
        if (ujElemText.length > 1){
            var txt = document.createTextNode(ujElemText);
            var li = $c("li");

            li.appendChild(txt);
            
            UL.appendChild(li);

            $s('input[name="name"]').value = "";
    }
    
});

