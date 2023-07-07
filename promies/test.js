// const my_pro =new Promise((resolve, reject) => {
//     var array=[1,4,6,7,8,9,1,19,10,29,30,49,58,6,7,4,8,9];
//     var uniqueNumber=[];
//     for(var i=0; i<array.length; i++){
//         if(uniqueNumber.indexOf(array[i])== -1){
//             uniqueNumber.push(array[i])
//         }
//         if(uniqueNumber.length>0){
//         setTimeout(()=>{
//             resolve(uniqueNumber)
//         },5000)
//         }
//         else{
//             reject("this is a not uniqueNumner")
//         }
//     }
    
// })
// my_pro.then((uniqueNumber)=>{
//     console.log("uniqueNumber========================",uniqueNumber)
// }).catch((error)=>{
//     console.log("error========================",error)
// })

// var  new_pro =new Promise((resolve, reject) => {
//     var array=[21,99,100,54,78,90,65,42,27,500,900,879];
//     var max=array[0]
//     var i=0
//     while(i<array.length){
//         if(array[i]>max){
//             max=array[i]
        
//         }
//         i=i+1
//     }
//     if(max !== undefined){
//         setTimeout(()=>{
//             resolve(max)
//         },6000)
//     }
//     else{
//         reject("this is a not maxnumber")
//     }
// })
// new_pro.then((max)=>{
//     console.log("max=================",max)
// }).catch((error)=>{
//     console.log("error========================",error)
// })

// var new_pro = new Promise((resolve, reject) => {
//     var array = [21, 99, 100, 54, 78, 90, 65, 42, 27, 500, 900, 879];
//     var max = array[0];
//     var i = 0;

//     while (i < array.length) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//         i = i + 1;
//     }

//     if (max !== undefined) {
//     setTimeout(()=>{
//         resolve(max)
//     },3000)
//     } else {
//         reject("No maximum number found.");
//     }
// });
// new_pro.then((max) => {
//         console.log("Maximum Number:", max);
//     }).catch((error) => {
//         console.log("Error:", error);
//     });









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

// var Numbers=new Promise((resolve, reject) => {
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