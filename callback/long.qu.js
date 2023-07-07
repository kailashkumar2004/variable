// firstNumbe(secoundNumber);
// thirdnumber(fourthNumber);
// fiveNumber(sixNumber);
// sevenNumber(eightNumber);


// function firstNumbe(number){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num=============")
//     var i=2
//     var count=0
//     while(i<=num){
//         if(num%i==0){
//             count=count+1
//         }
//         i=i+1
//     }
//     console.log("count======================",count)
//     if(count==1){
//         console.log("this is a prime number")
//     }
//     else{
//         console.log("this is a not prime number")
//     }
//     number()
// }
// thirdnumber(fourthNumber);
// function secoundNumber(){
//     var readline =require("readline-sync")
//     var num1=readline.questionInt("enter the any num1============")
//     var i=1
//     var sum=0
//     while(i<num1){
//         if(num1%i==0){
//             sum=sum+i
//         }
//         i=i+1
//     }
//     if(sum==num1){
//         console.log(sum,"sum is a parfect number")
//     }
//     else{
//         console.log(sum,"sum is a not perfect number")
//     }
// }

// function thirdnumber(number){
//     var readline =require("readline-sync")
//     var num2 =readline.questionInt("enter the any num2================")
//     var evencount=0
//     var oddcount=0
//     var i=1
//     while(i<=num2){
//         if(i%2==0){
//             evencount=evencount+1
//         }
//         else{
//             oddcount=oddcount+1
//         }
//         i=i+1
//     }
//     console.log("total of evencount",evencount);
//     console.log("total of oddcount",oddcount)
//     number()
// }
// function fourthNumber(){
//     var readline=require("readline-sync")
//     var num3=readline.questionInt("enter the any num3============")
//     var num4=readline.questionInt("enter the any num4==================")
//     while(num3<=num4){
//         var i=1
//         while(i<=10){
//             console.log(num3*i)
//             i=i+1
//         }
//         console.log(" ")
//         num3=num3+1
//     }
// }

// function fiveNumber(numbers){
//     var readline=require("readline-sync")
//     var num5 =readline.questionInt("enter the any num5============")
//     var a=0;
//     var b=1
//     console.log(a);
//     console.log(b);
//     for(var i=0; i<=num5; i++){
//         var temp=a+b
//         console.log(temp)
//         a=b
//         b=temp
//     }
//     numbers()
// }
// function sixNumber(){
//     var readline =require("readline-sync")
//     var num6 =readline.questionInt("enter the any num6============")
//     var fact=1
//     while(num6>0){
//         fact=fact*num6
//         num6=num6-1
//     }
//     console.log("fact",fact)  
// }
// function sevenNumber(number){
//     var readline =require("readline-sync")
//     var num7=readline.questionInt("enter the any num7==============")
//     var i=0
//     while(i<=num7){
//         if(i%3==0 && i%7==0){
          
//           console.log(i,"navgurukul")
//         }
//         else if(i%7==0){
//             console.log(i,"gurukul")
//         }
//         else if(i%3==0){
//             console.log(i,"nav")
//         }
//         else{
//             console.log(i)
//         }
//         i=i+1
//     }
//     number()
// }
// function eightNumber(){
//     var readline =require("readline-sync")
//     var num8=readline.questionInt("enter the any num8============")
//     var i=0
//     while(i<=num8){
//         var num9 =readline.questionInt("enter the any num9=============")
//         if(num9>0){
//             console.log(num9,"posstive")
//         }
//         else{
//             console.log(num9,"neagtive")
//         }
//         i=i+1
//     }

// }
// // firstNumbe(secoundNumber);
// // thirdnumber(fourthNumber);
// // fiveNumber(sixNumber);
// // sevenNumber(eightNumber);

// function first(){
//     console.log("first function is executed")
//     function secound(){
//         console.log("this is my secound function eecuted")
//         function third(){
//             console.log("this is my third function eecuted")
//             function fputh(){
//                 console.log('this is my 4th function eecuted')
//                 function five(){
//                     console.log('this is my 5th function eecuted')
//                 }
//                 five()
//             }
//             fputh()
//         }
//         third()
//     }
//     secound()

// }
// first()

// function firstNumber(){
//     var array=[12,78,90,75,43,52,100,199,800];
//     var max=array[0]
//     var i=1
//     while(i<array.length){
//         if(array[i]>max){
//             max=array[i]
//         }
//         i=i+1
//     }
// console.log(max)
// }
// function lastNumber(number){
//     var array=[98,76,64,32,12,41,10,28,75];
//     var sum=0
//     var i=0
//     while(i<array.length){
//         sum=sum+array[i]
//         i=i+1
//     }
//     console.log("total of sum",sum)
//     number()
// }
// function secoundNumber(number){
//     var array=[1,2,3,4,5,6,7,8,9,11,2,14,1,6,8,9,20,40,60,5,7];
//     var uniqueNumber=[]
//     for(var i=0; i<array.length; i++){
//         if(uniqueNumber.indexOf(array[i])== -1){
//             uniqueNumber.push(array[i])
//         }
        
//     }
//     console.log(uniqueNumber)
//     number()
// }
// function thirdnumber(){
//     var array=[13,14,15,17];
//     var output=[]
//     var i=0
//     while(i<array.length){
//         var j=1
//         while(j<array.length){
//             output.push(array.slice(i,j+1))
//             j=j+1
//         }
//         i=i+1
//     }
//     console.log(output)
// }

// lastNumber(thirdnumber)
// secoundNumber(firstNumber)