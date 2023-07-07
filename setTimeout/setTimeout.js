
// setTimeout(function(){
//     var num1=10
//     var num2=100
//     console.log(num1+num2)
// },3000)

// setTimeout(function(){
//     var readline =require("readline-sync")
//     var num=readline.questionInt("rnter the any num============")
//     var i=0
//     while(i<=num){
//         var num1=readline.questionInt("enter the any num1===========")
//         if(num1>0){
//             console.log(num1,"posstive")
//         }
//         else{
//             console.log(num1,"neagtive")
//         }
//         i=i+1
//     }
// },2000)

// setTimeout(function(){
//     var array=[12,32,45,67,89,90,10,20,30,40];
//     var sum=0
//     var i=1
//     while(i<array.length){
//         sum=sum+array[i]
//         i=i+1
//     }
//     console.log(sum)
// },3000)

// setTimeout(function(){
//     var array=[12,18,99,100,87,68,54,36,71,10];
//     var max=array[0]
//     var i=0
//     while(i<array.length){
//         if(array[i]>max){
//             max=array[i]
//         }
//         i=i+1
//     }
//     console.log(max)
// },4000)
// function lastNumber(){
//     var array=[12,21,30,90,78,65,41,23,45];
//     var sum=0
//     var i=0
//     while(i<array.length){
//         sum=sum+array[i]
//         i=i+1
//     }
//     console.log("total of sum",sum)
// }
// setTimeout(lastNumber,4000)



// setTimeout(function() {
//     var readline = require("readline-sync");
//     var num = readline.questionInt("Enter any number==================== ");
//     var i = 1;
//     while (i<=num) {
//       if (i%2==0) {
//         console.log(i, "even");
//       } 
//       else {
//         console.log(i, "odd");
//       }
//       i=i+1;
//     }
//   }, 3000);
//   function lastNumber(){
//     var readline=require("readline-sync");
//     var num1=readline.questionInt("Enter any number==================");
//     var evensum=0;
//     var oddsum=0;
//     var i = 1;
//     while (i<=num1) {
//       if (i%2==0) {
//         evensum = evensum + i;
//       } 
//       else{
//         oddsum = oddsum + i;
//       }
//       i=i+1;
//     }
//     console.log("Total of even numbers:", evensum);
//     console.log("Total of odd numbers:", oddsum);
//   }
  
//   setTimeout(lastNumber,3000);


// setTimeout(function(){
//     var readline=require("readline-sync")
//     var num1 =readline.questionInt("enter the any num1=======================")
//     var i=2
//     var count=0
//     while(i<=num1){
//         if(num1%i==0){
//             count=count+1
//         }
//         i=i+1
//     }
//     console.log("count====================",count)
//     if(count==1){
//         console.log("this is a prime number")
//     }
//     else{
//         console.log("this is a not orime number")
//     }
// },4000)
// function firstNumbe(){
//     var readline=require("readline-sync")
//     var num =readline.questionInt("enter the any num=============")
//     var i=1
//     var sum=0
//     while(i<num){
//         if(num%i==0){
//             sum=sum+i
//         }
//         i=i+1
//     }
//     if(sum==num){
//         console.log(sum,"sum is a parfect")
//     }
//     else{
//         console.log(sum,"sum is a not parfect")
//     }
// }
// setTimeout(firstNumbe,4000)

// setTimeout(function(){
//     var array=[1,5,7,8,99,10,21,32,45,64,1,5,7,8,11,90,85,45];
//     var uniqueNumber=[];
//     for(var i=0; i<array.length; i++){
//         if(uniqueNumber.indexOf(array[i])== -1){
//             uniqueNumber.push(array[i])
//         }
//     }
//     console.log(uniqueNumber)
// },2000)
// function firstNumbe(){
//     var array=[12,13,14,16];
//     var output=[]
//     var i=0
//     while(i<array.length){
//         var j=1
//         while(j<array.length){
//             output.push(array.slice(i,j+i))
//             j=j+1
//         }
//         i=i+1
//     }
//     console.log(output)
// }

// setTimeout(firstNumbe,2000)

// setTimeout(function(){
//     var arr1=[1,5,7,8,9,17,2,11,8,9,10,20,30,40];
//     var arr2=[5,7,1,9,8,10,90,75,20,16,58];
//     var emptyarray=[]
//     for(var i of arr1){
//         if(arr2.includes(i)){
//             emptyarray.push(i)
//         }
//     }
//     console.log(emptyarray)
// },60000)

