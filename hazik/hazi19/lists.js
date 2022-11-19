console.log("Listák");

document.querySelector("#loadUsers").onclick = function(){
    request("https://jsonplaceholder.typicode.com/users", function(res){
        let users = JSON.parse(res);

        let content = document.querySelector("#users");
        content.innerHTML = "";
            for(let user of users)
                content.innerHTML += userTableTPL(user);
                

        let sel = document.querySelector("#selUser");
        //document.querySelector("#selOpt")[0].value = "";
        sel.innerHTML = "";
            for(let user of users)
                sel.innerHTML += userSelectionTPL(user);
    })
}

document.querySelector("#loadPosts").onclick = function(){
    request("https://jsonplaceholder.typicode.com/posts", function(pos){
        request("https://jsonplaceholder.typicode.com/users", function(res){ 
        let users = JSON.parse(res);   
        let posts = JSON.parse(pos);
        let content = document.querySelector("#posts");
        content.innerHTML = "";
        for(let user of users)
                content.innerHTML += postsTableTPL(user);
        for(let post of posts )
            content.innerHTML += postsTableTPL(post);
        })
    })

}