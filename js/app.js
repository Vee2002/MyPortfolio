let x = 10.5;
let y = 10;
        // alert(x + y);
let salutation = "Hello Javascript"
let isWednesday = false;
let fruits = ["Mangoes", "Oranges", "Bananas"]
let studentsMap = new Map();

function displaySum(){
    var sum = x+y;
    return sum;

}
// function displaySalutation(name){
//     alert("Hello "+name);
// }

// alert(displaySum());
// displaySalutation("Vivian");
function bakeCake(cakeType, numOfKgs, occasion){ //Parameters of the function bakeCake
    var bakeMessage = "You are a baking a "+cakeType+" cake of "+numOfKgs+"kgs, for a "+occasion+" occasion."
    return bakeMessage;
}
alert(bakeCake("Velvet",2,"birthday")); //alert displays a message.

var inputName = prompt("Enter your name")
function date(name){
    var message = "Hello "+name+" today is "+ new Date() //new Date is a class
    return message;
}
alert(date(inputName)); //argument passed to the parameter name