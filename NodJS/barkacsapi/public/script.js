import { request } from "./js/req.mod.js";

const $s = s => document.querySelector(s);
const $sAll = sa => document.querySelectorAll(sa);
const $ce = el => document.querySelector(el);

window.PRODUCTS = [];
window.CART = [];

window.inCart = false; 
// A kosárnézet. Ha true akkor a kosárban vagyunk, ha false akkor a termékek listában.
window.editedId = null;
var productTPL = p => `
    <div class="product" data-id="${p.id}" data-name="${p.name}">
        <div class="inner-ct">
            <div class="pimage">
                <img src="${p.img || "img/noimage.jpg"}">
            </div>
            <div class="pname">${p.name}</div>
            <div class="price">${p.price}</div>
        </div>
        <div class="pfooter">
            <div class="cartlink">&#128722</div>
            <div class="dellink">X</div>
            <div class="editlink">&#9998</div>
        </div>
    </div>
`;
function renderProd(prodList){
    var productsCt = $s('#products');
    var productsString = "";
    for(let product of prodList)
        productsString += productTPL(product);

    productsCt.innerHTML = productsString;

    $sAll('.product').forEach(productBox => {
        const product = PRODUCTS.find(p => p.id == productBox.dataset.id);
        productBox.querySelector(".cartlink").onclick = function(){
            CART.push(product);
            $s("#cart > span:nth-child(1)").innerText = CART.length;
        }
        productBox.querySelector('.editlink').onclick = function(){
            let highlighted = $s(".product.highlight");
            if(highlighted)
                highlighted.classList.remove("highlight");

            productBox.classList.add("highlight");
            $s("#name").value = product.name;
            $s("#price").value = product.price;

            editedId = product.id;
        }
        productBox.querySelector(".dellink").onclick = function(){
            //console.log("delete: ", product.name);
            if(!inCart){
                if(confirm("Biztos, hogy ki szeretné törölni a "+product.name+"-t?"))
                    request.delete(`product/${product.id}`, function(res){
                    //let resData = JSON.parse(res);
                    $s("#get-products").onclick();
                    });
            }
             else if (inCart){
                var deletedIndex = CART.findIndex(p => p.id == product.id);
                CART.splice(deletedIndex, 1);
                $s("#cart > span:nth-child(1)").innerText = CART.length;
                renderProd(CART);
            }
        }
    });
}

$s("#get-products").onclick = function(){
    request.get("/products", function(res){
        PRODUCTS = JSON.parse(res);

        renderProd(PRODUCTS);
        inCart = false;
            });
}
$s("#cart").onclick = function(){
    renderProd(CART);
    inCart = true;
}
$s("#newproduct").onclick = function(){

    let name = $s("#name").value.trim();
    let price = parseInt( $s("#price").value.trim() );

    if (name !== "" && price > 0)

        request.post(
            editedId != null ? "/editproduct" : "/product",
            {
                name,
                price,
                id: editedId
            },
            function(res){
            $s("#get-products").onclick();
            $s("#name").value = "";
            $s("#price").value = "";

        });

    else
        alert("Minden mezot kotelezo kitolteni!");

}