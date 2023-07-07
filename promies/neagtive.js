// const my_pro =new Promise((resolve, reject) => {
//     var number=[-9,-8,-6,-4,-2,-1,-11];
//     var i=0
//     var neagtive=[];
//     while(i<number.length){
//         if(number[i]<0){
//             neagtive.push(number[i])
//         }
//         i=i+1
//         if(neagtive.length>0){
//             resolve(neagtive)
//         }
//         else{
//             reject("no neagtive nods")
//         }
//     }    
// })
// my_pro.then((neagtive)=>{
//        console.log("neagtive===================",neagtive)
// }).catch((error)=>{
//     console.log("err==================",error)
// })


// var new_number =new Promise((resolve, reject) => {
//     var array=[-7,-9,-11,-5,-8,-10]
//     var neagtive=[]
//     var i=0
//     while(i<array.length){
//         if(array[i]<0){
//             neagtive.push(array[i])
//         }
//         i=i+1
//     }
//     if(neagtive.length>0){
//         resolve(neagtive)
//     }
//     else{
//         reject("no neagtive number")
//     }
// })
// new_number
// .then((neagtive)=>{
//        console.log("neagtive====================",neagtive)
// }).catch((error)=>{
//        console.log("error==================",error)
// })


// var number =new Promise((resolve, reject) => {
//     var array=[-9,-65,-32,-12,-85,-46];
//     var neagtive=[]
//     for(var i in array){
//         if(array[i]<0){
//             neagtive.push(array[i])
//         }
//         i=i+1
//     }
//     if(neagtive.length>0){
//         resolve(neagtive)
//     }
//     else{
//         reject("not neagtive number")
//     }
// })
// number.then((neagtive)=>{
//           console.log("neagtive=====================",neagtive)
// }).catch((error)=>{
//            console.log("error=======================",error)
// })