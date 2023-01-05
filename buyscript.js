
function loadcart() {
    var name = localStorage.getItem("name");
    console.log(name);
    var img = localStorage.getItem("img");
    var price = localStorage.getItem("price");
    var desc = localStorage.getItem("desc");
    console.log(desc);
    var id = localStorage.getItem("id");
    displaycart(name, img, price, desc, id);

}

function displaycart(name, img, price, desc, id) {
    console.log(name);
    document.getElementById("disproduct").innerHTML = ` <div class="card" style="width: 25rem;">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
        <a href="cart.html" class="btn btn-primary d-flex justify-content-center" onclick="dis()">Buy</a>
    </div>
</div>

<div class="border2 p-2 m-2">
<h5>${name + " " + desc}</h5>
<h3>₹${price}</h3>
<div>
<button onclick="increment()">+</button>
<input id=demoInput type=number min="1" style="width: 10%">
<button onclick="decrement()">-</button>
</div>

<h3 class="border2 p-2 text-center">Highlights</h3>
<div>
    <ul>
        <li>RAM : 4GB|8GB</li>
        <li>Color : Blue|Black|Orange</li>
        <li>Storage : 64GB|128GB|256GB</li>
        <li>Display : 16.94 cm (6.67 inch)</li>
        <li>Camera : 108MP Rear Camera</li>
        <li>Battery : 5000 mAh</li>
    </ul>
</div>

</div>`


}
function increment(price) {
    document.getElementById('demoInput').stepUp();
    
}
function decrement() {
    document.getElementById('demoInput').stepDown();
    
}
function dis() {
    quantity = document.getElementById("demoInput").value;
    localStorage.setItem("quantity", quantity);
    console.log(quantity);
   
    // var calc = quantity * price;
    // console.log(calc)
}


 
window.addEventListener('load', event => {
    loadcart();

});
