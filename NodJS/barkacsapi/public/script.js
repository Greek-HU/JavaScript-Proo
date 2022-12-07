import { request } from "./js/req.mod.js";

const $s = s => document.querySelector(s);
const $sAll = s => document.querySelector(s);
const $ce = el => document.querySelector(el);

var PRODUCTS = [];
var productTPL = p => `
    <div class="product">
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
}

$s("#get-products").onclick = function(){
    request.get("/products", function(res){
        PRODUCTS = JSON.parse(res);
        renderProd(PRODUCTS);
    });
}