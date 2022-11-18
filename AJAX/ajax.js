console.log("Ajax ok");

function request(url, success){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange =function(){
        if (this.readyState == 4 && this.status == 200)
            success(this.responseText);
    }
}