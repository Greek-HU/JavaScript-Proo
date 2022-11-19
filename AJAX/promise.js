var p = new Promise(function(resolve, reject) {
    let x = 10;
    if(x==10)
        resolve("Sikerült");
        else reject("nem sikerült");
})
    .then(res => console.log(res))
    .catch(res => console.log(res));

function requestp(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange =function(){
            if (xhr.readyState == 4 && this.status == 200)
                resolve(xhr.responseText);
            else if (this.status >= 300)
                reject("Hiba");
        }
        xhr.open("GET", url);
        xhr.send();
    });
}
//*
requestp("https://jsonplaceholder.typicode.com/users")
.then(function(res){
    var users = JSON.parse(res);

    console.log(users);
}).catch(function(res){
    console.log(res);
})
/*/
/*
fetch("https://jsonplaceholder.typicode.com/users")
.then(function(res){

    return res.json();
}).then(function(res){
    console.log(res);
})
*/