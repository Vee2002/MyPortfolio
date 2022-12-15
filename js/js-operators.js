//Arithmetic operators
function modulusCalculator(num1,num2){
    return num1 % num2;
}
//Comparison operators
function greaterThanCalculator(num1,num2){
    return num1 > num2;
}

function comparisonEquivalence(stringA,stringB){
    return stringA == stringB;
}
function isEvenNumber(x){
    var modulusX = x % 2;
    var isEven = false;

    if(modulusX === 0){
        isEven = true;
    }
    return isEven;
}

//Logical operators
//and
function authenticateUser(username,password){
    var defaultUsername = "delivce"
    var defaultPassword = "my_password134";
    var lowerusername = username.toLowerCase();


    if(lowerusername === defaultUsername && password === defaultPassword){
        alert("Your credentials have been validated")
    }
    else{
        alert("Incorrect username or password");
    }
}

function orderFood(food){
    return food === "ugali" || food === "fish" ? "Food is available" : "Food is unavailable";
    
}

function negateStatement(statementValue){
    var negatedValue = !statementValue;
    var negatedValue;
}

//Assignment operators

function incrementByN(originalValue, incrementValue){
    originalValue /= incrementValue;
    return originalValue;
}

//Ternary operator
//TODO: In my notes
function checkTruth(definedStatement){
   return definedStatement ? "This statement is true." : "This statement is false";
}

//JavaScript Maps


let studentDetailsObj = {
    name: "Vivian",
    age: 18,
    course: "Bachelor of commerce"
}

let studentDetailsObj2 = {
    name: "Fidel",
    age: 24,
    course: "Diplomacy"
} 
let studentDetails3 = new Map();
studentDetails3.set("name", "Del");  //
studentDetails3.set("age", "23");
studentDetails3.set("proffesion", "Developer");

let studentDetailsObj3 = {
    name: "Del",
    age: 23,
    course: "Computer Science"
}
console.log(studentDetailsObj3.age)
let students = new Map();
students.set(1,studentDetailsObj);
students.set(2,studentDetailsObj2);
students.set(3,studentDetailsObj3);

var student = students.get(2);
alert(student.name);

var student = students.get(3)
alert(student.age)

let fruits = new Map();
fruits.set("name", "Orange");
fruits.set("color", "orange");
fruits.set("price",20);


 alert(fruits.get("price"));

// alert(orderFood("ugali","fish"))

// let fruits1 = {
//     name: "Orange",
//     color: "Orange",
//     price: 20,
// }



// alert(orderFood("rice","beans"))
// alert(student.get("profession"))
// alert(checkTruth(10>90)) // assign a variable to definedStatement
// alert(incrementByN(2,6));
// alert(comparisonEquivalence("10",10));
// alert(isEvenNumber(7));
// authenticateUser("DELIVCe", "my_password134") //calling of the function
// orderFood("chapo","kales");