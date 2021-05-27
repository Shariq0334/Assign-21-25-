// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var name = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name")
// var fullName = name + " " + lastName

// console.log(fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var input = prompt("Enter your favourite Mobile phone model");

// var lenght = input.length;

// console.log(input)
// console.log(`The lenght of input is ${lenght}`)

// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

//  var text = "Pakistani";
//     console.log(text.indexOf("n"))

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser

// var text = "Hello World"
// console.log(text.lastIndexOf("l"))

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var text = "Pakistani"
// console.log(text[3])

// 6. Repeat Q1 using string concat() method.

// var name = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name")
// console.log(name + " " + lastName);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var city = "Hyderabad";
// var text = city.indexOf("Hyder");
// if (text !== -1) {
//  city = city.slice(0, text) + "Islam" + city.slice(text + 5);
//  console.log(city)
    
// }  

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;


//  var message = "Ali and Sami are best friends. They play cricket and football together.";

// var newMessage = message.replace(/and/g,"&")
// console.log(newMessage)

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// var string = "474"
// var convert = +string
// console.log(typeof(convert))


// 10. Write a program that takes user input. Convert and 
// show the input in capital letters

// var input = prompt("Enter any value to convert in capital case")
// var convert = input.toUpperCase();
// console.log(convert)


// 11. Write a program that takes user input. Convert and 
// show the input in title case.

// var input = prompt("Enter any value to convert in capital case")
// var convert = input[0].toUpperCase();
//  console.log(convert += input);


// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

// var num = 35.36;
// var newNum = num.toString()
// console.log(newNum.replace(".",""))

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var input = prompt("Enter The Input")
// if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64){

// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:

// var array = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var search = prompt("Enter value to search in Array")
// var matchFound = false

// for (i = 0 ; i < array.length ; i++){
//     if (search.toLowerCase() === array[i] ){
//         matchFound = true
//     }
// }
// if (matchFound === true){
//     console.log("Congrats Your item found")
// }else {
//     console("Not found")
// }


// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// var myInput = prompt("Enter Password")
// var lowerCaseLetters = /[a-z]/g;
// var upperCaseLetters = /[A-Z]/g;
// var numbers = /[0-9]/g;
// if(myInput.valueOf){
// console.log(inputPassword)

// }


// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser

// var word = "University of Karachi";
// console.log(word.split(''))

// Write a program to display the last character of a user 
// input.

// var input = prompt("Enter a value")
// var res = input.charAt(input.length-1)
// console.log(res)

var text = "The quick brown fox jumps over the lazy dog";
text = text.toLowerCase();
var textLen = text.length;
var searchFor = "the";
var indexOfSearch = text.indexOf(searchFor);
var counter = 0;

for (var i = 0; i < textLen; i++) {
if (text.indexOf(text.charAt(i)) === indexOfSearch) {
counter++
}
}

console.log(counter);