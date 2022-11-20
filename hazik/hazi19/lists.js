console.log("Listák");

document.querySelector("#loadUsers").onclick = function(){
    request("https://jsonplaceholder.typicode.com/users", function(res){
        let users = JSON.parse(res);
        let sel = document.querySelector("#selUser");
            sel.innerHTML = "";
                for(let user of users)
                    sel.innerHTML += userSelectionTPL(user);
    })
}

/*document.querySelector("selUser").addEventListener("change", (event) =>{
    let u = document.querySelector("#users");
    u.textContent = userTableTPL(user);
});*/
document.getElementById("selUser").addEventListener("change", (event) =>{
    request("https://jsonplaceholder.typicode.com/users", function(res){
        let users = JSON.parse(res);
        

        let content = document.querySelector("#users");
        content.innerHTML = "";
            for(let user of users)
                content.innerHTML = userTableTPL(user);console.log(res);
    })
})/**/

document.querySelector("#loadPosts").onclick = function(){
    request("https://jsonplaceholder.typicode.com/users", function(res){ 
        let users = JSON.parse(res);
            for(let user of users)
                request("https://jsonplaceholder.typicode.com/posts", function(pos){
                        let posts = JSON.parse(pos);
                        let content = document.querySelector("#posts");
                        content.innerHTML = "";
                        for(let post of posts )                
                        
                            content.innerHTML += postsTableTPL(post);
                })
    })
}