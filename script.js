// $(document).ready(function(e){

//     jsonObject.products.forEach((i)=> loadprod(i)); 

// });

// function loadprod(data){
//     var li = document.createElement('li');
//     li.innerHTML = '<div class="card m-1" style="width: 16rem;">' +
//     '<img src="' +data.image+'" class="card-img-top" alt="...">'+
//     '<div class="card-body">'+
//         '<h5 class="card-title">'+data.name+'</h5>'+
//         '<p class="card-text">'+data.desc+ '</p>'+
//         '<a href="#" class="btn btn-primary">Buy</a>'+
//         '<a href="#" class="btn btn-primary">Add To Cart</a>'+
//     '</div>'+
// '</div>';
// document.getElementById("list").appendChild(li);
// }
// "id": "1",
// "name": "BlacBerry pro 3",
// "desc": "5G (Emerald Brown, 128 GB) (8 GB RAM)",
// "image": "mobile1.png",
// "price": "15,000"
// const prod = document.querySelector(".col-10");

// function display([name, desc, img, price]){
//     let code = `<div class="card m-1" style="width: 16rem;">
//     <img src="${img}" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${name}</h5>
//         <p class="card-text">${desc}</p>
//         <p class="card-text">${price}</p>
//         <a href="#" class="btn btn-primary">Buy</a>
//         <a href="#" class="btn btn-primary">Add To Cart</a>
//     </div>
// </div>`;

// prod.innerHTML += code; 
// }



// let item1 = ["BlacBerry pro 3","5G (Emerald Brown, 128 GB) (8 GB RAM)", "mobile1.png", "15,000"];
// let item2 = ["OPPO F12", "(Waterfall Blue, 128 GB) (4 GB RAM)", "mobile3.png", "15,000"];
// let item3 = ["BlacBerry pro 3","5G (Emerald Brown, 128 GB) (8 GB RAM)", "mobile1.png", "15,000"];
// let item4 = ["OPPO F12", "(Waterfall Blue, 128 GB) (4 GB RAM)", "mobile3.png", "15,000"];
// let item5 = ["BlacBerry pro 3","5G (Emerald Brown, 128 GB) (8 GB RAM)", "mobile1.png", "15,000"];
// let item6 = ["OPPO F12", "(Waterfall Blue, 128 GB) (4 GB RAM)", "mobile3.png", "15,000"];

// display(item1);
// display(item2);
// display(item3);
// display(item4);
// display(item5);
// display(item6);
const objectMobile = [
    {
        "id": "0",
        "name": "BlacBerry pro 3",
        "desc": "5G (Emerald Brown, 128 GB) (8 GB RAM)",
        "image": "images/mobile1.png",
        "price": "15000"

    },
    {
        "id": "1",
        "name": "OPPO F12",
        "desc": "(Waterfall Blue, 128 GB) (4 GB RAM)",
        "image": "images/mobile3.png",
        "price": "15000"

    },
    {
        "id": "2",
        "name": "SAMSUNG NOTE 5",
        "desc": "(Nightsky Green, 128 GB) (4 GB RAM)",
        "image": "images/mobiler.png",
        "price": "15000"

    },
    {
        "id": "3",
        "name": "MI Note 10 pro",
        "desc": "(Nightsky Green, 64 GB) (4 GB RAM)",
        "image": "images/mobile4.png",
        "price": "15000"

    },
    {
        "id": "4",
        "name": "POCO M3",
        "desc": "F12 (Sea Green, 128 GB) (4 GB RAM)",
        "image": "images/mobile5.png",
        "price": "15000"

    },
    {
        "id": "5",
        "name": "iPHONE 10",
        "desc": "5G (Deep Ocean Blue, 128 GB) (6 GB RAM)",
        "image": "images/mobile6.png",
        "price": "15000"

    },
    {
        "id": "6",
        "name": "SAMSUNG A15",
        "desc": "(Carbon Black, 32 GB) (2 GB RAM)",
        "image": "images/mobile7.png",
        "price": "15000"

    },
    {
        "id": "7",
        "name": "OPPO A12",
        "desc": "5G (Mirage Blue, 256 GB) (8 GB RAM)",
        "image": "images/mobile8.png",
        "price": "15000"

    }
];

