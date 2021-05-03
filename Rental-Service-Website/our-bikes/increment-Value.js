// Set the varibale x too a value of 0, when no function applyed the Element with the Id will show up on the website with a value of 0
// Varible y is set too 0, initiating the cost of a product is 0 if the quantity is 0, but if it goes too 1 then the value will show appropriate too the quantity of 1
// The same function or rule applies for subtotal and of course tax which will add 20% automatically too the price
var x = 0;
var y = 0;
var z = 0;

document.getElementById('output-area').innerHTML = x;
document.getElementById('cost-bike').innerHTML = y;
document.getElementById('total-cost').innerHTML = y;
document.getElementById('subtotals').innerHTML = y;
document.getElementById('tax-total').innerHTML = z;

// We make a function and give it a name button1, inside the function we are going too increment the value of the Id output-area when the button with the function button1 is clicked
function button1() {
    document.getElementById('output-area').innerHTML = x + 1;

    document.getElementById('cost-bike').innerHTML = y + 299.99;
    document.getElementById('total-cost').innerHTML = y + 299.99;
    document.getElementById('subtotals').innerHTML = y + 299.99;
    document.getElementById('tax-total').innerHTML = z + 359.99;
}   

// We make a function and give it a name button2, inside the function we are going too decrement the value of the Id output-area when the button with the function button2 is clicked
function button2() {
    document.getElementById('output-area').innerHTML = x - 0;
    
    document.getElementById('cost-bike').innerHTML = 299.99 - 299.99;
    document.getElementById('total-cost').innerHTML = 299.99 - 299.99;
    document.getElementById('subtotals').innerHTML = 299.99 - 299.99;
    document.getElementById('tax-total').innerHTML = 359.99 - 359.99;
}
