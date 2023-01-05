var quantity = 1;
function loadcart() {
    var name = localStorage.getItem("name");
    console.log(name);
    var img = localStorage.getItem("img");
    var price = localStorage.getItem("price");
    var desc = localStorage.getItem("desc");
    console.log(desc);
    var id = localStorage.getItem("id");
    var quantity = localStorage.getItem("quantity");
    
    displaycart(name, img, price, desc, id, quantity);
    
}

function displaycart(name, img, price, desc, id, quantity) {
    var intamnt = parseInt(price);
    
    var calc = quantity * intamnt;
    var totalAmnt = calc + 40;
    var  amnt = formatAmnt(totalAmnt);
    console.log(amnt)
    function formatAmnt(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }
    localStorage.setItem("amnt",amnt )
    document.getElementById("discart").innerHTML = `
    <div class="card m-1" style="width: 16rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${desc}</p>
            <p class="card-text"><h4>₹${price}/-</h4></p>
        </div>
    </div>
    <div class="border2 p-2 m-2">
        <div class="border2 text-center p-2 mt-2">
            <h3>Price Details</h3>
        </div>
        <div class="row justify-content-center mt-2">

            <ul class="list-group w-100 m-5">
                <li class="list-group-item d-flex justify-content-between">
                    <div>Item's price(1)</div>
                        <div class="value">₹${price}</div>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <div>Selected Item(X${quantity})</div>
                    <div class="value">₹${calc}</div>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <div>Delivery Charge</div>
                    <div class="value">₹40</div>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <div class="value">Total</div>
                    <div class="value">₹${amnt}/-</div>
                </li>
        
            </ul>
            <a class="btn btn-primary d-flex justify-content-center mt-2" onclick="getdetail()">Next</a>

        </div>
    </div>`

}

function getdetail(event){
    // event.preventdefault();
    var mail = document.getElementById("inputEmail").value
    var num = document.getElementById("inputnumber").value
    var address = document.getElementById("inputAddress").value
    var city = document.getElementById("inputCity").value
    var state = document.getElementById("inputState").value
    var pin = document.getElementById("inputZip").value

    localStorage.setItem("mail", mail)
    localStorage.setItem("num", num)
    localStorage.setItem("address", address)
    localStorage.setItem("city", city)
    localStorage.setItem("state", state)
    localStorage.setItem("pin", pin)
    
    if(mail, num, address, city, state, pin == false){
        alert("Enter all the fields in Delivery Address.");
    }
   
    console.log(mail);
    console.log(num);
    console.log(address);
    console.log(city);
    console.log(state);
    console.log(pin);

    getpay();
}
function getpay(){
    // console.log("inside function");
    var radio = document.querySelector('input[name="exampleRadios"]:checked').value;
    localStorage.setItem("pay", radio)
    console.log(radio == null);
    if(document.querySelector('input[name="exampleRadios"]:checked')){
        alert("Select mode of payment");
    }
    else{
        window.location.href = "final.html";
    }
  
}


window.addEventListener('load', event => {
    loadcart();

});
