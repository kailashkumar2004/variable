var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("enter any num1--");
var num2 = readlineSync.questionInt("enter any num2--");
var num3 = readlineSync.questionInt("enter any num3--");

if (num1>num2 && num1>num3){
    console.log(num1,"num1 grater than  of them ")
}
else if (num2>num1 && num2>num3){
    console.log(num2,"num2 is grater than both of them")
}
else{
    console.log(num3,"num3 is grather than both of them")
}


