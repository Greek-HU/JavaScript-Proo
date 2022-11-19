document.querySelector("#load").onclick = function(){
    request("https://jsonplaceholder.typicode.com/users", function(res){
        let users = JSON.parse(res);
        let list = document.querySelector("#content");
        for (let i = 0; i < users.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = users[i]["name"];
            list.appendChild(li);
        }
    })
}