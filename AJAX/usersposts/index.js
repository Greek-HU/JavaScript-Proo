function request(url, method = "GET", body = {}){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200)
                resolve(xhr.responseText);
            else if (xhr.status >= 300)
                reject("Hiba a betöltés során");
        }
        xhr.open(method, url);
        //xhr.setRequestHeader("Content-type", "application/json") Ezt hallgasd vissza 17:55
        xhr.send(JSON.stringify(body))
    });
}

const POSTS = {
    user: [],
    post: [],
    $el(o){
        o = Object.assign({
            tagName: "div",
            innerHTML: ""
        }, o);
        let el = document.createElement(o.tagName);
        for (const key in o) 
            if (el[key] != undefined)
                el[key] = o[key];

        return el;
        
    },
    $: function(sel){
        return document.querySelector(sel);
    },
    postTpl: p => `
        <div class="post">
            <div class="post-title">${p.title}</div>
            <div class="post-content">${p.body}</div>
        </div>
    `,
    renderPost(posts = [], parentEl){
        parentEl.innerHTML = "";
        for (const p of posts) {
            parentEl.appendChild(
                POSTS.$el({
                    innerHTML: POSTS.postTpl(p)
                }).firstElementChild
            );
        }
    },
    renderUsersSelect(o){
        POSTS.userSelect = POSTS.$el({
            tagName: "select",
            id: o.id
        });
        let parentEl = POSTS.$(o.parent);
        for(let user of POSTS.users)
        POSTS.userSelect.appendChild(
            POSTS.$el({
                tagName: "option",
                id: "user-"+user.id,
                value: user.id,
                innerHTML: user.name
            })
        );
        POSTS.postsCt = POSTS.$el({

        })
        let getPostsButton = POSTS.$el({
            tagName: "button",
            innerHTML: "Mutassa a bejegyzéseket"
        });

        getPostsButton.addEventListener("click", function(){
            let filteredPosts =POSTS.getPostsToSelectedUser();  //leszűri a posztokat a user alapján
            POSTS.renderPost(filteredPosts, POSTS.postsCt);
        })

        parentEl.appendChild(POSTS.userSelect);
        parentEl.appendChild(getPostsButton);
        parentEl.appendChild(POSTS.postsCt);

    },
    getPostsToSelectedUser(){
        let userId = Number(POSTS.userSelect.value);
        return POSTS.posts.filter(p => p.userId == userId);
    }
};

request("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        POSTS.users = JSON.parse(res);
        return request("https://jsonplaceholder.typicode.com/posts");
    })
    .then(res => {
        POSTS.posts = JSON.parse(res);
        POSTS.renderUsersSelect({
            parent: "#content",
            id: "users-posts"
        });
    })
    .catch(res => {
        console.log(res);
    })