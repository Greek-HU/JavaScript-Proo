class LIST{
    constructor(ujElemText = ["Liszt"]){
        Object.assign(this, {
            ujElemText
        });    

    }
    createListElement(){
        this.ujElemText.push($s(`input[name='listaelem']`).value.trim()); 
            if (ujElemText.length > 1){
                var txt = document.createTextNode(item.ujElemText);
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
var $s = s => document.querySelector(s);

$s("#hozzaad").addEventListener("click", item.createListElement());
