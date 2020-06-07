var a = 10
document.write("the value of a is " + a +"<br> <br>")

var a =  ++a 
document.write("The value  of ++a is " + a +"<br>" )
document.write("now the value of a is " + a +"<br> <br>" )

var a = a++
document.write("The value  of a++ is " + a +"<br> " )
var a =  ++a
document.write("Now the value of a is " + a +"<br> <br>" )

var a = --a
document.write("The value  of a++ is " + a +"<br> " )
document.write("Now the value  of a is " + a +"<br> <br> " )

var a = a--
document.write("The value  of a++ is " + a +"<br> " )
var a = --a
document.write("Now the value  of a is " + a +"<br> <br> " )

// question 2 
var a = 2;
document.write("a: " +a)
var b = 1; 
document.write("<br> b: " +b)
var result = --a - --b + ++b + b--;
document.write("<br> The result is: " + result )

// question 3
var name = prompt("Please enter your name: ")
document.write(" <br> Welcome to my js assignment  " + name + "<br>")

// question 5
var number = prompt("please enter your number:")

for( var i = 1; i <= 10; i++) {
    if (number != 0) {
        document.write(number + "x" + i + "=" + number*i + "<br>")

    } else {
        
            document.write("5" + "X" + i + "=" + 5*i +"<br>")
        
    }

}

// question 6 
// var subject1 = prompt("Enter The Name Of Subject:")
// var obtained_subject1 = prompt("Please Enter marks of " + subject1 )
// var subject2 = prompt("Enter The Name Of Subject:")
// var obtained_subject2 = prompt("Please Enter marks of " + subject2 )
// var subject3 = prompt("Enter The Name Of Subject:")
// var obtained_subject3 = prompt("Please Enter marks of " + subject3 )
// var total_marks = 100;
// var x = document.getElementById("myTable");

// x = sb