// var number=(a,b)=>{
//     return a+b
// }
// console.log(number(10,15))
// var name=(kailash)=>{
//     return name
// }
// console.log("kailash")


// var number=(a,b)=>{
//     var c=20
//     return a+b+c
// }
// console.log(number(20,30))

// // // // even and odd number


// var number=(num)=>{
//     var num=12
//     if(num%2==0){
//         return(num,"even")
//     }
//     else{
//         return(num,"odd")
//     }
// }
// console.log(number())


// var number=(num)=>{
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num=====")
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
// number()


// var Number=(number)=>{
//         var array=[3,5,6,7,8,9,6,5,4,3,2,5,7];
//     var i=1
//         while(i<array.length){
//             if(array[i]%2==0){
//                 console.log(array[i],"even")
//             }
//             else{
//                 console.log(array[i],"odd")
//             }
//             i=i+1
//         }
//     }
//     Number()


//  //  //  even and odd ka sum

// var number=(Number)=>{
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num=======")
//     var evensum=0
//     var oddsum=0
//     var i=1
//     while(i<=num){
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
// }
// number()

// var number=(Number)=>{
//     var array=[11,23,45,67,88,65,44,33,22,18];
//     var i=1
//     var evensum=0
//     var oddsum=0
//     while(i<=array.length){
//         if(array[i]%2==0){
//             evensum=evensum+array[i]
//         }
//         else{
//             oddsum=oddsum+(array[i])
//         }
//         i=i+1
//     }
//     console.log("total of evensum",evensum)
//     console.log("total of oddsum",oddsum)
// }
// number()

// var num=(number)=>{
//     var array=[12,34,46,67,89,26];
//     var sum=0
//     var i=0
//     while(i<array.length){
//         sum=sum+array[i]
//         i=i+1
//     }

//    console.log("total of sum",sum)
// }
// num()


// //  ///   /// even and odd count
// var numbers=(number)=>{
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num=====")
//     var even_count=0
//     var odd_count=0
//     var i=1
//     while(i<=num){
//         if(i%2==0){
//             even_count=even_count+1
//         }
//         else{
//             odd_count=odd_count+1
//         }
//         i=i+1
//     }
//     console.log("total of even_count",even_count)
//     console.log("total of odd_count",odd_count)
// }
// numbers()


// var num=(number)=>{
//     var elements=[11,75,43,28,48,69,92,30];
//     var i=1
//     var evencount=0
//     var oddcount=0
//     while(i<=elements.length){
//         if(elements[i]%2==0){
//             evencount=evencount+1
//         }
//         else{
//             oddcount=oddcount+1
//         }
//         i=i+1
//     }
//      console.log("total of evencount",evencount)
//     console.log("total of oddcount",oddcount)
// }
// num()

// // // // prime number

// var num=(number)=>{
//     var readline=require("readline-sync")
//     var num1 =readline.questionInt("enter the any num======")
//     var i=2
//     var count=0
//     while(i<=num1){
//         if(num1%i==0){
//             count=count+1
//         }
//         i=i+1
//     }
//     console.log("count========",count)
//     if(count==1){
//         console.log("this is a prime number")
//     }
//     else{
//         console.log("this is a not prime number")
//     }
// }
// num()


// // // // // perfect number
// var number=(num)=>{
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
//         return(sum,"sum it is a perfect number")
//     }
//     else{
//         return(sum,"sum it is a not perfect")
//     }
// }
// console.log(number())



// // // fectoriyal number
// var numbers=(number)=>{
//     var readline= require("readline-sync")
//     var num =readline.questionInt("enter the any num=====")
//     var fact=1
//     while(num>0){
//         fact=fact*num
//         num=num-1
//     }
//     return("fact",fact)
// }
// console.log(numbers())



//   //   // feboninesh number

// let number=(numbers)=>{
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num====")
//     var a=0;
//     var b=1;
//     console.log(a);
//     console.log(b);
//     for(var i=0; i<=num; i++){
//         var temp=a+b;
//         console.log(temp)
//         b=a
//         a=temp
//     }

