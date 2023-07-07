// function fristFun(first){
//     console.log("hey manvi where are you") 
//     first()
// }
// function secoundFun(){
//     console.log("this is my secound function")  
// }
// fristFun(secoundFun)


// function firstName(){
//     console.log("my name is kailash kumar singh")
// }
// function lastName(){
//     console.log("i am from bihar")
// }
// lastName();
// firstName();




// function firstNumbe(){
//     console.log("my name is kailash kumar")   
// }
// function lastNumber(name){
//     console.log("i am from bihar")
//     name()
// }
// lastNumber(firstNumbe)



// function funA(first){
//     console.log("welcome funA")
//     first()
// }
// function funB(){
//     console.log("welcome funB")
// }
// funA(funB);



// function firstNumber(name){
//     console.log("my name is kailash kumar")
//     name()
// }
// function lastNumber(){
//     console.log("i am from bihar")
// }
// firstNumber(lastNumber)


// function firstName(){
//     var name1="kailash";
//     var name2="kumar";
//     console.log(name1+name2)
// }
// function lastName(names){
//     console.log("how are you doning")
//     names()
// }
// lastName(firstName)

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
// function lastNumber(){
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

// function fiveNumber(number){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num================")
//     var evencount=0
//     var oddcount=0
//     var i=1
//     while(i<=num){
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
// function sixNumber(){
//     var readline=require("readline-sync")
//     var num=readline.questionInt("enter the any num============")
//     var num1=readline.questionInt("enter the any num1==================")
//     while(num<=num1){
//         var i=1
//         while(i<=10){
//             console.log(num*i)
//             i=i+1
//         }
//         console.log(" ")
//         num=num+1
//     }
// }

// function sevenNumber(numbers){
//     var readline=require("readline-sync")
//     var num1 =readline.questionInt("enter the any num1============")
//     var a=0;
//     var b=1
//     console.log(a);
//     console.log(b);
//     for(var i=0; i<=num1; i++){
//         var temp=a+b
//         console.log(temp)
//         a=b
//         b=temp
//     }
//     numbers()
// }
// function eightNumber(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num============")
//     var fact=1
//     while(num>0){
//         fact=fact*num
//         num=num-1
//     }
//     console.log("fact",fact)

// // }

// function numbers(num) {
//     var array = [12, 24, 56, 75, 34, 32, 21, 19];
//     var sum = 0
//     for (var i in array) {
//         sum = sum + array[i]
//     }
//     console.log("total of sum", sum)
//     num()
// }
// function Number() {
//     var array = [12, 32, 47, 89, 97, 54, 32, 57, 890];
//     var max = array[i]
//     for (var i in array) {
//         array[i] > max
//         max = array[i]
//     }
//     console.log("total of max", max)
// }
// numbers(Number)


// function Number(){
//     var array=[12,3,4,5,6,7,12,19,18,17,16,15,14,2,3,4,5,7,6];
//     var uniqueNumber=[]
//     for(var i=0; i<array.length; i++){
//         if(uniqueNumber.indexOf(array[i])== -1){
//             uniqueNumber.push(array[i])
//         }
//     }
//     console.log(uniqueNumber)
// }
// function number(numbers){
//     var num=16
//     var output={}
//     for(var i=1; i<=num; i++){
//         output[i]=i*i
//     }
//     console.log(output)
//     numbers()
// }
// number(Number)
    
// function Number(numbers){
//     var array=[17,18,19,21];
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
//     numbers()
// }
// function number(){
//     var array=[19,78,95,34,56,10,21,32,161,100];
//     array.sort((a,b)=>a-b)
//     console.log(array)
// }
// Number(number)

// function firstNumbe(number){
//     var num1="99"
//     var num2="88"
//     console.log(num1+num2)
//     number()
// }
// function lastNumber(){
//     var a=90
//     var b=30
//     console.log(a-b)
// }
// firstNumbe(lastNumber)

