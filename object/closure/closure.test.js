// var outfunction=(a)=>{
//     var b=10;
//     var innerfunction=()=>{
//         var sum=a+b;
//         console.log("total of sum",sum)
//     }
//     innerfunction()
// }
// outfunction(5)

// var num=90
// var outfunction=(num1)=>{
//     var num2=20
//     var innerfunction=()=>{
//         var sum=num1+num2+num;
//         console.log("total of sum",sum)
//     }
//     return innerfunction
// }
// var innerfunction=outfunction(10);
// console.dir(innerfunction);
// innerfunction();

// var namefun=(num)=>{
//     var num1=90;
//     var innerfunction=()=>{
//         var num2=90;
//         var num3=50;
//         var sum=num+num1+num2+num3
//         console.log("total of sum",sum)
//     }
//     return innerfunction
// }
// var innerfunction=namefun(10)
// console.dir(innerfunction);
// innerfunction();

// function number(){
//     var readline=require("readline-sync")
//     var num =readline.questionInt("enter the any num==========")
//     var num1 =readline.questionInt("enter the any num1===========")
//     function name(){
//         var num2=readline.questionInt("enter the any num2=====")
//         var sum=num+num1+num2
//         console.log("total of sum",sum) 
//     }
//     return name
// }
// var name = number();
//   console.dir(name);
//  name();


// function number() {
//     var readline = require("readline-sync");
//     var num = readline.questionInt("Enter any number: ");
//     var num1 = readline.questionInt("Enter any number1: ");
  
//     function name() {
//       var num2 = readline.questionInt("Enter any number2: ");
//       var sum = num + num1 + num2;
//       console.log("Total sum:", sum);
//     }
  
//     return name;
//   }
  
//   var closureFunc = number();
//   console.dir(closureFunc);
//   closureFunc();


function aad(){
    let a=20;
    function b(){
        let c=30;
        console.log(a+c)
    }
    return b
}
const main=aad()
console.log(main())