// var new_number =new Promise((resolve, reject) => {
//     var array=[1,3,5,7,9,11,13,15,17]
//     var oddnumber=[]
//     var i=0
//     while(i<array.length){
//         if(array[i]%2!=0){
//             oddnumber.push(array[i])
//         }
//         i=i+1
//     }
//     if(oddnumber.length>0){
//         resolve(oddnumber)
//     }
//     else{
//         reject("this is a not oddnumber")
//     }
// })
// new_number.then((odd)=>{
//     console.log("odd================",odd)
// }).catch((error)=>{
//     console.log("error=====================",error)
// })

// const Numbers= new Promise((resolve, reject) => {
//     var array=[9,7,5,3,1,11,97,65,43,21,87];
//     var oddnumber=[]
//     for(var i=0; i<array.length; i++){
//         if(array[i]%2!=0){
//             oddnumber.push(array[i])
//         }
//         if(oddnumber.length>0){
//             resolve(oddnumber)
//         }
//         else{
//             reject("this is a not oddnumber")
//         }
//     }
// })
// Numbers.then((odd)=>{
//     console.log("odd====================",odd)
// }).catch((error)=>{
//     console.log("error=======================",error)
// })

// let new_pro =new Promise((resolve, reject) => {
//     var array=[7,71,19,41,63,31,39,79,85,67];
//     var oddnumber=[]
//     for(var i in array){
//         if(array[i]%2==0){
//             oddnumber.push(array[i])
//         }
//         if(oddnumber.length>0){
//             resolve(oddnumber)
//         }
//         else{
//             reject("this is not odd number")
//         }
//     }
// })
// new_pro.then((odd)=>{
//     console.log("odd=================",odd)
// }).catch((error)=>{
//     console.log("error====================",error)
// })

// const new_number=new Promise((resolve, reject) => {
//     var array=[99,97,95,93,91,89,87,85,83,81,79,77,75,73,71];
//     var oddnumber=[]
//     for(var i of array){
//         if(i%2!=0){
//             oddnumber.push(i)
//         }
//         if(oddnumber.length>0){
//             resolve(oddnumber)
//         }
//         else{
//             reject("this is a not oddnumber")
//         }
//     }
// })
// new_number.then((oddnumber)=>{
//     console.log("oddnumber==========================",oddnumber)
// }).catch((error)=>{
//     console.log("error========================",error)
// })


// var new_number=new Promise((resolve, reject) => {
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num===================")
//     var i=1
//     var oddnumber=[]
//     while(i<=num){
//         if(i%2!=0){
//             oddnumber.push(i)
//         }
//         i=i+1
//     }
//     if(oddnumber.length>0){
//         resolve(oddnumber)
//     }
//     else{
//         reject("this is a not oddnumber")
//     }
// })
// new_number.then((oddnumber)=>{
//     console.log("oddnumber====================",oddnumber)
// }).catch((error)=>{
//     console.log("error===================",error)
// })

// var number=new Promise((resolve, reject) => {
//     var num=[1,2,3,4,5,6,7,8,9,11,19,28,45,67,79];
//     var oddnumber=[]
//     var i=0
//     while(i<num.length){
//         if(num[i]%2!==0){
//             oddnumber.push(num[i])
//         }
//         i=i+1
//     }
//     if(oddnumber.length>0){
//         setTimeout(()=>{
//             resolve(oddnumber)
//         },2000)
    
//     }
//     else{
//         reject("this is a not found odd")
//     }
// })
// Numbers
// .then((oddnumber)=>{
//     console.log("oddnumber===============",oddnumber)
// })
// .catch((error)=>{
//     console.log("error=========================",error)
// })

// var Numbers =new Promise((resolve, reject) => {
//     var array=[11,18,23,45,67,89,19,21,31,43,68]
//     var oddnumber=[]
//     for(var i=0; i<array.length; i++){
//         if(array[i]%2!==0){
//             oddnumber.push(array[i])
//         }
//         if(oddnumber!==undefined){
//             setTimeout(()=>{
//                 resolve(oddnumber)
//             },7000)
//         }
//         else{
//             reject("this is a not odd number")
//         }
//     }
// })
// Numbers
// .then((oddnumber)=>{
//     console.log("oddnumber================",oddnumber)
// })
// .catch((error)=>{
//     console.log("error========================",error)
// })

// var new_number =new Promise((resolve, reject) => {
//     var array=[19,29,39,49,59,69,79,21,31,45,43];
//     var oddnumber=[]
//     for(var i in array){
//         if(array[i]%2==0){
//             oddnumber.push(array[i])
//         }
//         if(oddnumber.length>0){
//             setTimeout(()=>{
//                 resolve(oddnumber)
//             },3000)
//         }
//         else{
//             reject("this is a not odd number")
//         }
//     }
// })
// new_number
// .then((oddnumber)=>{
//     console.log("oddnumber=================",oddnumber)
// })
// .catch((error)=>{
//     console.log("error===================",error)
// })


// var new_number =new Promise((resolve, reject) => {
//     var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
//     var oddnumber=[]
//     for(var i of array){
//         if(i%2!==0){
//             oddnumber.push(i)
//         }
//         if(oddnumber.length>0){
//             setTimeout(()=>{
//                 resolve(oddnumber)
//             },7000)
//         }
//         else{
//             reject("this is a not oddnumber")
//         }
//     }
// })
// new_number
// .then((oddnumber)=>{
//          console.log("oddnumber=================",oddnumber)
// }).catch((error)=>{
//     console.log("error===============================",error)
// })