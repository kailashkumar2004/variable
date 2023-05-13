// var readlineSync=require("readline-sync");
// var num=readlineSync.questionInt("enter the num=");
// var i=2
// count=0
// while (i<=num){
//     if (num%i==0){
//         count=count+1
//     }
//     i=i+1

// }
// console.log("count---",count)
// if (count==1){
//     console.log(num,"it is prime num")
// }
// else{
//     console.log(num,"it is not prime num")
// }

var rlSync =require('readline-sync')
var number =rlSync.questionInt('enter the number----')
var i=2
count=0
while(i<=number){
    if(number%i==0){
        count=count+1
    }
    i=i+1
}
console.log('count---',count)
if(count==1){
    console.log("number is a prime")
}
else{
    console.log('number is not prime')
}