// }
// number()


//  //  //  table

// var Number=(number)=>{
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num======")
//     var num1 =readline.questionInt("enter the any num1====")
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
// Number()


//   //  // posstive and neagtive number

// var number=(Number)=>{
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num===")
//     var i=0
//     while(i<=num){
//         var num1 =readline.questionInt("enter the any num1========")
//         if(num1>0){
//             console.log(num1,"posstive")
//         }
//         else{
//             console.log(num1,"neagtive")
//         }
//         i=i+1
//     }
// }
// number()


// var numbers=(num)=>{
//     var array=[1,-2,3,4,-5,6,-8,9,5];
//     var i=0
//     while(i<array.length){
//         if(array[i]>0){
//             console.log(array[i],"posstive")
//         }
//         else{
//             console.log(array[i],"neagtive")
//         }
//         i=i+1
//     }
// }
// numbers()


//  ///   ///  ///

// let Number=(number)=>{
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num=======")
//     var i=1
//     while(i<=num){
//         if(i%3==0 && i%7==0){
//             console.log(i,"navgurukul")
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
// }
// Number()



///////////// nested arrow funcation

// var numbers = (Number) => {
//     var a = 15
//     var b = 30
//     var c = (a + b)
//     console.log(c)
//     var a = (c - a)
//     console.log(a)
//     var b = (c - b)
//     console.log(b)

//     var numbr = (num) => {
//         var readline = require("readline-sync")
//         var num1 = readline.questionInt("enter the any num===")
//         var i = 1
//         while (i <= num1) {
//             if (i % 2 == 0) {
//                 console.log(i, "even")
//             }
//             else {
//                 console.log(i, "odd")
//             }
//             i = i + 1
//         }
//     }
//     numbr()
// }
// numbers()


// var number=(Number)=>{
//     var readline =require("readline-sync")
//     var num1 =readline.questionInt("enter the any num1=====")
//     var num2 =readline.questionInt("enter the any num2=====")
//     var num3 =readline.questionInt("enter the any num3=====")
//     if(num1==num2 && num2==num3){
//         console.log("first condation is a right")
//     }
//     else if(num1>num2 && num2<num3){
//         console.log("secound condation is a right")
//     }
//     else if(num2>num1 && num3>num1){
//         console.log("third condation is a right")
//     }
//     else if(num1>num3 && num2>num3){
//         console.log("fourth condation is a right")
//     }
//     else{
//         console.log("enter the valid number")
//     }
// }
// number()

// var Number=(number)=>{
//     var num1="15"
//     var num2="11"
//     if(num1==num2){
//         console.log("num1,num2 ka equal hai")
//     }
//     else if(num1>num2){
//         console.log("num1,grater hai num2 ka")
//     }
//     else if(num1<num2){
//         console.log(num2,"num1 ka grater hai")
//     }
//     else if(num1<=num2){
//         console.log("num1 se num2 bada hai or equal hai")
//     }
//     else{
//         console.log("sabhi condation sahi hai")
//     }
// }
// Number()


// var days=(day)=>{
//     var day="monday"
//     if(day=="monday"){
//         console.log("rice dal")
//     }
// }
// days()

// var month=(month)=>{
//     var month="march"
//     if(month=="march"){
//         return("holi")
//     }
// }
// console.log(month())


// var days=(days)=>{
//     var readline =require("readline-sync")
//     var day =readline.question("enter the any your day====")
//     if(day=="sunday"){
//         console.log("holi day")
//     }
//     else if(day=="monday"){
//         console.log("working day")
//     }
//     else if(day=="tuesday"){
//         console.log("barithday")
//     }
//     else if(day=="wenesday"){
//         console.log("party")
//     }
//     else{
//         console.log("nothing")
//     }
// }
// days()


