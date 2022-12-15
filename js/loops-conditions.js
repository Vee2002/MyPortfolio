function demonstrateWhileLoop(x) {//Number of times the parameter should return{
    var i = 0;
    while (i < x){
        console.log("Fiday!!!!!");
        i++;
    }
}
function demonstrateLoop(x){
    for(let i=0; i<x; i++){
        console.log("Number "+i);
    }
}
function demonstrateForInLoop(list){
    for(var item in list){
        console.log(list[item]);
    }
}
function demonstrateOfLoop(list){
    for (var item of list){
        console.log(item);
    }
}
function demonstrateForEach(list){
    list.forEach((value, key)=>{
        console.log("Key = "+key+" Value= "+value);
    });
}

//Anonymous function example

const difference = function(x,y){
    console.log(x-y);
}
    difference(6,4);

//arrows function example
const greetings = () => {
    console.log("Hello Vivian")
}
    greetings();

    

// TODO: 1. Anonymous function in JS
//     2. arrow functions in JS
        // How to import files in javascript
        //How to import loops-conditions .js into app.js

let myArray = ["apple","samsung","oppo", "Huawei"]

let randomObjects = ["apple", "mangoes", "duster","cloth","windows"]

randomObjects.forEach((value)=>{
    value+="s";
    console.log(value);
});
    
demonstrateForEach(myArray)