// function firstNumbe(number){
//     var readline =require("readline-sync")
//     var num=readline.questionInt("enter the any num==============")
//     var i=0
//     while(i<=num){
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
// function lastNumber(){
//     var readline =require("readline-sync")
//     var num=readline.questionInt("enter the any num============")
//     var i=0
//     while(i<=num){
//         var num1 =readline.questionInt("enter the any num1=============")
//         if(num1>0){
//             console.log(num1,"posstive")
//         }
//         else{
//             console.log(num1,"neagtive")
//         }
//         i=i+1
//     }

// }
// firstNumbe(lastNumber)





// function firstNumber(){
//     var readline =require("readline-sync")
//     var num=readline.questionInt("enter the any num=================")
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
// }
// function lastNumber(number){
//     var readline =require("readline-sync")
//     var num1=readline.questionInt("enter the any num1=============")
//     var evensum=0
//     var oddsum=0
//     var i=0
//     while(i<=num1){
//         if(i%2==0){
//             evensum=evensum+i
//         }
//         else{
//             oddsum=oddsum+i
//         }
//         i=i+1
//     }
//     console.log("total of evensum",evensum)
//     console.log("total of oddsum",oddsum)
//     number()

// }
// function secoundNumber(){
//     var readline =require("readline-sync")
//     var num2 =readline.questionInt("enter the any num2==============")
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
//     console.log("total of evencount",evencount)
//     console.log("total of oddcount",oddcount)

// }
// lastNumber(firstNumber)











// function firstNumber(number){
//     var readline=require("readline-sync")
//     var num =readline.questionInt("enter the any num==================")
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
//     number()
// }
// function lastNumber(){
//     var readline=require("readline-sync")
//     var num1=readline.questionInt("enter the any num1==============")
//     var evensum=0
//     var oddsum=0
//     var i=1
//     while(i<=num1){
//         if(num1%2==0){
//             evensum=evensum+i
//         }
//         else{
//             oddsum=oddsum+i
//         }
//         i=i+1
//     }
//     console.log("total of evensum",evensum)
//     console.log("total of oddsum",oddsum)
// }
// firstNumber(lastNumber)









// function firstNumber(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num===============")
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

// }
// function lastNumber(){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num============")
//     var evensum=0
//     var oddsum=0
//     for(var i=0; i<=num; i++){
//         if(i%2==0){
//             evensum=evensum+i
//         }
//         else{
//             oddsum=oddsum+i
//         }
//     }
//     console.log("total of evensum",evensum);
//     console.log("total of oddsum",oddsum);
    
// }
// firstNumber()
// lastNumber()


// function firstNumber(){
//     var num1=90
//     var num2=20
//     if(num1<num2){
//         console.log("first condation is a right")
//     }
//     else if(num1==num2){
//         console.log("secound condation is a right")
//     }
//     else if(num1>num2){
//         console.log("third condation is a right")
//     }
//     else{
//         console.log("all condation is a fallse")
//     }
// }
// function lastNumber(number){
//     var num1=90
//     var num2=80
//     console.log(num1+num2)
//     number()
// }
// lastNumber(firstNumber)


// function firstNumber(number){
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num====================")
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
//     console.log("total of oddsum",oddsum);
//     number()
// }
// function lastNumber(){
//     var num1=90
//     var num2=70
//     setTimeout(()=>{
//         console.log(num1+num2)
//     },5000)
// }
// firstNumber(lastNumber)



// setTimeout(function(){
//     var array=[12,78,90,75,43,21,13,70];
//     var max=array[0]
//     for(var i in array){
//         if(array[i]>max){
//             max=array[i]
//         }
//     }
//     console.log(max)
// },4000)
// function lastNumber(){
//     var array=[12,13,46,78,90,10,20,40,70];
//     var sum=0
//     for(var i in array){
//         sum=sum+array[i]
//     }
//     console.log("total of sum",sum)
// }
// setTimeout(lastNumber,4000)


// function firstNumber(){
//     var readline=require("readline-sync")
//     var num=readline.questionInt("enter the any num==================")
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
//         console.log(count,"this is a prime number")
//     }
//     else{
//         console.log(count,"this is a not prime number")
//     }
// }
// setTimeout(function(){
//     var readline=require("readline-sync")
//     var num1=readline.questionInt("enter the any num1====================")
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
// },8000)
// setTimeout(firstNumber,8000)