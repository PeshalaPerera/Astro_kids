// getting div(result) to show invoice
var elem = document.getElementById("result");

// variables to store details
var name = "";
var email = "";
var shipping_address = "";
var credit_card_number = "";
var cvv = "";

//Arrays to store name & price
var product_names = [];
var product_prices = [];

function placeOrder(){
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    shipping_address = document.getElementById("address").value;
    credit_card_number = document.getElementById("cardno").value;
    cvv = document.getElementById("cvv").value;
    

    if(name.trim() == ""){
        alert("Name is invalid");
    }else if(shipping_address.trim() == ""){
        alert("Shipping address is invalid");
    } else if(credit_card_number.trim() == "" || credit_card_number.length != 12){
        alert("Credit card number is invalid");
    } else if(cvv.trim() == "" || cvv.length != 3){
        alert("CVV is invalid");
    } else if (checkEmail(email.trim())) {
        alert("Email is invalid");
    } else {
    	// showing the result on the page   	
        elem.innerHTML = `<p> Name: ${name} <br><br> 
							Email: ${email} <br><br> 
							Shipping Address: ${shipping_address} <br><br>
							Credit card details are valid <br><br>
							-----------------------------------</p>`;
		printProduct();

    }
}

//function to validate email
function checkEmail(email) {
    let pattern =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !pattern.test(email);
}

// function to store selected product name & price
function getProduct(id){
	var product_name = "";
	var product_price;
	var quantity = document.getElementById('product' + id).value;

	if (quantity == 0) {
		alert("Please enter quantity for product");
	} else {
		switch (id){
			case '1':
				product_name = "Solar System Poster";
				product_price = 10 * quantity;			
				break;
			case '2':
				product_name = "Ast Poster";
				product_price = 15 * quantity;	
				break;
			case '3':
				product_name = "Astronomy Poster";
				product_price = 20 * quantity;
				break;
			case '4':
				product_name = "Alt-Az Refactor Telescope";
				product_price = 355 * quantity;
				break;
			case '5':
				product_name = "SkyMaster Pro Binocular";
				product_price = 315 * quantity;
				break;
			case '6':
				product_name = "Solar Eclipse Sunglasses";
				product_price = 125 * quantity;
				break;
			case '7':
				product_name = "Medium Kids T shirt";
				product_price = 25 * quantity;
				break; 
			case '8':
				product_name = "Kids Astronomy Cap";
				product_price = 20 * quantity;
				break;
			case '9':
				product_name = "Solar System Bangles";
				product_price = 10 * quantity;
				break;
			default:
				product_name = null;
				product_price = null;    
		}

		product_names.push(product_name);
		product_prices.push(product_price);	
		elem.innerHTML = `<p><h3>Your Cart</h3><br><br> Product: ${product_name} <br><br> Price: ${product_price} <br><br> </p>`;
		alert("Product added to your cart");
	}
}

// function to printing the invoice
function printProduct(){
	// geeting the total price by looping through price array
	let total_price = 0;
	for (var i = 0; i < product_prices.length; i++) {
		total_price += product_prices[i];
	}

	for (var i = 0; i < product_names.length; i++) {
		elem.innerHTML += `Product: ${product_names[i]} <br>
						   Price: £${product_prices[i]} <br><br>`;
	}

	elem.innerHTML += ` <br> <h2> Total Bill: £${total_price} </h2>`
}