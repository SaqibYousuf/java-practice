// task 1
var city= prompt("Write your City name: ")
if (city=== "karachi") {
    alert("Welcome To City Of Lights")
}

// task 2 
var gender= prompt("Enter Your Gender: ")
if (gender=== "male" ) {
    alert(" Good Morning Sir")
} else if (gender=== "female") {
    alert(" Good Morning Ma'am")
}else {
    alert("Good Morning")
}

// task 3
var signal=prompt("Enter Signal Color")
if (signal=== "red") {
    alert("Must Stop")
} else if(signal=== "yellow") {
    alert("Ready to Move")
} else if(signal=== "green"){
    alert("Now Move")
}

// task 4 
var fuel= prompt("Enter your fuel in litre")
if (fuel <= "0.25" ) {
    alert("Please refill the fuel in your car")
}

// task 5
//  a
var a= 4; 
if (++a=== 5){ 
    alert("given condition for variable a is true");
 }

// b
var b= 82;
 if (b++=== 83)
 {
      alert("given condition for variable b is true");
 }

// c
var c= 12; 
if (c++=== 13){ 
    alert("condition 1 is true"); 
} 
if (c=== 13){ 
    alert("condition 2 is true"); 
} 
if (++c < 14){
     alert("condition 3 is true"); 
} 
if(c=== 14) {
     alert("condition 4 is true"); 
}

// d
var materialCost= 20000; 
var laborCost= 2000;
var totalCost= materialCost + laborCost; 
if (totalCost=== laborCost + materialCost){
     alert("The cost equals"); 
}

// e
if (true){
     alert("True"); 
    } if (false){
         alert("False"); 
        }

// f
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
} 

// task 6
var Maths= prompt("Please Enter Your Obtained Marks In Maths: ");
var Physics= prompt("Please Enter Your Obtained Marks In Physics: ");
var Chemistry= prompt("Please Enter Your Obtained Marks In Chemistry: ");    
var Obtained_marks= (+Maths) + (+Physics) + (+Chemistry);
var total_marks= 300;
var percetage= (Obtained_marks / total_marks) * 100 ;

document.write("<h1> Marks Sheet </h1>")
document.write("<br> Total Marks: " + total_marks)
document.write("<br> Obtained Marks: " + Obtained_marks)
document.write("<br> Percentage: " + percetage)
if (percetage <= "100" && percetage >= "80" ) {
    document.write("<br> Grade: A+")
    document.write("<br> Remarks: Weldone")
}else if (percetage < "80" && percetage >= "70") {
    document.write("<br> Grade: A")
    document.write("<br> Remark: Good")
} else if (percetage < "70" && percetage >= "60") {
    document.write("<br> Grade: B")
    document.write("<br> Remakrs: You Need More Practice")
} else if (percetage < "60" && percetage >= "50") {
    document.write ("<br> Grade: C")
    document.write("<br> Remakrs: You Need More Practice")
} else if ( percetage < "50" && percetage >= "40") {
    document.write("<br> Grade: D ")
    document.write("<br> Remakrs: You Need More Practice") 
} else if (percetage < "40" && percetage >= "33") {
    document.write("<br> Grade: E")
    document.write("<br> Remakrs: You Need More Practice")
} else if (percetage < "33") {
    document.write("<br> Grade: F <br> Failed")
    document.write("<br> Remakrs: You Need More Practice")
}

// task 9
var number = prompt("Enter your number");
if (number % 2 === 0 ) {
    alert("number is even")
} else{
    alert("number is odd")
}

// task 10
var temperature = prompt("Enter Temperature of your city")
if (temperature > 40){
    alert( "It is too hot outside." )
} else if (temperature > 30){
    alert("Today's Weather is Normal")
} else if (temperature > 20) {
    alert("Today's Weather is cool")
} else {
    alert("Today's Weather is so cool")
}

// task 11
var first_number = prompt("Enter Your First Number");
var Operator = prompt("Enter Operator");
var Second_number = prompt("Enter Your Second Number") ;
if (Operator === "+") {
    alert((+first_number) + (+Second_number))
} else if (Operator === "-") {
    alert((+first_number) - (+Second_number))
} else if (Operator === "*") {
    alert((+first_number) * (+Second_number))
} else if (Operator === "/") {
    alert((+first_number) / (+Second_number))
} else if (Operator === "%") {
    alert((+first_number) / (+Second_number) * 100 + "%")
} else {
    alert("Operator not found")
}

