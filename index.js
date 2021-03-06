var cart = [];

function getCart(){
	return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  	let total = 0

  	for (var i = 0, l = cart.length; i < l; i++) {
    	for (var item in cart[i]) {
      	total += cart[i][item]
    	}
  	}
  	return total
}


function addToCart(item){
	var price = Math.floor(Math.random() * 100);
	cart.push({[item]: price});
	console.log(`${item} has been added to your cart.`);
	return cart;
}

function viewCart(){
	if (!cart.length){
		console.log("Your shopping cart is empty.")
	}else {
		var pairs = []
		for (var i in cart){
			var item = Object.keys(cart[i])[0]
			var price = cart[i][item]
			pairs.push(`${item} at $${price}`)
		}
		console.log(`In your cart, you have ${pairs.join(", ")}.`);
	}
}

function removeFromCart(item){
	var itemCart = []

	if (!itemCart.length){
		console.log(`That item is not in your cart.`)
	}
		for (var i = 0, l = cart.length; i < l; i++){
			if(cart[i].hasOwnProperty(item)){
				itemCart.push(item);
				cart.splice(i, 1);
			}
		}
		return cart;
	}

function placeOrder(creditCard){
	// or:
	if (typeof(creditCard) == 'undefined'){
	// if(!creditCard){
		console.log("We don't have a credit card on file for you to place your order.");
	}else{
		console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
		cart = []
	}
}
