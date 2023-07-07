// const my_pro =new Promise((resolve, reject) => {
//     var array=[1,4,6,7,8,9,1,19,10,29,30,49,58,6,7,4,8,9];
//     var uniqueNumber=[];
//     for(var i=0; i<array.length; i++){
//         if(uniqueNumber.indexOf(array[i])== -1){
//             uniqueNumber.push(array[i])
//         }
//         if(uniqueNumber.length>0){
//             resolve(uniqueNumber)
             
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



// nst my_pro =new Promise((resolve, reject) => {
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