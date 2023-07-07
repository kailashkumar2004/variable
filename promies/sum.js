// var numbers =new Promise((resolve, reject) => {
//     var array=[12,38,90,76,54,43,21];
//     var sum=0
//     var i=0
//     while(i<array.length){
//         sum=sum+array[i]
//         i=i+1
//     }
//     if(sum!==undefined){
//         resolve(sum)
//     }
//     else{
//         reject("this is a not sum number")
//     }
// })
// numbers.then((sum)=>{
//     console.log("sum=================",sum)
// }).catch((error)=>{
//     console.log("error========================",error)
// })

// var element =new Promise((resolve, reject) => {
//     var array=[110,120,130,140,150,160,170,180,190,200];
//     var sum=0
//     for(var i=0; i<array.length; i++){
//         sum=sum+array[i]
//     }
//     if(sum!==undefined){
//         resolve(sum)
//     }
//     else{
//         reject("this is a not sum number")
//     }
// })
// element.then((sum)=>{
//     console.log("sum=====================",sum)
// }).catch((error)=>{
//     console.log("error==========================",error)
// })

// var Numbers =new Promise((resolve, reject) => {
//     var array=[10,20,30,40,50,60,70,80,90,100];
//     var sum=0
//     for(var i in array){
//         sum=sum+array[i]
//     }
//     if(sum!==undefined){
//         resolve(sum)
//     }
//     else{
//         reject("this is not sum ")
//     }
// })
// Numbers.then((sum)=>{
//     console.log("sumnumber======================",sum)
// }).catch((error)=>{
//     console.log("error=========================",error)
// })

// var numbers =new Promise((resolve, reject) => {
//     var array=[100,200,300,400,500,600,700,800,900,1000]
//     var sum=array[0]
//     for(var i of array){
//         sum=sum+i
//     }
//     if(sum!==undefined){
//         resolve(sum)
//     }
//     else{
//         reject("this is a not sum number")
//     }
// })
// numbers.then((sum)=>{
//     console.log("sumnumber==============",sum)
// }).catch((error)=>{
//     console.log("error==========================",error)
// })