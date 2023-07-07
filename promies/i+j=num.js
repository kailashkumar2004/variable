// var new_promise =new Promise((resolve, reject) => {
//     var number=[10,20,30,19,21,20,48,59,60,12,18,25,15,54,17,23]
//     var num=40
//     var emptyarray=[]
//     for(var i of number){
//         for(var j of number){
//             if(i+j==num){
//                 emptyarray.push([i,j])
//             }
//         }
//     }
//     if(emptyarray!==undefined){
//         resolve(emptyarray)
//     }
//     else{
//         reject("this is anot number")
//     }
// })
// new_promise.then((num)=>{
//     console.log("num==================",num)
// }).catch((error)=>{
//     console.log("error====================",error)
// })