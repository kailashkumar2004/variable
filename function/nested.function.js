
// function number() {
//     var num1 = 10
//     var num2 = 20
//     console.log(num1 + num2)

// const readline = require("readline")


//     function name() {
//         var names = "kailash"
//         return(names)
//     }
//     console.log(name())
// }
// number()


// function number(){
//     var readline =require("readline-sync")
//     var num1 =readline.questionInt("enter the any num1======")
//     var num2 =readline.questionInt("enter the any num2=====")
//     var num3 =readline.questionInt("enter the any num3====")
//     console.log(num1+num2+num3)

//     function names(){
//         var name ="kailash"
//         var name1="manvi"
//         return(name+name1)
//     }
//     console.log(names())
// }
// number()

//   function number(){
//     var a=5
//     var b=7
//     return (a+b)

//   }
// //   console.log(number())

// number()

// function numbers(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num=====")
//     var fact=1
//     while(num>0){
//         fact=fact*num
//         num=num-1
//     }
//     return("fact",fact)
// }

// console.log(numbers())

// function number(){
//     var array=[2,3,4,5,6,7,8,9,1,2,3,5,7,8]
//     for(var i=1; i<array.length; i++){
//         if(array[i]%2==0){
//             console.log(array[i],"even")
//         }
//         else{
//             console.log(array[i],"odd")
//         }
//     }
//     function num(){
//         var sum=0
//         var arr=[2,3,4,5,6,7,8,9];
//         var i=1
//         while(i<arr.length){
//             sum=sum+arr[i]
//             i=i+1
//         }
//         return("total of sum",sum)
//     }
//     console.log(num())
// }
// number()

// function number(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num====")
//     var i=1
//     var sum=0
//     while(i<num){
//         if(num%i==0){
//             sum=sum+i
//         }
//         i=i+1
//     }
//     if(sum==num){
//         return(sum,"this is a perfect number")
//     }
//     else{
//         return(sum,"this is a not perfect")
//     }
// }
// console.log(number())


// function number(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num============")
//     var a=0;
//     var b=1;
//     console.log(a)
//     console.log(b)
//     for(var i=0; i<=num; i++){
//         var temp =a+b
//         console.log(temp)
//         b=a
//         a=temp
//     }
//     function Numbers(){
//         var readline =require("readline-sync")
//         var num =readline.questionInt("enter the any num====")
//         var num1 =readline.questionInt("enter the any num1=====")
//         while(num<=num1){
//             var i=1
//             while(i<=10){
//                 console.log(num*i)
//                 i=i+1
//             }
//             console.log(" ")
//             num=num+1
//         }
     
//     }
//     Numbers()
// }
// number()


// function numbers(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num====")
//     var i=0
//     while(i<=num){
//         var num1=readline.questionInt("enter the any num1===")
//         if(num1>0){
//             console.log(num1,"posstiove")
//         }
//         else{
//             console.log(num1,"neagtive")
//         }
//         i=i+1
//     }
//     function number(){
//         var readline =require("readline-sync")
//         var num =readline.questionInt("enter the any num=========")
//         var i=1
//         while(i<=num){
//             if(i%2==0){
//                 console.log(i,"even")
//             }
//             else{
//                 console.log(i,"odd")
//             }
//             i=i+1
//         }

//     }
//     number()

// }
// numbers()


// function number(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num====")
//     var i=1
//     while(i<=num){
//         if(i%2==0){
//             console.log(i,"even")
//         }
//         else{
//             console.log(i,"odd")
//         }
//         i=i+1
//     }
//     function Numbers(){
//         var readline =require("readline-sync")
//         var num =readline.questionInt("enter the any num=====")
//         var i=0
//         while(i<=num){
//             var num1=readline.questionInt("enter the any num1=========")
//             if(num1>0){
//                 console.log(num1,"posstive")
//             }
//             else{
//                 console.log(num1,"neagtive")
//             }
//             i=i+1

//             }
//         }
//         Numbers()
//     }
//     number()


// function firstNumber(num1){
//     var num2=90
//     var num3=80
//     if(num1>num2 && num2<num3){
//         console.log("first condation is a right")
//     }
//     else if(num1<num2 && num2<num3){
//         console.log("secound condation is a right")
//     }
//     else if(num1>num2 && num2>num3){
//         console.log("third condation is a right")
//     }
//     else{
//         console.log("all condation is a right")
//     }
//     function lastNumber(){
//         var readline =require("readline-sync")
//         var num=readline.questionInt("enter the any num=================")
//         var i=1
//         while(i<=num){
//             if(i%2==0){
//                 console.log(i,"even")
//             }
//             else{
//                 console.log(i,"odd")
//             }
//             i=i+1
//         }
//     }
//     lastNumber()
// }
// firstNumber(100)

