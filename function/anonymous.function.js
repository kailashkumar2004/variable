// var number=function(){
//     var num1=10
//     var num2=19
//     console.log(num1+num2)
// }
// number()

// var array=function(num){
//     var num1=90
//     var num2=10
//     console.log(num-num1-num2)
// }
// array(200)

// var number=function(){
//     var array=[12,16,18,19,20,48,69,90,100];
//     var max=array[0]
//     var i=0
//     while(i<array.length){
//         if(array[i]>max){
//             max=array[i]
//         }
//         i=i+1
//     }
//     console.log(max)
// }
// number()

// var firstNumber=function(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num============")
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
//     var lastNumber=function(){
//         var readline =require("readline-sync")
//         var num1=readline.questionInt("enter the any num1==================")
//         var i=1
//         var evensum=0
//         var oddsum=0
//         while(i<=num1){
//             if(i%2==0){
//                 evensum=evensum+i
//             }
//             else{
//                 oddsum=oddsum+i
//             }
//             i=i+1
//         }
//         console.log("total of evensum",evensum)
//         console.log("total of oddsum",oddsum)
//     }
//     lastNumber()
// }
// firstNumber()


// var number=function(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num==============")
//     var i=2
//     var count=0
//     while(i<=num){
//         if(num%i==0){
//             count=count+1
//         }
//         i=i+1
//     }
//     console.log("count====================",count)
//     if(count==1){
//         console.log("this is a prime number")
//     }
//     else{
//         console.log("this is a not prime number")
//     }
//     var Number=function(){
//         var readline =require("readline-sync")
//         var num1=readline.questionInt("enter the any num1===============")
//         var i=1
//         var sum=0
//         while(i<num1){
//             if(num1%i==0){
//                 sum=sum+i
//             }
//             i=i+1
//         }
//         if(sum==num1){
//             console.log(sum,"sum is a parfect number")
//         }
//         else{
//             console.log(sum,"sum is a not perfect number")
//         }
//     }
//     Number()
// }
// number()

// var number=function(){
//     var num="99"
//     var num1="12"
//     console.log(num+num1)
// }
// number()

// var firstNumber=function(num1){
//     var num2=90
//     var num3=10
//     console.log(num1+num2+num3)
// }
// firstNumber("40")



// var firstNumber=function(){
//     var readline =require("readline-sync")
//     var num1 =readline.questionInt("enter the any num1==============")
//     var num2 =readline.questionInt("enter the any num2==============")
//     var num3 =readline.questionInt("enter the any num3==============")
//     if(num1>num2){
//         if(num1>num3){
//             console.log(num1,"num1 grater hai num2 and num3 se")
//         }
//         else{
//             console.log(num3,"num3 grater hai ")
//         }
//     }
//     else if(num2>num1){
//         if(num2>num3){
//             console.log(num2,"num2 frater hai num1 and num3 se")
//         }
//         else{
//             console.log(num3,"num3 grater hai")
//         }
//     }
//     else{
//         console.log(num3,"num3 grater hai num1 and num2 se")
//     }
// }
// firstNumber()