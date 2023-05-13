// var rlSync=require("readline-sync");
// var num1=rlSync.questionInt("enter the first num1:=")
// var num2=rlSync.questionInt("enter the first num2:=")

// if(num1==num2){
//     console.log('num1 num2 ka equal hai')
// }
// else if(num1>num2){
//     console.log('num1 bda hai num2 se ')
// }
// else if(num1<num2){
//     console.log('num1 se num2 bada hai')
// }
// else{
//     console.log('inter the valid number')
// }



var rlSync =require('readline-sync')
var num1 =rlSync.questionInt('number is greater:-')
var num2 =rlSync.questionInt('number is lessden:-')
if(num1>num2){
    console.log('num1 grater hai')
}
else if(num2<num1){
    console.log('num2 lessden hai')
}
else{
    console.log('enter the valid number')
}