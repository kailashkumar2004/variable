// var Promise1 =new Promise((resolve, reject) => {
//     resolve("manvi")
// });
// var Promise2= new Promise((resolve, reject) => {
//     if(true){
//         resolve(18)
//     }
// })
// var Promise3 =new Promise((resolve, reject) => {
//     resolve("mahi")
// })
// const all_promise=Promise.all([Promise1,Promise2,Promise3])
// all_promise.then((result)=>{
//     console.log(result)
// })


// let Promise1 =new Promise((resolve, reject) => {
//     var array=[2,3,4,5,6,7,8,9];
//     var even=[]
//     for(var i in array){
//         if(array[i]%2==0){
//             even.push(array[i])
//         }
//         resolve(even)
//     }
// })
// let Promise2 =new Promise((resolve, reject) => {
//     var array=[3,5,6,7,8,9,11,12,13,21]
//     var odd=[]
//     for(var i in array){
//         if(array[i]%2!==0){
//             odd.push(array[i])
//         }
//         resolve(odd)
//     }
// });
// var Promise3 =new Promise((resolve, reject) => {
//     var array=[12,39,40,60,80,92,100,106]
//     var max=array[0]
//     var i=0
//     while(i<array.length){
//         if(array[i]>max){
//             max=array[i]
//         }
//         i=i+1
//     }
//         resolve(max)

// });
// const all_promise=Promise.all([Promise1,Promise2,Promise3]);
// all_promise.then((result)=>{
//     console.log(result)
// });


// var number1 =new Promise((resolve, reject) => {
//     var num1=10
//     var num2=90
//     resolve(num1+num2)
// })
// var number2=new Promise((resolve, reject) => {
//     var num1=90
//     var num2=20
//     resolve(num1-num2)
// })
// var number3 =new Promise((resolve, reject) => {
//     var a=9
//     var b=8
//     resolve(a*b)
// })
// var all_promise=Promise.all([number1,number2,number3])
// all_promise.then((result)=>{
//     console.log(result)
// })



// var Promise1 = new Promise((resolve, reject) => {
//     var num1 = 90;
//     var num2 = String(num1);
//     resolve([num2, typeof num2]);
//   });

//   var Promise2 = new Promise((resolve, reject) => {
//     var a = 9;
//     var b = 8;

//     if (a < b) {
//       resolve(b);
//     } else if (a > b) {
//       resolve(a);
//     } else {
//       resolve(b);
//     }
//   });

//   var all_promise = Promise.all([Promise1, Promise2]);
//   all_promise
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// var Promise1 =new Promise((resolve, reject) => {
//     var array=[12,34,56,78,90,21,34,95,67,81];
//     var sum=0
//     var i=0
//     while(i<array.length){
//         sum=sum+array[i]
//         i=i+1
//     }
//     resolve(sum)
// })
// var Promise2 =new Promise((resolve, reject) => {
//     var arr1=[2,3,4,5,6,7,8,9,11,19,17,16,14];
//     var arr2=[10,20,42,67,87,2,4,6,1,5,191,14];
//     var emptyarray=[]
//     for(var i of arr1){
//         if(arr2.includes(i)){
//             emptyarray.push(i)
//         }
//     }
//     resolve(emptyarray)
// })
// var Promise3 =new Promise((resolve, reject) => {
//     var array=[12,18,23,45,11,19,15,15,24,78,45,90];
//     var emptyarray=[]
//     var num=30
//     for(var i of array){
//         for(var j of array){
//             if(i+j==num){
//                 emptyarray.push([i,j])
//             }
//         }
//     }
//     resolve(emptyarray)
// })
// var all_promise=Promise.all([Promise1,Promise2,Promise3]);
// all_promise.then((result)=>{
//     console.log(result)
// })

// var Promise1=new Promise((resolve, reject) => {
//     var array=[1,6,8,9,5,4,3,2,11,19,28,45,76,90,1,3,2,5,11,15,19,15];
//     var uniqueNumber=[]
//     for(var i=0; i<array.length; i++){
//         if(uniqueNumber.indexOf(array[i])== -1){
//             uniqueNumber.push(array[i])
//         }
//     }
//     resolve(uniqueNumber)
// })
// var Promise2 =new Promise((resolve, reject) => {
//     var number=12
//     var output={}
//     for(var i=1; i<=number; i++){
//         output[i]=i*i
//     }
//     resolve(output)
// })
// var Promise3 =new Promise((resolve, reject) => {
//     var array=[21,22,23,25]
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
//     resolve(output)
// });
// var all_promise=Promise.all([Promise1,Promise2,Promise3])
// all_promise.then((result)=>{
//     console.log(result)
// })



// var Promise1 = new Promise((resolve, reject) => {
//     var array = [19, 10, 15, 28, 30, 50, 70, 80, 90];
//     var sum = array.reduce((acc, current) => {
//         return acc + current;
//     });
//     resolve(sum);
// });

// var Promise2 = new Promise((resolve, reject) => {
//     var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19];
//     function mynumber(...args) {
//         resolve(args);
//     }
//     mynumber(...array);
// });

// var all_promise = Promise.all([Promise1, Promise2]);
// all_promise.then((result) => {
//     console.log(result);
// });





// var Promise1 = new Promise((resolve, reject) => {
//      var readline =require("readline-sync")
//     var num = readline.questionInt("Enter any number================ ");
//     var i = 2;
//     var count = 0;

//     while (i <= num) {
//         if (num % i == 0) {
//             count = count + 1;
//         }
//         i = i + 1;
//     }

//     if (count == 1) {
//         resolve({ count,prime:true });
//     } else {
//         resolve({  count, Prime: false });
//     }
// });

// var Promise2 = new Promise((resolve, reject) => {
//     var readline =require("readline-sync")
//     var num1 = readline.questionInt("Enter any number=================== ");
//     var i = 1
//     var sum = 0;
//     while (i < num1) {
//         if (num1 % i == 0) {
//             sum = sum + i;
//         }
//         i = i + 1;
//     }

//     if (sum == num1) {
//         resolve({ isPerfect: true });
//     } else {
//         resolve({ isPerfect: false });
//     }
// });
// var all_promise = Promise.all([Promise1, Promise2]);

// all_promise.then((result) => {
//     console.log(result);
// });

