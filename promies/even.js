// var mynumber =new Promise((resolve, reject) => {
//     var number=[2,4,6,8,10,12];
//     var even=[]
//     var i=0
//     while(i<number.length){
//       if(number[i]%2==0){
//           even.push(number[i])
//       }
//       i=i+1
//     }
//     if(even.length>0){
//       resolve(even)
// }
// })
// mynumber.then((evennumber)=>{
//       console.log("evennumber================",evennumber)
// })
// .catch((error)=>{
//      console.log("error===================",error)
// })


// var new_number =new Promise((resolve, reject) => {
//     var array=[2,8,10,11,18,16,14,17];
//     var evennumber=[]
//     var i=0
//     while(i<array.length){
//         if(array[i]%2==0){
//             evennumber.push(array[i])
//         }
//         i=i+1
//     }
//     if(evennumber.length>0){
//         resolve(evennumber)
//     }
//     else{
//         reject("evennumber is not found")
//     }
// })
// new_number.then((evennumber)=>{
//                console.log("evennumber=====================",evennumber)
// }).catch((error)=>{
//     console.log("error=====================",error)
// })


// var new_number =new Promise((resolve, reject) => {
//     var number=[24,68,98,100,24,48,68,78,12];
//     var evennumber=[];
//     for(var i=0; i<number.length; i++){
//         if(number[i]%2==0){
//             evennumber.push(number[i])
//         }
//         if(evennumber.length>0){
//             resolve(evennumber)
//         }
//         else{
//             reject("even number is not found")
//         }
//     }
// })
// new_number.then((even)=>{
//     console.log("even================",even)
// }).catch((error)=>{
//     console.log("error====================",error)
// })

// var number =new Promise((resolve, reject) => {
//     var array=[90,78,82,24,38,46,52,10,86,20];
//     var evennumber=[];
//     for(var i in array){
//         if(array[i]%2==0){
//             evennumber.push(array[i])
//         }
//         if(evennumber.length>0){
//             resolve(evennumber)
//         }
//     }
// })
// number.then((even)=>{
//     console.log("even=================",even)
// }).catch((error)=>{
//     console.log("error===================",error)
// })

// var Numbers =new Promise((resolve, reject) => {
//     var array=[10,18,26,48,58,60,78,80,90];
//     var evennumber=[];
//     for(var i of array){
//         if(i%2==0){
//             evennumber.push([i])
//         }
//         if(evennumber.length>0){
//             resolve(evennumber)
//         }
//         else{
//             reject("not even number found")
//         }
//     }
// })
// Numbers.then((even)=>{
//     console.log("even==============",even)
// }).catch((error)=>{
//     console.log("error===================",error)
// })

// var new_number =new Promise((resolve, reject) => {
//     var readline =require("readline-sync")
//     var num =readline.questionInt("enter the any num==============")
//     var i=1
//     var evennumber=[]
//     while(i<=num){
//         if(i%2==0){
//           evennumber.push(i)
//         }
//         i=i+1
//     }
//     if(evennumber.length>0){
//         resolve(evennumber)
//     }
//     else{
//         reject("this is a not evennumber")
//     }
// })
// new_number.then((even)=>{
//     console.log("even====================",even)
// }).catch((error)=>{
//     console.log("error====================",error)
// })



// var number =new Promise((resolve, reject) => {
//     var array=[8,9,2,3,4,5,6,7,81]
//     var even=[]
//     var i=0
//     while(i<array.length){
//         if(array[i]%2==0){
//             even.push(array[i])
//         }
//         i=i+1
//     }
//     if(even.length>0){
//         setTimeout(()=>{
//             resolve(even)
//         },2000)
//     }
//     else{
//         reject("this is a not found even")
//     }
// })
// number
// .then((even)=>{
//     console.log("even======================",even)
// }).catch((error)=>{
//     console.log("error=======================",error)
// })