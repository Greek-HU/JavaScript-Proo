console.log("Ajax ok");

function request(url, success){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange =function(){
        if (this.readyState == 4 && this.status == 200)
            success(this.responseText);
    }

    xhttp.open("GET", url);
    xhttp.send();
}

var userTableTPL = u => `
        <div class="row">
            <div class="col">${u.name}</div>
            <div class="col">${u.email}</div>
            <div class="col">${u.phone}</div>
        </div>
`
