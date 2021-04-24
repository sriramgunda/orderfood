function incrementValue()
{
    var value = parseInt(document.getElementById('one').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('one').value = value;
}
function decrementValue()
{
    var value = parseInt(document.getElementById('one').value, 10);	
    value = isNaN(value) ? 0 : value;
	value--;
	if (value < 0){
		value = 0;
	}	
    document.getElementById('one').value = value;
}