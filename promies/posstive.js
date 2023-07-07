
// var mynum = new Promise((resolve, reject) => {
//     var number=[1,2,3,4,5,6,7];
//     var  i=0
//     var posstive=[];
//     while(i<number.length){
//         if(number[i]>0){
//             posstive.push(number[i])
//         }
//         i=i+1
//     }
//     if(posstive.length>0){
//         resolve(posstive)
//     }
//     else{
//         reject('No positive numbers found.');
//     }
// })
// mynum.then((posstive)=>{
//           console.log("posstive===========================",posstive)
// })
// .catch((error)=>{
//        console.log("error====================",error)
// })


// let my_pro =new Promise((resolve, reject) => {
//     var array=[12,18,19,37,68,90,82,54];
//     var positive=[]
//     for(var i=0; i<array.length; i++){
//         if(array[i]>0){
//             positive.push(array[i])
//         }
//         if(positive.length>0){
//             resolve(positive)
//         }
//         else{
//             reject("not posstive found")
//         }
//     }
// })
// my_pro
// .then((positive)=>{
//        console.log("posstive======================",positive)
// }).catch((error)=>{
//      console.log("error==================",error)
// })


// let mynumber =new Promise((resolve, reject) => {
//     let array=[21,78,90,45,63,21,70,82];
//     var positive=[]
//     for(var i in array){
//         if(array[i]>0){
//             positive.push(array[i])
//         }
//         if(positive.length>0){
//             resolve(positive)
//         }
//         else{
//             reject("not posstive found")
//         }
//     }
// })
// mynumber.then((positive)=>{
//             console.log("posstive===================",positive)
// }).catch((error)=>{
//            console.log("error========================",error)
// })

// var number =new Promise((resolve, reject) => {
//     var array=[3,8,9,65,43,21,19,37,58,90];
//     var positive=[]
//     for(var i of array){
//         if(i>0){
//             positive.push(i)
//         }
//         i=i+1
//     }
//     if(positive.length>0){
//         resolve(positive)
//     }
//     else{
//         reject("no posstive number")
//     }
// })
// number.then((positive)=>{
//           console.log("posstive====================",positive)
// }).catch((error)=>{
//     console.log("error=========================",error)
// })

// var Numbers =new Promise((resolve, reject) => {
//     var num=[98,75,53,31,82,10,39];
//     var posstive=[];
//     var i=0
//     while(i<num.length){
//         if(num[i]>0){
//             posstive.push(num[i])
//         }
//         i=i+1
//     }
//     if(posstive.length>0){
//         resolve(posstive)
//     }
//     else{
//         reject("posstive not found number")
//     }
// })
// Numbers.then((posstive)=>{
//     console.log("posstive===================",posstive)
// }).catch((error)=>{
//           console.log("error=======================",error)
// })