/////////////////////nested if arrow funcation
// var number=(number)=>{
//     var readline =require("readline-sync")
//     var num1 =readline.questionInt("enter the any num1======")
//     var num2 =readline.questionInt("enter the any num2======")
//     var num3 =readline.questionInt("enter the any num3====")
//     if(num1>num2){
//         if(num1>num3){
//             console.log('num1 grater hai num2 se')
//         }
//     }
//         else if(num2>num1){
//             if(num2>num3){
//                 console.log('num2 grater hai num1 se')
//             }
//         }
//             else if(num3>num1){
//                 if(num3>num2){
//                     console.log('num3 grater hai num1 se')
//                 }
//             }
//                 else{
//                     console.log("condation is a falls")
//                 }
//             }
// number()


// var number=(number)=>{
//     var num1="29"
//     var num2='19'
//     var num3="44"
//     if(num1<num2){
//         if(num2<num3){
//             console.log("num2,greater hai num1 ka")
//         }
//     }
//     else if(num1>num2){
//         if(num2>num3){
//             console.log("num1 grater hai num2 ka")
//         }
//     }
//     else if(num3>num1){
//         if(num3>num2){
//             console.log("num3 grater hai num1 ka")
//         }
//     }
//     else{
//         console.log("condation is a right")
//     }
// }
// number()


////////////////////////nested arrow funcation
// var Number=(Number)=>{
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num======")
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
//     var numbers=(number)=>{
//         var  readline =require("readline-sync")
//         var num =readline.questionInt("enter the any num======")
//         var i=1
//         var evensum=0;
//         var oddsum=0;
//         while(i<=num){
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
// numbers()
// }
// Number()

// ???????////////////////// dublicate number arrow function
// var numbers=(num)=>{
//     var array=[1,1,2,3,4,5,6,7,8,9,2,3];
//     var uniqueNumbers=[];
//     var i=0;
//     for(var i=0; i<array.length; i++){
//         if(uniqueNumbers.indexOf(array[i])== -1){
//             uniqueNumbers.push(array[i])
//         }
//     }
//     return(uniqueNumbers)
// }
// console.log(numbers())


// var Number=(Number)=>{
//     var array=[
//         [1,2,3,4,5,6,7,8],
//         [8,7,6,5,4,3,2,1],
//         [11,12,13,14,15,16],
//         [4,5,6,7,3,2,1,2,3],
//     ]
//     var sum=0;
//     for(var j of array){
//         for(var k of j){
//             sum=sum+k
//         }
//     }
//     return(sum)
// }
// console.log(Number())


// var numbers = (num) => {
//     var number = [
//         [15, 30, 45, 60],
//         [20, 40, 60, 80],
//         [10, 20, 30, 40],
//     ]
//     var sum = 0
//     // var i=0
//     for (var i in number) {
//         console.log(i)
//         for (var j in number[i]) {
//             sum = sum + number[i][j]
//         }
//     }
//     return (sum)
// }
// console.log(numbers())

// var number = [
//     [15, 30, 45, 60],
//     [20, 40, 60, 80],
//     [10, 20, 30, 40],
//   ];
  
//   var sum = 0;
  
//   for (var i in number) {
//     for (var j in number[i]) {
//       sum += number[i][j];
//     }
//   }
  
//   console.log(sum);


////////////////////////////////// max number arrow function


// var  maxNumber= (nuber) => {
//     const numbers = [5, 8, 2, 10, 3];
//   var max = numbers[0];
//   var i = 0

//   while (i < numbers.length) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//     i=i+1
//   }

//   console.log(max)
// };
// maxNumber()


// var maxNumber=(num)=>{
//     var array=[11,16,18,19,38,49,70,90];
//     var i=0
//     var max =array[0]
//     while(i<array.length){
//         if(array[i]>max){
//             max=array[i]
//         }
//         i=i+1
//     }
//     console.log(max)
// }
// maxNumber()

