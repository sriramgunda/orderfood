// Increment selected item quantity
function incrementValue(){
    var value = parseInt(document.getElementById('one').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('one').value = value;
	changeCartText();
}

// Decrement selected item quantity
function decrementValue(){
    var value = parseInt(document.getElementById('one').value, 10);	
    value = isNaN(value) ? 0 : value;
	value--;
	if (value <= 0){
		value = 0;
		changeCartText(txt="Cart Empty");
	}
	else{
		changeCartText();
	}
    document.getElementById('one').value = value;	
}

//change cart label
function changeCartText(txt="Cart Value"){
	document.getElementById('cart-text').innerHTML = txt;
	if (txt === "Cart Value"){
		document.getElementById("empty-cart-id").style.display = "none";
	}
	else{
		document.getElementById("empty-cart-id").style.display = "block";
	}
	
}