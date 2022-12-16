import { request } from "./js/req.mod.js";

const $s = s => document.querySelector(s);
const $sAll = sa => document.querySelector(sa);
const $ce = el => document.querySelector(el);

var PRODUCTS = [];
var productTPL = p => `
    <div class="product" id="prod-${p.id}" data-id="${p.id}" data-name="${p.name}">
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

    document.querySelectorAll('.product').forEach(productBox => {
        const product = PRODUCTS.find(p => p.id == productBox.dataset.id);
        productBox.querySelector('.cartlink').onclick = function(){
            console.log('to cart: ', product.name);
        }
        productBox.querySelector('.dellink').onclick = function(){
            console.log('edit: ', product.name);
        }
        productBox.querySelector('.editlink').onclick = function(){
            console.log('delete: 1', product.name);
        }
    });
}

$s("#get-products").onclick = function(){
    request.get("/products", function(res){
        PRODUCTS = JSON.parse(res);

        renderProd(PRODUCTS);
            });
}