// var maxNumber=(num)=>{
//     var number=[99,66,55,33,13,11,6,7];
//     var i=0
//     var max=number[0]
//     while(i<number.length){
//         if(number[i]>max){
//             max=number[i]
//         }
//         i=i+1
//     }
//     return(max)
// }
// console.log(maxNumber())

// var number=(Number)=>{
//     var array=[20,30,20,44,55,66,77,88];
//     var uniqueNumbers=[]
//     var i=0
//     for(var i=0; i<array.length; i++){
//         if(uniqueNumbers.indexOf(array[i]) == -1){
//             uniqueNumbers.push(array[i])
//         }
//     }
//     console.log(uniqueNumbers)
// }
// number()

// var maxNumber=(num)=>{
//     var array=[88,75,45,72,18,65,83,99];
//     var i=0
//     var max=array[0]
//     while(i<array.length){
//         if(array[i]>max){
//             max=array[i]
//         }
//         i=i+1
//     }
//     console.log(max)

// }
// maxNumber()


///////////////////////secound max////////////////


// var secondMaxNumber = ()=>{
//  var numbers = [5, 8, 2, 10, 3];
//  var  sortedNumbers = numbers.sort((a, b) => b - a);
//  console.log (sortedNumbers[1])
// }
    
//     secondMaxNumber()


// var numbers=(num)=>{
//     var Number=[1,5,7,8,9,5,4,3,7]
//     var i=0
//     var uniqueNumbers=[]
//     for(var i=0; i<Number.length; i++){
//         if(uniqueNumbers.indexOf(Number[i])== -1){
//             uniqueNumbers.push(Number[i])
//         }
//     }
//     console.log(uniqueNumbers)
// }
// numbers()

// var Number=(num)=>{
//     var numbers=[18,39,20,59,70];
//     var i=0;
//     var max=numbers[0]
//     while(i<numbers.length){
//         if(numbers[i]>max){
//             max=numbers[i]
//         }
//         i=i+1
//     }
//     return(max)
// }
// console.log(Number())()


// var number=(Number)=>{
//     var array=[
//         [11,12,13],
//         [15,16,17],
//         [18,19,20],
//     ]
//     var sum=0
//     for(var i in array){
//         for(var j in array[i]){
//             sum=sum+array[i][j]
//         }
//     }
//     console.log(sum)
// }
// number()

// var number=(num)=>{
//     var array=[
//         [19,20,30],
//         [33,45,67],
//         [11,12,13],
//     ]
//     var sum=0
//     for(var i of  array){
//         for(var j of i){
//             sum=sum+j
//         }
//     }
//     console.log(sum)
// }
// number()

// var number=(num)=>{
//     var array=[1,2,3,4,5,6,7,1,2,8,9,4];
//     var i=0
//     var uniqueNumbers=[]
//     for(var i=0; i<array.length; i++){
//         if(uniqueNumbers.indexOf(array[i])== -1){
//             uniqueNumbers.push(array[i])
//         }
        
//     }
// console.log(uniqueNumbers)
// }
// number()


// var number = (num) => {
//     var array = [1, 2, 3, 4, 5, 6, 7, 1, 2, 8, 9, 4];
//     var uniqueNumbers = [];
//     for (var i = 0; i < array.length; i++) {
//       if (uniqueNumbers.indexOf(array[i]) == -1) {
//         uniqueNumbers.push(array[i]);
//       }
//     }
//     console.log(uniqueNumbers);
//   };
  
//   number()


// var number=(Number)=>{
//     var element=[1,5,9,11,38,69,54];
//     var i=0
//     var max=element[i]
//     while(i<element.length){
//         if(element[i]>max){
//             max=element[i]
//         }
//         i=i+1
//     }
//     console.log(max)
// }
// number()










// var number=(num)=>{
//     var numbers=[1,2,3,4,5,7,1,2,7,8,9];
//     var i=0
//     var uniqueNumbers=[]
//     for(var i=0; i<numbers.length; i++){
//         if(uniqueNumbers.indexOf(numbers[i])== -1){
//             uniqueNumbers.push(numbers[i])
//         }
//     }
//     console.log(uniqueNumbers)
// }
// number()


