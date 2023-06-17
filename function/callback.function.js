// function firstfunction(a){
//   console.log("my name is kailash")
// a()
// }
// function secoundfunction(){
//   console.log("i am from bihar")
// }
// firstfunction(secoundfunction)

const readline = require("linebyline");

// function firstfunction(name){
//   console.log("kailash")
//   name()
// }
// function secoundfunction(){
//   console.log("my self kailash")
// }
// firstfunction(secoundfunction)


// function firstfunction(number) {
//   function secoundfunction(thirdFun) {
//     var a = 20;
//     var b = 40;
//     console.log(a + b);
//     thirdFun();
//   }

//   var a = 10;
//   var b = 20;
//   console.log(a + b);
//   secoundfunction(number);
// }

// function thirdfunction() {
//   var a = 20;
//   var b = 70;
//   console.log(a + b);
// }

// firstfunction(thirdfunction);

// function firstfunction(Number){
//   var readline =require("readline-sync")
//   var num =readline.questionInt("enter the any num======")
//   var i=1
//   while(i<=num){
//     if(i%2===0){
//       console.log(i,"even")
//     }
//     else{
//       console.log(i,"odd")
//     }
//     i=i+1
//   }
//   Number(num)
// }
// function secoundfunction(num1){
//   var i=1
//   var evensum=0
//   var oddsum=0
//   while(i<=num1){
//     if(i%2===0){
//       evensum=evensum+i
//     }
//     else{
//       oddsum=oddsum+i
//     }
//     i=i+1
//   }
//   console.log("total of evensum",evensum)
//   console.log("total of oddsum",oddsum)
// }
// firstfunction(secoundfunction)



// 


// function firstfunction(number) {
//     var readline = require("readline-sync");
//     var num = readline.questionInt("Enter any number: ");
//     var i = 1;

//     while (i <= num) {
//       if (i % 2 === 0) {
//         console.log(i, "even");
//       } else {
//         console.log(i, "odd");
//       }
//       i = i + 1;
//     }

//     firstfunction(number)
//   }
//   function secondfunction(thirdfunction){
//     var readline =require("readline-sync")
//     var num1 =readline.questionInt("enter the any num1====")
//   var i=1
//   var evensum=0
//   var oddsum=0
//   while(i<=num1){
//     if(i%2==0){
//       evensum=evensum+i
//     }
//     else{
//       oddsum=oddsum+i
//     }
//     i=i+1
//   }
//   console.log("total of evensum",evensum)
//   console.log("total of oddsum",oddsum)

// }
//   function thirdfunction() {
//     var readline =require("readline-sync")
//     var num2=readline.questionInt("enter the any num2=======")
//     var i = 1;
//     var evencount = 0;
//     var oddcount = 0;

//     while (i <= num2) {
//       if (i % 2 === 0) {
//         evencount = evencount + 1;
//       } else {
//         oddcount = oddcount + 1;
//       }
//       i = i + 1;
//     }

//     console.log("Total count of even numbers:", evencount);
//     console.log("Total count of odd numbers:", oddcount);
//   }

// firstfunction(secondfunction)



// function firstfunction(number){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num=======")
//     var i=1
//     while(i<=num){
//       if(i%2==0){
//         console.log(i,"even")
//       }
//       else{
//         console.log(i,"odd")
//       }
//       i=i+1
//     }
//     number(thirdfunction)
// }
// function secondfunction(Number){
//   var readline=require("readline-sync")
//   var num1 =readline.questionInt('enter the any num1=====')
//   var i=1
//   var evensum=0
//   var oddsum=0
//   while(i<=num1){
//     if(i%2==0){
//       evensum=evensum+i
//     }
//     else{
//       oddsum=oddsum+i
//     }
//     i=i+1
//   }
//   console.log("total of evensum",evensum)
//   console.log("total of oddsum",oddsum)
  
//     secondfunction()
// }
// function thirdfunction(){
//     var readline =require("readline-sync")
//     var num2 =readline.questionInt("enter the any num2==========")
//     var i=1
//     var evencount=0
//     var oddcount=0
//     while(i<=num2){
//       if(i%2==0){
//         evencount=evencount+1
//       }
//       else{
//         oddcount=oddcount+1
//       }
//       i=i+1
//     }
//     console.log("total of evencount",evencount)
//     console.log("total of oddcount",oddcount)
// }
// firstfunction(secondfunction)

// function firstfunction(number){
//   var readline =require("readline-sync")
//   var num =readline.questionInt("enter the any num=====")
//   var fact=1
//   while(num>0){
//     fact=fact*num
//     num=num-1
//   }
//   console.log("fact",fact)
  
//   number(thirdfunction)
// }
// function secondfunction(number){
//   var readline =require("readline-sync")
//   var num =readline.questionInt("enter the any num======")
//   var i=1
//   while(i<=num){
//     if(i%3==0 && i%7==0){
//       console.log(i,"navgurukul")
//     }
//     else if(i%7==0){
//       console.log(i,"gurukul")
//     }
//     else if(i%3==0){
//       console.log(i,"nav")
//     }
//     else{
//       console.log(i)
//     }
//     i=i+1
//   }
//   number()
// }
// function thirdfunction(){
//   var readline =require("readline-sync")
//   var num =readline.questionInt("enter the any num=====")
//   var i=2
//   var count=0
//   while(i<=num){
//     if(num%i==0){
//       count=count+1
//     }
//     i=i+1
//   }
//   console.log("count===========",count)
//   if(count==1){
//     console.log('this is a prime number')
//   }
//   else{
//     console.log("this is a not prime number")
//   }
// }
  
// firstfunction(secondfunction)