// var new_promise =new Promise((resolve, reject) => {
//     var arr1=[11,19,21,34,50,90,87,65,43,70];
//     var arr2=[70,43,50,90,21,56,11,18,53,29,87]
//     var emptyarray=[];
//     for(var i of arr1){
//         if(arr2.includes(i)){
//             emptyarray.push(i)
//         }
//     }
//     if(emptyarray!==undefined){
//         resolve(emptyarray)
//     }
//     else{
//         reject("this is a not inculdes")
//     }
// })
// new_promise.then((emptyarray)=>{
//     console.log("emptyarray=================",emptyarray)
// }).catch((error)=>{
//     console.log("error=======================",error)
// })