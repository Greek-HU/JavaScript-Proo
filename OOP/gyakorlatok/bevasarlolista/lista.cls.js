class Lista{
    constructor(sel, title = "Lista", list = []){
        this.parentElement = document.querySelector(sel);
        this.title = title;

        this.render();
        if (list.length > 0)
            this.val = list;

    }

    build(){
        const D = document;
        const _this = this;

        this.ct = D.createElement("div");
        this.ct.classList.add("listPanel");

        this.cpanel = D.createElement("div");
        this.cpanel.classList.add("listCPanel");
        
        this.title = D.createElement("div");
        this.title.classList.add("listTitle");
        var listTitle = D.querySelector(`input[name="lT"]`).value.trim();
            this.title.innerText = listTitle;
        

        this.button = D.createElement("button");
        this.button.innerText = "+";

        this.button.addEventListener("click", function(){
            _this.#addEvent();
        });

        this.input = D.createElement("input");
        this.input.type = "text";
        
        this.input.addEventListener("keypress", function(event){
            if(event.key == "Enter")
            _this.#addEvent();
        });

        this.list = D.createElement("ul");
        this.cpanel.appendChild(this.input);
        this.cpanel.appendChild(this.button);

        this.ct.appendChild(this.title);
        this.ct.appendChild(this.cpanel);
        this.ct.appendChild(this.list);
    }
    #addEvent(){ // # "operátorral" létrehozott függvény az osztály privát függvénye lesz
        this.addToList(this.input.value.trim());
        this.input.value = "";
    }
    addToList(text, active = true){
        const D = document;
        if (text){
            const li = D.createElement("li");
            const span = D.createElement("span");
            span.innerText = text;

            li.appendChild(span);

            const del = D.createElement("span");
            del.innerText = "X";
            del.classList.add("delbutton");

            li.appendChild(del);
            if (!active)
            li.classList.add("pullout");

            li.addEventListener("click", function(){
                li.classList.toggle("pullout")
            })
                del.onclick = function(){
                    li.remove();
                }

            this.list.appendChild(li);
            return true;
        }
        return false;
    }
    render(){
        this.build();

        this.parentElement.appendChild(this.ct);
    }
    set val(list){
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            
        }
    }
    get val(){
        var t = [];
            this.list.querySelectorAll("li").forEach(li => {
                t.push({
                    text: li.firstElementChild.innerText,
                    active: li.classList.contains("pullout") ? false : true
                })
            })
            return t;
    }
}