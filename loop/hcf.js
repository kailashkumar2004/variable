// var readline =require('readline-sync')
// var num=readline.questionInt('enter num---')
// var num1=readline.questionInt('enter num1----')
// var i=1
// var hcf=0
// while(i>0){
//     if(num%i==0 && num1%i==0){ 
//         hcf=i
//         break
//     }
   
//      i=i+1   
// }
// console.log(hcf)



const readline =require('readline-sync')
const number1 = readline.questionInt('Enter a first integer: ');
const number2 = readline.questionInt('Enter a second integer: ');
    var i=5
    let hcf;
    while(i<=number1 && i <= number2){
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
    i=i+1
}
console.log(hcf)