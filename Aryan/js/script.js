// Get existing cart or create empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ADD PRODUCT TO CART
function addCart(product, price) {

    cart.push({
        name: product,
        price: price
    });


    localStorage.setItem("cart", JSON.stringify(cart));


    alert(product + " added to cart 🛒");

}



// DISPLAY CART ITEMS
function showCart() {


    let cartItems = document.getElementById("cartItems");

    let total = 0;


    if(cartItems){

        cartItems.innerHTML = "";


        cart.forEach(function(item, index){


            let li = document.createElement("li");


            li.innerHTML = `

            ${item.name} - ₹${item.price}

            <button onclick="removeItem(${index})">
            Remove
            </button>

            `;


            cartItems.appendChild(li);


            total = total + item.price;


        });



        document.getElementById("total").innerHTML =
        "Total Amount: ₹" + total;


    }

}



// REMOVE ITEM FROM CART
function removeItem(index){


    cart.splice(index,1);


    localStorage.setItem("cart",JSON.stringify(cart));


    showCart();


}



// GO TO PAYMENT PAGE
function payment(){


    if(cart.length === 0){

        alert("Your cart is empty 🛒");

    }

    else{

        window.location.href = "payment.html";

    }


}



// CLEAR CART AFTER ORDER
function clearCart(){

    localStorage.removeItem("cart");

    cart=[];

}