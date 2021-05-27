// var name = "gHoUs";

// console.log(name.toLowerCase())

// var cities = ['karachi','lahore','islamabad'];
// var userCity = prompt("Enter city name");

// for(var i = 0; i < cities.length; i++){
//     if(userCity.toLowerCase() === cities[i]){
//         alert("Match")
//     }
// }


// var name = "ghous ahmed";

// console.log(name[5])


// var name = "ghous ahmed";
// var lastName = name.slice(6);

// console.log(lastName)

// var text = 'The New Yorker magazine doesn t allow the phrase "World War II. " They say it shouldbe "the Second World War." So lets search the following sentence for the banned charactersand replace them with the phrase that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry andmyth, the essential notion that the good gray wizard can understand the evil magi preciselybecause he is just enough like them to grasp their minds and motives in ways that they cannotgrasp his.'

// for (var i = 0; i < text.length; i++) {
//     if("World War II" === text.slice(i, i + 12)){
//         console.log(text.slice(i, i + 12))
//     }
// }


// var text = 'The New Yorker magazine doesn t allow the phrase "World War II. " They say it shouldbe "the Second World War." So lets search the following sentence for the banned charactersand replace them with the phrase that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry andmyth, the essential notion that the good gray wizard can understand the evil magi preciselybecause he is just enough like them to grasp their minds and motives in ways that they cannotgrasp his.'

// var firstChar = text.indexOf("World War II");


// var name = "ghous";

// if(name.indexOf('z') !== -1){
//     alert("Mil gya")
// }else{
//     alert("Nahi mila")
// }


// var text = 'The New Yorker magazine doesn t allow the phrase "World War II. " They say it shouldbe "the Second World War." So lets search the following sentence for the banned charactersand replace them with the phrase that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry andmyth, the essential notion that the good gray wizard can understand the evil magi preciselybecause he is just enough like them to grasp their minds and motives in ways that they cannotgrasp his.'

// var index = text.indexOf("World War II");

// if(index !== -1){
//     console.log(text.slice(0, index))
// }


var name = "ghous ahmed shah";
var oldName = prompt("Enter old name");
var newName = prompt("Enter new name");

var index = name.indexOf(oldName);

if(index !== -1){
    name = name.slice(0,index) + newName + name.slice(index + oldName.length);
    console.log(name)
}