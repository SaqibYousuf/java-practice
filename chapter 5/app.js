// === Assignment 5 
// Task 1 ===

var number1 = 7;
var number2 = 5;
var sum = a+b;

document.write("the sum of " + number1 + " and " + number2 + " is " + sum +"<br>")

// task 2


var number1 = prompt("enter your first number")
var number2 = prompt("enter your second number")
document.write("Sum of " + number1 + " and " +number2 + " is " +  ((+number1)+(+number2)) )

var number1 = prompt("enter your first number")
var number2 = prompt("enter your second number")
document.write("<br> Subtraction of " + number1 + " and " +number2 + " is " +  (number1-number2) )

var number1 = prompt("enter your first number")
var number2 = prompt("enter your second number")
document.write("<br> MUltiplication of " + number1 + " and " +number2 + " is " +  (number1*number2) ) 

var number1 = prompt("enter your first number")
var number2 = prompt("enter your second number")
document.write("<br> division of " + number1 + " by " +number2 + " is " +  (number1/number2) ) 

// task 3
var number1 = "";
document.write("value after variable declaration is " + number1 +"<br>")
number1 = 5;
document.write("initial value: "+number1 + "<br>" )

var number1 = ++number1;
document.write("after increment "+number1 + "<br>" )

var number2 = 7;
var number3 = number1 + number2;
document.write("value after addition is:" + number3 + "<br>")

var number3 = --number3;
document.write("value after decrement is:" + number3+ "<br>" )

var number4 = number3%3;
document.write("remainder is:" + number4 +"<br> <br>")

// Task 4

var Price = 600;
var Qty = 5;
var totalprice = Price*Qty;
document.write("total cost to buy " + Quantity + " tickets to a movie is " + totalprice +"PKR"+ "<br> <br>" )

// Task 5 

var number_table = 4;
document.write(number_table + "x" + "1" + "= " + number_table*1 + "<br>" )
document.write(number_table + "x" + "2" + "= " + number_table*2 + "<br>" )
document.write(number_table + "x" + "3" + "= " + number_table*3 + "<br>" )
document.write(number_table + "x" + "4" + "= " + number_table*4 + "<br>" )
document.write(number_table + "x" + "5" + "= " + number_table*5 + "<br>" )
document.write(number_table + "x" + "6" + "= " + number_table*6 + "<br>" )
document.write(number_table + "x" + "7" + "= " + number_table*7 + "<br>" )
document.write(number_table + "x" + "8" + "= " + number_table*8 + "<br>" )
document.write(number_table + "x" + "9" + "= " + number_table*9 + "<br>" )
document.write(number_table + "x" + "10" + "= " + number_table*10 + "<br> <br>" )

// Task 6

var cel = 25;
var intoFarh =  (cel*9/5) + 32;
document.write(cel +"°C is " +  intoFarh + "°F" + "<br>")
var ferh = 70;
var intoCel = (ferh-32) * 5/9;
document.write(ferh +"°F is " +  intoCel + "°C" + "<br> <br>")

// Task 7

document.write("<h1> Shopping Cart</h1>")
var price1 = 650;
var qty1 = 3;
var price2 = 100;
var qty2 = 7;
var shipCharge = 100;
var ttlCost =  (price1 * qty1) + (price2 * qty2);
document.write("Price of item 1 is " + price1 +"<br>")
document.write("Quantity of item 1 is " + qty1+"<br>")
document.write("Price of item 2 is " + price2+"<br>") 
document.write("Quantity of item 2 is " + qty2+"<br> <br>")
document.write("total cost of your order is " + ttlCost+"<br> <br>")

// Task 8
var ttlMarks = 980;
var obt_Marks = 804;
var percentage = (obt_Marks/ttlMarks) * 100;
document.write("total marks:" + ttlMarks + "<br>")
document.write("marks obtain:" + obt_Marks + "<br>")
document.write("percentage:" + percentage + "<br>")