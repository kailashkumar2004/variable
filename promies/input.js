// var new_pro=new Promise((resolve, reject) => {
//     var array=[43,44,45,37];
//     var output=[];
//     var i=0
//     while(i<array.length){
//         var j=1
//         while(j<array.length){
//             output.push(array.slice(i,j+1))
//             j=j+1
//         }
//         i=i+1
//     }
//     if(output!==undefined){
//         resolve(output)
//     }
//     else{
//         reject("this is a not number")
//     }
// })
// new_pro.then((output)=>{
//     console.log("output================",output)
// }).catch((error)=>{
//     console.log("error====================",error)
// })