// var num=(name)=>{
//     var element=[11,12,13,15];
//     var i=0
//     var output=[]
//     while(i<element.length){
//         var j=1
//         while(j<element.length){
//             output.push(element.slice(i, j+1))
//             j=j+1
//         }
//         i=i+1
//     }
//     console.log(output)
// }
// num()


// var num=(number)=>{
//     var array=[14,15,16,18];
//     var i=0
//     var output=[]
//     while(i<array.length){
//         var j=1
//      while(j<array.length){
//         output.push(array.slice(i, j+1))
//         j=j+1
//      }
//      i=i+1
//     }
    // console.log(output)
// }
// num()

// var number=(num)=>{
//     var array=[21,56,89,60,25,35,45,15,30,25,30]
//     var num=60
//     var emptyarray=[]
//     for(var i of array){
//         for(var j of array){
//             if(i+j===num){
//                 emptyarray.push([i,j])
//             }
//         }
//     }
//     return emptyarray
// }
// console.log(number())

// var number=(num)=>{
//     var arr1=[8,4,5,9,2,3,1,11,19,45,73]
//     var arr2=[1,2,3,4,8,73,25,78,98,52,56]
//     var emptyarray=[]
//     for(var i of arr1){
//         if(arr2.includes(i)){
//             emptyarray.push(i)
//         }
//     }
//     console.log(emptyarray)
// }
// number()


// var name=(num)=>{
//     var name=["kailash",'kumar','singh','aarav','bobi',"chandani"]
//     name.sort()
//     console.log(name)

// }
// name()

// var number=(num)=>{
//     var number=[11,19,53,22,100.45,94,1,2,4,6,7,8]
//     number.sort((a,b)=>a-b)
//     console.log(number)
// }
// number()



// var number=(num)=>{
//     var number=20
//     for(var i=1; i<=number; i++){
//         if(i%2==0){
//             console.log(i,"even")
//         }
//         else{
//             console.log(i,"odd")
//         }
//     }
// }
// number()






// var array=(number)=>{
//     var number=[20,-6,28,49,17,48,-9,-53,-28]
//     for(var i in number){
//         if(number[i]>0){
//             console.log(number[i],"posstive")
//         }
//         else{
//             console.log(number[i],"neagtive")
//         }
//     }
// }
// array()

// var number=(num)=>{
//     var arr1=[12,67,98,45,37,27,40,68,90];
//     var arr2=[67,90,58,40,68,23,12,60,99];
//     var emptyarray=[]
//     for(var i of arr1){
//         if(arr2.includes(i)){
//             emptyarray.push(i)
//         }
//     }
//     console.log(emptyarray)
// }
// number()

// var numbers=(num)=>{
//     var array=[21,19,30,10,67,89,90,25,15,12,18];
//     var num =40
//     var emptyarray=[]
//     for(var i of array){
//         for(var j of array){
//             if(i+j==num){
//                 emptyarray.push([i,j])
//             }
//         }
//     }
//     console.log(emptyarray)
// }
// numbers()

// var number=(num)=>{
//     var array=[1,6,8,9,5,3,2,1,9,77,6,88,8];
//     var uniqueNumbers=[]
//     for(var i=0; i<array.length; i++){
//         if(uniqueNumbers.indexOf(array[i])== -1){
//             uniqueNumbers.push(array[i])
//         }
//     }
//     console.log(uniqueNumbers)
// }
// number()

// var number=(num)=>{
//     var number=[11,99,57,84,20];
//     var max=number[0]
//     var i=0
//     while(i<number.length){
//         if(number[i]>max){
//             max=number[i]
//         }
//         i=i+1
//     }
//     console.log(max)
// }
// number()

