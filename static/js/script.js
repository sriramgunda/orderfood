// Increment selected item quantity
function incrementValue(){
    var value = parseInt(document.getElementById('one').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('one').value = value;
	changeCartText(txt="Cart Value", itemscount = value);
}

// Decrement selected item quantity
function decrementValue(){
    var value = parseInt(document.getElementById('one').value, 10);	
    value = isNaN(value) ? 0 : value;
	value--;
	if (value <= 0){
		value = 0;
		changeCartText(txt="Cart Empty", itemscount = 0);
	}
	else{
		changeCartText(txt="Cart Value", itemscount = value);
	}
    document.getElementById('one').value = value;	
}

//change cart label
function changeCartText(txt="Cart Value", itemscount = 0){
	document.getElementById('cart-text').innerHTML = txt;
	if (txt === "Cart Value"){
		document.getElementById("empty-cart-id").style.display = "none";
		document.getElementById("menu-cart-values-id").style.display = "block";
		document.getElementById("menu-cart-items-count-id").innerHTML = itemscount + " Items";
	}
	else{
		document.getElementById("empty-cart-id").style.display = "block";
		document.getElementById("menu-cart-values-id").style.display = "none";
	}
	
}