// function firstNumber(){
//     var readline =require("readline-sync")
//     var num1 =readline.questionInt("enter the any num1=============");
//     var num2 =readline.questionInt("enter the any num2=============");
//     var num3 =readline.questionInt("enter the any num3=============");
//     if(num1>num2 && num1>num3){
//         console.log(num1,"num1 max hai num2 and num3 se")
//     }
//     else if(num2>num1 && num2>num3){
//         console.log(num2,"num2 max hai num1 and num3 se ")
//     }
//     else{
//         console.log(num3,"num3 max hai ")
//     }
//     function lastNumber(){
//         var readline =require("readline-sync")
//     var num1 =readline.questionInt("enter the any num1=============");
//     var num2 =readline.questionInt("enter the any num2=============");
//     var num3 =readline.questionInt("enter the any num3=============");
//      if(num1>num2){
//         if(num1>num3){
//             console.log(num1,"num1 max hai num2 and num3 se")
//         }
//         else{
//             console.log(num3,"num3 max hai num1 and num2 se")
//         }
//      }
//      else if(num2>num1){
//         if(num2>num3){
//             console.log(num2,"num2 max hai num1 and num3 se")
//         }
//         else{
//             console.log(num3,"num3 max hai num2 se")
//         }
//      }
//      else{
//         console.log(num3,"num3 max hai num1 se or num2 se v ")
//      }
//     }
//     lastNumber()
// }
// firstNumber()







// var firstNumber=function(){
//     array=[1,2,3,4,5,6,7,8,9,11,12,32,43,54,67,89,90,2,3,4,5,6,7,8,11];
//     var uniqueNumbers=[]
//     for(var i=0; i<array.length; i++){
//         if(uniqueNumbers.indexOf(array[i])== -1){
//             uniqueNumbers.push(array[i])
//         }
//     }
//     console.log(uniqueNumbers);
//     var lastNumber=function(num1){
//         var num2=90
//         var num3=19
//         console.log(num1+num2+num3)
//     }
//     lastNumber(100)
  
// }
// firstNumber()


// var firstNumber =function(){
//     var array=[20,30,40,50,60,70,80,90,100];
//     var max=array[0]
//     for(var i in array){
//         if(array[i]>max){
//             max=array[i]
//         }
//     }
//     console.log(max)
//     var lastNumber=function(){
//         var array=[10,20,30,40,70,90,100];
//         var sum=0
//         for(var i in array){
//             sum=sum+array[i]
//         }
//         console.log("total of sum",sum)
    
// }
// lastNumber()
// }
// firstNumber()


// var firstNumber=(num)=>{
//     var readline =require("readline-sync")
//     var num=readline.questionInt("enter the any num========================")
//     var num1 =readline.questionInt("enter the any num1=============")
//     while(num<=num1){
//         var i=1
//         while(i<=10){
//             console.log(num*i)
//             i=i+1
//         }
//         console.log(" ")
//         num=num+1
//     }
//     var lastNumber=(number)=>{
//         var readline =require("readline-sync");
//         var num =readline.questionInt("enter the any num================")
//         var i=0
//         while(i<=num){
//             var num1 =readline.questionInt("enter the any num1================")
//             if(num1>0){
//                 console.log(num1,"num1 posstive number hai")
//             }
//             else{
//                 console.log(num1,"num1 neagtive number hai")
//             }
//             i=i+1
//         }
//     }
//     lastNumber()
// }
// firstNumber()


// var firstNumber=(num)=>{
//     var readline =require("readline-sync");
//     var num=readline.questionInt("enter the any num==================")
//     var a=0;
//     var b=1;
//     console.log(a);
//     console.log(b);
//     for(var i=0; i<=num; i++){
//         var temp=a+b;
//         console.log(temp);
//         b=a;
//         a=temp;
//     }
//     var secoundNumber=(num)=>{
//         var readline =require("readline-sync")
//         var num=readline.questionInt("enter the any num=============")
//         var fact=1
//         while(num>0){
//             fact=fact*num
//             num=num-1
//         }
//         console.log("fact",fact)
//     }
//     secoundNumber()
//     var lastNumber=(num)=>{
//         var readline =require("readline-sync");
//         var num2 =readline.questionInt("enter the any num2=================");
//         var i=1;
//         var evensum=0;
//         var oddsum=0;
//         while(i<=num2){
//             if(i%2==0){
//                 evensum=evensum+i;
//             }
//             else{
//                 oddsum=oddsum+i;
//             }
//             i=i+1;
//         }
//         console.log("total of evensum",evensum);
//         console.log("total of oddsum",oddsum)
//     }
//     lastNumber()
// }
// firstNumber()