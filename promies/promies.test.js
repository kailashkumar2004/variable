// let name= new Promise((resolve, reject)=>{
//     var name1="kailash";
//     var name2="sonam";
//     if(name1){
//         var b="i am kailash" 
//         resolve(b)
//     }
//     else if(name2){
//         var c="false"
//         reject(c)
//     }
//     else{
//         ("i am rejected")
//     }
// })
// name.then((come)=>{
//       console.log("come======================",come)
// }).catch((go)=>{
//     console.log("kailash=======================",kailash)

// }).finally((m)=>{
//     console.log("hapend=======================",m)
// })

// var mynumber =new Promise((resolve, reject) => {
//     var num1=11
//     var num2=11
//     if(num1){
//         var k="i am very happy"
//         resolve(k)
//     }
//     if(num1==num2){
//         var hyy="i like this"
//         resolve(hyy)
//     }
//     else{
//         ("i will try")
//     }
// })
// mynumber.then((hello)=>{
//     console.log("hello===================",hello)
// }).then((ever)=>{
//     console.log("ever========================",ever)

// }).finally((nice)=>{
//     console.log("very emplatcite=====================",nice)
// })
// var mynumber = new Promise((resolve, reject) => {
//     var num1 = 11;
//     var num2 = 19;
    
//     if (num1) {
//       var k = "I am very happy";
//       resolve(k);
//     }
    
//     if (num1 == num2) {
//       var hyy = "I like this";
//       resolve(hyy);
//     } 
//     else {
//       reject(errorMessage);
//     }
//   });
//   mynumber
//     .then((hello) => {
//       console.log("hello===================", hello);
//       return hello;
//     })
//     .then((ever) => {
//       console.log("ever========================", ever);
//       return ever;
//     })
//     .finally((nothanks) => {
//       console.log("no thanks=====================");
//     })
//     .catch((error) => {
//       console.log("error=========================", error);
//     });
  
  
  
  
  
  
  
  


// var new_number =new Promise((resolve, reject) => {
//     var num1=99;
//     var num2=90
//     if(num1){
//     var name="kailash"
//     resolve(name)
//     }
//     else if(num2){
//         var c="monu"
//         reject(c)
//     }
//     else{
//          ("i will try")
//     }

// })
// new_number
// .then((Number)=>{
//     console.log("number===================",Number)
// }).catch((never)=>{
//     console.log("never====================",never)
// }).finally((error)=>{
//     console.log("error=======================",error)
// })


var new_number =new Promise((resolve, reject) => {
    var num1="99"
    var num2=19
    if(num1==num2){
        var a="i am kailash kar singh"
        resolve(a)
    }
    else if(num1>num2){
        var b="kailash"
        resolve(b)
    }
    else{
        reject("no thanks")
    }
})
new_number.then((heloo)=>{
    console.log("helo====================",heloo)
}).then((hyyyyyyyy)=>{
    console.log("hyy============================",hyyyyyyyy)
}).finally((heeyyyy)=>{
    console.log("hey=======================",heeyyyy)
}).catch((error)=>{
    console.log("error======================",error)
})