function loadcart() {
    var name = localStorage.getItem("name");
    console.log(name);
    var img = localStorage.getItem("img");
    var price = localStorage.getItem("price");
    var desc = localStorage.getItem("desc");
    console.log(desc);
    var id = localStorage.getItem("id");
    var quantity = localStorage.getItem("quantity");
    var amount = localStorage.getItem("amnt")
    var mail = localStorage.getItem("mail")
    var num = localStorage.getItem('num')
    var address = localStorage.getItem("address")
    var city = localStorage.getItem("city")
    var state = localStorage.getItem("state")
    var pin = localStorage.getItem("pin")
    var pay = localStorage.getItem("pay")
    var arr = [name, img, price, desc, id, quantity, amount, mail, num, address, city, state, pin, pay]
    display(arr);
    
}
function display(arr){
    document.getElementById("disproduct").innerHTML = `
    <div class="card" style="width: 25rem;">
  <img class="card-img-top" src="${arr[1]}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${arr[0]}</h5>
    <p class="card-text">Quantity : ${arr[5]}</p>
    <p class="card-text">Mail : ${arr[7]}</p>
    <p class="card-text">Mobile Num : ${arr[8]}</p>
    <p class="card-text">Delivery Address : ${arr[9] + ", " + arr[10] + ", " + arr[11] + ", " + arr[12] }</p>
    <p class="card-text">Amount to pay : ₹${arr[6]}</p>
    <p class="card-text">Mode of Payment : ${arr[13]}</p>
    <button type="button" class="btn btn-success" id="submitbtn" data-bs-toggle="modal" data-bs-target="#showmdl">Confirm</button>
  </div>
</div>`
}


    



window.addEventListener('load', event => {
    loadcart();

});