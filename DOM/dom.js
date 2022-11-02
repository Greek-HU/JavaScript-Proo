console.log("DOM");

var content=document.querySelector("#content");
content.innerHTML ="<p>Ez egy paragrafus szövege</p>"

var p = content.querySelector("p");     //document.querySelector("#content p");

//  htmlElement.querySelector(selector) - a querySelector nem csak a dokumentumfában,
//                                        hanem a fa belsejében levő htmlElement-ben is tud célzottan keresni.

p.style.color = "red";
p.style.backgroundColor = "pink"; //p.style.["background-color"]
p.style.padding = "5px";

const myCssClass = {
    "background-color": "rgb(71, 71, 245)",
            "color": "#fff",
            "padding": "5px"
}

 // document.creatElement(htmlTagName) -Létrhoz a memóriában amit később hozzáadaehozza a memóriában a htmlTagName-nek mmegfelelő JS htmlElementet


var span = document.createElement("span");
Object.assign(span.style, {
    "text-decoration": "underline"
    },
    myCssClass);

// creatTextNode(szoveg) -Létrehoz egy textNode-ot a memóriában, 
//                        amit később hozzáadhatunk egy htmlElement-hez
var szoveg = document.createTextNode("Ez a span tartalma");

// htmlElement.appenChild(new HtmlElement) - hozzáad egy előzőleg creatElementben létrehozott elemet
//                                           a htmlElement-hez
//                                         - mindig a végéhez adja hozzá a megadott newHtmlElement-et!
span.appendChild(szoveg);
content.appendChild(span); 

//  content.removeChild(p) - elveszi a megadott elemet

//  htmlElement.remove() - kiveszi a DOM struktúrából a htmlElement-et. De a memóriában benne marad!

//  htmlElement.replaceChild(newElement, oldElement) - lecseréli a megadott ellemet, a másodikként megadott elemre
//                                                      az oldElement-nek kötelező módon közvetlen gyereke kell legyen a htmlElement-nek