const objectLaptop = [
    {
        "id": "0",
        "name": "Lenovo Core i5 11th Gen",
        "desc": "(8 GB/512 GB SSD/Windows 10 Home) V14 ITL G2 Thin and Light Laptop  ",
        "image": "images/laptop1.png",
        "price": "54990"

    },
    {
        "id": "1",
        "name": "DELL Vostro Core i3 10th Gen",
        "desc": " (8 GB/512 GB SSD/Windows 11 Home)   ",
        "image": "images/laptop2.png",
        "price": "42690"

    },
    {
        "id": "2",
        "name": "Lenovo IdeaPad Slim 3i (2021)",
        "desc": " Core i3 11th Gen - (8 GB/256 GB SSD/Windows 10 Home)",
        "image": "images/laptop3.png",
        "price": "43990"

    },
    {
        "id": "3",
        "name": "DELL Inspiron Ryzen 7 ",
        "desc": "(8 GB/512 GB SSD/Windows 11 Home) Inspiron 3525 Notebook ",
        "image": "images/laptop4.png",
        "price": "62690"

    },
    {
        "id": "4",
        "name": "DELL Inspiron Ryzen 5 Quad Core",
        "desc": "(8 GB/256 GB SSD/Windows 10) Inspiron 3515 Thin and Light Laptop",
        "image": "images/laptop5.png",
        "price": "44590"

    },
    {
        "id": "5",
        "name": "Lenovo IdeaPad 3 Core i3 10th Gen",
        "desc": "(8 GB/256 GB SSD/Windows 11 Home) 15IML05 Thin and Light Laptop",
        "image": "images/laptop6.png",
        "price": "33490"

    },
    {
        "id": "6",
        "name": "ASUS VivoBook Ultra 14 Core i5 11th Gen",
        "desc": " (8 GB/512 GB SSD/Windows 10 Home) X413EA-EB513TS Thin and Light Laptop",
        "image": "images/laptop7.png",
        "price": "59990"

    },
    {
        "id": "7",
        "name": "DELL Vostro Core i3 11th Gen",
        "desc": "(8 GB/256 GB SSD/Windows 10) VOSTRO 3400 Thin and Light Laptop",
        "image": "images/laptop8.png",
        "price": "39990"

    }
];
function displayMobile() {

    document.getElementById("header").innerHTML = `
    <div>
    <h2>Mobiles</h2>
</div>`

    document.getElementById("discard").innerHTML = `
    ${objectMobile.map(function (ob) {
        return `<div class="card m-1" style="width: 16rem;">
        <img src="${ob.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${ob.name}</h5>
            <p class="card-text">${ob.desc}</p>
            <p class="card-text"><h4>₹${ob.price}/-</h4></p>
            <button type="button" class="btn btn-warning " id="${ob.id}" onclick="hidebtn(this.id)">Add to Cart</button>
            <a href="buy.html" class="btn btn-primary" id="${ob.id}" onclick="data(this.id)">See Details</a>
            
        </div>
    </div>`
    })}`
}

// function getdata(obj){
//     var ob = obj

//     console.log(objectMobile[ob]);
//     var arr  = [objectMobile[ob].name, objectMobile[ob].price, objectMobile[ob].desc, objectMobile[ob].id, objectMobile[ob].image];
//     localStorage.setItem("name",arr[0]);
//     localStorage.setItem("price",arr[1]);
//     localStorage.setItem("id",arr[3]);
//     localStorage.setItem("desc",arr[2]);
//     localStorage.setItem("img",arr[4]);
//     var ch = localStorage.getItem("desc");
//     console.log(ch);
// }



function data(ob) {
    var id = ob
    var productid = localStorage.getItem("productid")
    if (productid == "laptop") {
        console.log(objectLaptop[id]);
        var arr = [objectLaptop[id].name, objectLaptop[id].price, objectLaptop[id].desc, objectLaptop[id].id, objectLaptop[id].image];
    }
    else if (productid == "mobile") {
        console.log(objectMobile[id]);
        var arr = [objectMobile[id].name, objectMobile[id].price, objectMobile[id].desc, objectMobile[id].id, objectMobile[id].image];
    }

    localStorage.setItem("name", arr[0]);
    localStorage.setItem("price", arr[1]);
    localStorage.setItem("id", arr[3]);
    localStorage.setItem("desc", arr[2]);
    localStorage.setItem("img", arr[4]);
    // var ch = localStorage.getItem("desc");
    // console.log(ch);

    // hidebtn(id);

}
function hidebtn(ob) {
    var id = ob
    var productid = localStorage.getItem("productid")
    if (productid == "laptop") {
        console.log(objectLaptop[id]);
        var arr = [objectLaptop[id].name, objectLaptop[id].price, objectLaptop[id].desc, objectLaptop[id].id, objectLaptop[id].image];
    }
    else if (productid == "mobile") {
        console.log(objectMobile[id]);
        var arr = [objectMobile[id].name, objectMobile[id].price, objectMobile[id].desc, objectMobile[id].id, objectMobile[id].image];
    }

    localStorage.setItem("name", arr[0]);
    localStorage.setItem("price", arr[1]);
    localStorage.setItem("id", arr[3]);
    localStorage.setItem("desc", arr[2]);
    localStorage.setItem("img", arr[4]);
    var hideid = ob;
    console.log(hideid);
    document.getElementById(hideid).innerHTML = 'Added';
}

function displayLaptop() {

    document.getElementById("header").innerHTML = `
    <div>
    <h2>Laptops</h2>
</div>`
    document.getElementById("discard").innerHTML = `
    ${objectLaptop.map(function (ob) {
        return `<div class="card m-1" style="width: 16rem;">
        <img src="${ob.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${ob.name}</h5>
            <p class="card-text">${ob.desc}</p>
            <p class="card-text"><h4>₹${ob.price}/-</h4></p>
            <button type="button" class="btn btn-warning" id="${ob.id}" onclick="data(this.id)">Add to Cart</button>
            <a href="buy.html" class="btn btn-primary" id="${ob.id}" onclick="data(this.id)">See Details</a>
            
           
        </div>
    </div>`
    })}`
}



window.addEventListener('load', event => {
    var productid = localStorage.getItem("productid");
    if (productid == "laptop") {
        console.log("id retrived");
        displayLaptop();

    }
    else if (productid == "mobile") {

        displayMobile();
    }


});

