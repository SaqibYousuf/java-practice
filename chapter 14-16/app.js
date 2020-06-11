// task 1
var StudentsNames = [];

//task 2
var StudentsNames

// task 3
var str_arr = ['hey', 'hi']

// task 4
var number_arr = [29, 19]

//task 5
var myArr = [];
var value = 2;
for(var i = 0; i < value; i++) {
   myArr.push(false);
}

// task6
var arr = [123, 'hello', 456, 'hi']

// task 7
var education_arr = ['SSC', 'HSC' , 'BCS', 'BS', 'BCOM' , 'MS', 'M. Phill' , 'PhD']
document.write('<h1> Qualifications:  </h1> ')
document.write("<br> 1)" + education_arr[0])
document.write("<br> 2)" + education_arr[1])
document.write("<br> 3)" + education_arr[2])
document.write("<br> 4)" + education_arr[3])
document.write("<br> 5)" + education_arr[4])
document.write("<br> 6)" + education_arr[5])
document.write("<br> 7)" + education_arr[6])
document.write("<br> 8)" + education_arr[7])
document.write("<br> 9)" + education_arr[8])

// task 8
var student_names = ['Michael', 'John' , 'Tony']
var score = [320 , 230 , 480]
var total_score = 500;

document.write("score of " + student_names[0] + " is " + score[0] + ". Percentage " + ((score[0]) / total_score) * 100 + "% <br>" ) 
document.write("score of " + student_names[1] + " is " + score[1] + ". Percentage " + ((score[1]) / total_score) * 100 + "% <br>" ) 
document.write("score of " + student_names[2] + " is " + score[2] + ". Percentage " + ((score[2]) / total_score) * 100 + "% <br>" ) 

// task 9
var color_names = ['red' , 'green' , 'blue' ]
document.write(color_names)
color_names.unshift(prompt("enter the color you want to add at the begining"))
document.write("<br>" + color_names)
color_names.push(prompt("enter the color you want to add at the end"))
document.write("<br>" + color_names)
color_names.unshift('purple' , 'skyblue')
document.write("<br>" + color_names)
color_names.shift();
document.write("<br>" + color_names)
color_names.pop();
document.write("<br>" + color_names)
color_names.splice(prompt('where you want to add color'), 0 , prompt('which color you want to add'))
document.write("<br>" + color_names)
color_names.splice(0 , prompt('which color you want to delete'))
document.write("<br>" + color_names)
 
//task 10
var student_score = [320, 230, 480, 120 ]
document.write(student_score + '<br>')
document.write(student_score.sort())

// task 11
var city = ['Karachi', 'Lahore,', 'Islamabad', 'Quetta,', 'Peshawar']
document.write('<h2> Cities List </h2> <br>' + city)
var selected_city = city.slice(0 , 3)
document.write('<br> <h2> Selected Cities </h2>' + selected_city)

// task 12
var my_arr = ["This", "Is", "My", "Cat"]
var string = my_arr.join(" ");
document.write(string)