// setTimeout(function(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num=====================")
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
// },2000)
// function firstNumbe(){
//     var readline =require("readline-sync")
//     var num1=readline.questionInt("enter the any num1============")
//     var num2 =readline.questionInt("enter the any num2===============")
//     while(num1<=num2){
//         var i=1
//         while(i<=10){
//             console.log(num1*i)
//             i=i+1
//         }
//         console.log(" ")
//         num1=num1+1
//     }
// }
    
// setTimeout(firstNumbe,2000)

// setTimeout(function(){
//     var num1=100
//     var num2=String(num1)
//     console.log(num2)
//     console.log(typeof(num2))
// },3000)

// setTimeout(function(){
//     var num1=10
//     var num2="10"
//     console.log(num1==num2)
//     console.log(num1===num2)
// },5000)
// function firstNumbe(){
//     var a="9"
//     var b=Number(a)
//     console.log(b)
//     console.log(typeof(b))
// }
// setTimeout(firstNumbe,4000)













// setTimeout(function(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num=================")
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
// },3000)

// setTimeout(function(){
//     var readline =require("readline-sync")
//     var num=readline.questionInt("enter the any num==============")
//     var i=0
//     while(i<=num){
//         var num1=readline.questionInt("enter the any num1=============")
//         if(num1>0){
//             console.log(num1,"posstive")
//         }
//         else{
//             console.log(num1,"neagtive")
//         }
//         i=i+1
//     }
// },4000)


// setTimeout(function(){
//     var readline =require("readline-sync")
//     var num=readline.questionInt("enter the any num=============")
//     var num1=readline.questionInt("enterthe any num1===========")
//     while(num<=num1){
//         var i=1
//         while(i<=10){
//             console.log(num*i)
//             i=i+1
//         }
//         console.log(" ")
//         num=num+1
//     }
// },7000);
// function firstNumbe(){
//     var readline=require("readline-sync")
//     var num =readline.questionInt("enter the any num=================")
//     var i=1
//     var evensum=0
//     var oddsum=0
//     while(i<=num){
//         if(i%2==0){
//             evensum=evensum+i
//         }
//         else{
//             oddsum=oddsum+i
//         }
//         i=i+1
//     }
//     console.log("total of evensum",evensum);
//     console.log("total of oddsum",oddsum)
// }
// setTimeout(firstNumbe,7000)




// setTimeout(function(){
//     var num1=99
//     var num2=97
//     var num3=100
//     if(num1>num2 && num2>num3){
//         console.log("first condation is a right")
//     }
//     else if(num1>=num2 && num2<num3){
//         console.log("secound condation is a right")
//     }
//     else if(num1==num2 && num3<num2){
//         console.log("third condation is right")
//     }
//     else{
//         console.log("all condation is a right")
//     }
// },4000)


// setTimeout(function(){
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
//     console.log("count=======================",count);
//     if(count==1){
//         console.log("this is a prime number")
//     }
//     else{
//         console.log("this is a not pime number")
//     }
// },6000)
// function firstNumber(){
//     var readline =require("readline-sync")
//     var num1=readline.questionInt("enter the any num1================")
//     var i=1
//     var sum=0
//     while(i<num1){
//         if(num1%i==0){
//             sum=sum+i
//         }
//         i=i+1
//     }
//     if(sum==num1){
//         console.log(sum,"sum is a perfect number")
//     }
//     else{
//         console.log(sum,"sum is a not perfect number")
//     }
// }
// setTimeout(firstNumber,6000)

// setTimeout(function(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num====================")
//     var a=0
//     var b=1
//     console.log(a);
//     console.log(b);
//     for(var i=0; i<=num; i++){
//         var temp=a+b;
//         console.log(temp);
//         b=a;
//         a=temp
//     }
// },9000)
// function firstNumber(){
//     var readline=require("readline-sync");
//     var num=readline.questionInt("enter the any num================")
//     var fact=1
//     while(num>0){
//         fact=fact*num
//         num=num-1
//     }
//     console.log("fact",fact)
// }
// setTimeout(firstNumber,9000)









// setTimeout(function(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num=================")
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
// },8000 )

// setTimeout(function(){
//     var array=[1,2,3,4,5,6,7,8,9,10,100];
//     var max=array[0];
//     for(var i=0; i<array.length; i++){
//         if(array[i]>max){
//             max=array[i]
//         }
//     }
//     console.log(max)
// },3000)
// function firstNumber(){
//     var array=[10,20,30,40,50,60,70,80,90];
//     var sum=0
//     for(var i in array){
//         sum=sum+array[i]
//     }
//     console.log(sum)
// }
// setTimeout(firstNumber,3000)