// var numbers=(num)=>{
//     var array=[11,12,13,15];
//     var output=[]
//     var i=0
//     while(i<array.length){
//         var j=1
//         while(j<array.length){
//             output.push(array.slice(i, j+1))
//             j=j+1
//         }
//         i=i+1
//     }
//     console.log(output)
// }
// numbers()

// var number=(num)=>{
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num=========")
//     var output={}
//     for(var i=1; i<=num; i++){
//         output[i]=i*i

//     }
//     console.log(output)
// }
// number()

// var number=(num)=>{
//     var array=[1,3,4,5,6,8,1,2,3,11,12,35,67,89,11,43,23];
//     var uniqueNumbers=[]
//     for(var i=0;i<array.length; i++){
//         if(uniqueNumbers.indexOf(array[i])== -1){
//             uniqueNumbers.push(array[i])
//         }
//     }
//     console.log(uniqueNumbers)
// }
// number()

// var array=(num)=>{
//     var number=[81,82,83,85];
//     var output=[]
//     var i=0
//     while(i<number.length){
//         var j=1
//         while(j<number.length){
//             output.push(number.slice(i,j+1))
//             j=j+1
//         }
//         i=i+1
//     }
//     console.log(output)
// }
// array()

// var number=(num)=>{
//     var number=[12,28,76,56,43,20,20,15,25,24,16,42];
//     var num=40
//     var emptyarray=[]
//     for(var i of number){
//         for(var j of number){
//             if(i+j==num){
//                 emptyarray.push([i,j])
//             }
//         }
       
//     }
//     console.log(emptyarray)
// }
// number()

// var numbers=(num)=>{
//     var number=[11,12,13,15];
//     var output=[]
//     var i=0
//     while(i<number.length){
//         var j=1
//         while(j<number.length){
//             output.push(number.slice(i,j+1))
//             j=j+1
//         }
//         i=i+1
//     }
//     console.log(output)
// }
// numbers()

// var num=(Number)=>{
//     var num=16
//      var output=[]
//      for(var i=1; i<=num; i++){
//         output[i]=i*i
//      }
//      return output
// }
// console.log(num())







// var number=(num)=>{
//     var readline =require("readline-sync")
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
// }
// number()

// var num=(Number)=>{
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
// }
// num()






// var firstNumber=(num)=>{
//     var num1=90
//     var num2=10
//     console.log(num+num1+num2)
// }
// firstNumber(10)




// var number =(num)=>{
//     var readline=require("readline-sync")
//     var num=readline.questionInt("enter the any num=======================")
//     var i=2
//     var count=0
//     while(i<=num){
//         if(num%i==0){
//             count=count+1
//         }
//         i=i+1
//     }
//     console.log("count===============================",count)
//     if(count==1){
//         console.log(count,"this is a prime number")
//     }
//     else{
//         console.log(count,"this is a not prime number")
//     }
// }
// number()











// var number = (num) => {
//     var readline = require("readline-sync")
//     var num = readline.questionInt("enter the any num==================")
//     var i = 2
//     var count = 0
//     while (i <= num) {
//         if (num % i == 0) {
//             count=count+1
//         }
//         i=i+1
//     }
//     console.log("count======================", count)
//     if (count == 1) {
//         console.log(count,"this is a prime number")
//     }
//     else {
//         console.log(count,"this is a not prime number")
//     }
//     var num = (number) => {
//         var readline = require("readline-sync")
//         var num1 = readline.questionInt("enter the any num1====================")
//         var i = 1
//         var sum = 0
//         while (i < num1) {
//             if (num1 % i == 0) {
//                 sum=sum+i
//             }
//             i=i+1
//         }
//         if (sum == num1) {
//             console.log(sum,"sum is a perfect number")
//         }
//         else {
//             console.log(sum,"sum is a not perfect number")
//         }
//     }
//     num()
// }
// number()

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var sum = array.reduce((acc, cureent) => {
//     return acc+cureent
// })
// console.log(sum)