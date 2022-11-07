console.log("box");
var mbox = document.querySelector("#mozgo");
var mozdul = 15;
window.addEventListener('load', () => {
    mbox.style.position = 'absolute';
    mbox.style.left = "850px"; 
    mbox.style.top = "250px";
});
window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case 'ArrowLeft': 
            mbox.style.left = parseInt(mbox.style.left) - mozdul + `px`; break; 
        case 'ArrowUp': 
            mbox.style.top = parseInt(mbox.style.top) - mozdul + `px`; break; 
        case 'ArrowRight': 
            mbox.style.left = parseInt(mbox.style.left) + mozdul + `px`; break; 
        case 'ArrowDown':
            mbox.style.top = parseInt(mbox.style.top) + mozdul + `px`; break; 
      }
 });
