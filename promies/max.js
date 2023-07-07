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
//         resolve(max)
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


// var number =new Promise((resolve, reject) => {
//     var array=[32,89,90,75,5,28,49,50,60,80,110];
//     var max=array[0];
//     for(var i=0; i<array.length; i++){
//         if(array[i]>max){
//             max=array[i]
            
//         }
       
//         }
//           if(max!==undefined){
//             resolve(max)
//           }
//         else{
//             reject("this is a not maxnumber")
//         }
          
// })
// number.then((max)=>{
//     console.log("max========================",max)
// }).catch((error)=>{
//     console.log("error=========================",error)
// })

// var new_number =new Promise((resolve, reject) => {
//     var array=[10,20,30,40,50,60,70,80,90,199];
//     var max=array[0]
//     for(var i in array){
//         if(array[i]>max){
//             max=array[i]
//         }
//     }
//     if(max!==undefined){
//         resolve(max)
//     }
//     else{
//         reject("this is a not max number")
//     }
// })
// new_number.then((max)=>{
//     console.log("max==============",max)
// }).catch((error)=>{
//     console.log("error======================",error)
// })

// var new_pro =new Promise((resolve, reject) => {
//     var array=[90,879,563,967,136,321,109,1090];
//     var max=array[0];
//     for(var i of array){
//         if(i>max){
//             max=[i]
//         }
//     }
//     if(max!==undefined){
//         resolve(max)
//     }
//     else{
//         reject("this is a not max number")
//     }
// })
// new_pro.then((max)=>{
//     console.log("max===================",max)
// }).catch((error)=>{
//     console.log("error=========================",error)
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
