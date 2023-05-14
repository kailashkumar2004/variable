//  var readline =require('readline-sync')
// var num =readline.questionInt('enter num--:')
// var i=0
// do{
//     if(i%2==0){
//         console.log(i,'even')
//     }
//     else{
//         console.log(i,'odd')
//     }
//     i=i+1
// }
// while(i<=num)


// var readline =require('readline-sync')
// var num =readline.questionInt('enter num--:')
// var i=0
// for(i<=num; i++;){
//     if(i%2==0){
//     console.log(i,"even")
// }
// else{
//     console.log(i,"odd")
// }
// }


// let i=1
// for(i=1; i<=50;  i++){
//     if(i%2==0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }

// var even_count=0
// var odd_count=0
// for(var i=1; i<=50; i++){
//     if(i%2==0){
//         even_count=even_count+1
//     }
//     else {
//         odd_count=odd_count+1
//     }
// }
// console.log('even_count=====',even_count)
// console.log('odd_count=====',odd_count)




//       var readlineaSync =require("readline-sync")
// var num =readlineaSync.questionInt("enter the num====")
// var num1 =readlineaSync.questionInt("enter the num1====")
// while(num<num1){
//     if(num<=0 && num%2!=0){
//         oddNumber=oddNumber+num;
//     }
//     else if(num%2==0){
//         evenNumber=evenNumber+num;
//     }
//     num=num++;
// }
// console.log("total sum of the odd number is",oddNumber);
// console.log("total sum of the even number is",evenNumber);




// var readline =require('readline-sync')
// var num =readline.questionInt("enter the num===")
// var i=1
// while(i<=num){
//     if(i%2==0){
//         console.log("even hai")
//         num=num+i
//     }
//     else if(i%2!=0){
//         console.log("odd hai")

//     }
//     i=i+1
// }
// console.log("total sum of even number")
// console.log("total sum of odd number")




// let evenSum = 0;
// let oddSum = 0;
// var readline =require("readline-sync")
// let number =readline.questionInt ("Enter a number====");
// var evenSum=0
// var oddSum=0
// var i=0

// while (i<=number) {
//   if (i % 2 == 0) {
//     evenSum=evenSum+i
//   } else {
//     oddSum=oddSum+i

//   }
//   i++
// }
// console.log("Sum of even numbers:", evenSum);
// // console.log(2+4+6+8+10)
// console.log("Sum of odd numbers:", oddSum);

// var num=true
//     var num2;

// if (num) {
//     var num1 = 10;
//     let num2;
//     // const num2;
//     num2 = num1;
//     console.log(num2)
// }else{
//     console.log("ffffffffffff")
// }


// var x = 2;
// var y = "2";
// console.log(6<=6)  // Returns true since the value of both x and y is the same
// console.log(x === y)


// var i=1
// while(i<=20){
//     if(i%2==0){
//         console.log("even hai")
//     }
//     else{
//         console.log("odd hai")
//     }
//     i=i+1
// }

// var rlSync =require("readline-sync")
// var num =rlSync.questionInt("enter any num=====")
// var i=1
// while(i<=num){
//     if(i%2==0){
//         console.log(i,"even number")
//     }
//     else{
//         console.log(i,"odd number")
//     }
//     i=i+1
// }


// OddNumber =0;
// evenNumber =0;
// number =1;
// while(number<=20){
//     if(number%2!=0){
//         OddNumber=OddNumber+number
//     }
//     else{
//         evenNumber=evenNumber+number
//     }
//     number=number++
// }
// console.log("total of oddnumber")
// console.log("total of evennumber")

// var rlSync =require("readline-sync")
// var num =rlSync.questionInt("enter any num====")
// var evenSum =0;
// var oddSum =0;
// var i=1
// while(i<=num){
//     if(i%2==0){
//         console.log(i,"even")
//         sum=sum+i
//     }
//     else if(i%2!=0){
//         console.log(i,"odd")
//         odd=odd+i
//     }
//     i=i+1
// }


// var readline =require("readline-sync")
// var num =readline.questionInt("enter any num===")
// var i=2
// count =0
// while(i<=num){
//     if(num%i==0){
//         count=count+1
//     }
//     i=i+1
// }
// console.log("count-----",count)
// if(count==1){
//     console.log("it is a prime number")
// }
// else{
//     console.log("it is a not prime number")
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter any num====")
// fact =1
// while(num>0){
//     fact=fact*num
//     num=num-1
// }
// console.log("fact")

// var readline =require("readline-sync")
// var num =readline.questionInt("enter any num====")
// var i=0
// while(i<=num){
//     var num1=readline.questionInt("enter any num1===")
//     if(num>i){
//         console.log(num1,"postive number")
//     }
//     else{
//         console.log(num1,"neagtive number")
//     }
//     i=i+1
// }

var rlSync =require("readline-sync")
var num =rlSync.questionInt("enter any num===")
var i=0
var sum=0
while(i<num){
    if(num%i==0){
        sum=sum+i
    }
    i=i+1
}
if(sum==num){
    console.log(sum,"it is a perfect number")
}
else{
    console.log(sum,"it is not perfect number")
}
