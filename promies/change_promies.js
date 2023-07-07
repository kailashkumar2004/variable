// let firstPromise = new Promise((resolve, reject) => {
//     var a="Hello I am Here"
// 	resolve(a);
// })
// firstPromise.then((result) => {
// 		console.log("-------------",result);
// 		return new Promise((resolve, reject) => {
// 			resolve(result +" "+ "GeeksforGeeks!");
// 		}).then((result) => {
// 				console.log("============",result);
//                 return new Promise((resolve,reject)=>{
//                     setTimeout(()=>{
//                         resolve(result)
//                     },3000)
//                 }).then((result)=>{
//                     console.log("result---------",result)
//                 })
// 			});
// 	})


// var firstPromise =new Promise((resolve, reject) => {
//     var readline =require("readline-sync")
//     var array=[12,32,45,67,89,65,30,18,20,46,78]
//     var i=1
//     var even=[]
//     while(i<array.length){
//         if(array[i]%2==0){
//             even.push(array[i])
//         }
//         i=i+1
//     }
//     if(even.length>0){
//         resolve(even)
//     }
//     else{
//         reject("this is a not even")
//     }
// })
// firstPromise.then((even)=>{
//     console.log("even================",even)
//     return new Promise((resolve, reject) => {
//         var  array=[1,3,5,7,9,11,13,15,17,19];
//         var odd=[]
//         var i=0
//         while(i<array.length){
//             if(array[i]%2!=0){
//                 odd.push(array[i])
//             }
//             i=i+1
//         }
//         if(odd.length>0){
//             resolve(odd)
//         }
//         else{
//             reject("this is a not odd")
//         }
//     }).then((odd)=>{
//         console.log("odd=======================",odd)
//     }).catch((error)=>{
//         console.log("error===================",error)
//     })
// })


// var new_number = new Promise((resolve, reject) => {
//     var array = [-1, 2, -3, -4, 5, -6, 7, 8, -9, 11, 18, -21, 39, 45, -76, 90, 81];
//     var positive = [];
//     var i = 0
//     while (i < array.length) {
//         if (array[i] > 0) {
//             positive.push(array[i])
//         }
//         i = i + 1
//     }
//     if (positive.length > 0) {
//         resolve(positive)
//     }
//     else {
//         reject("this is a not posstive")
//     }
// })
// new_number.then((heloo) => {
//     console.log("hello=================", heloo)
//     return new Promise((resolve, reject) => {
//         var array = [-9,-7,-8,3,-2,1,-4,-5,-11]
//         var neagtive = []
//         for (var i = 0; i < array.length; i++) {
//             if (array[i]<0) {
//                 neagtive.push(array[i])
//             }
//             if (neagtive.length > 0) {
//                 setTimeout(() => {
//                     resolve(neagtive)
//                 }, 4000)
//             }
//             else {
//                 reject("this is a not neagtive")
//             }
//         }
//     }).then((never) => {
//         console.log("never==========================", never)
//         return new Promise((resolve, reject) => {
//             var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,3,4,5,6,7,8,11,19,18,17,21];
//             var uniqueNumber=[]
//             for(var i=0; i<array.length; i++){
//                 if(uniqueNumber.indexOf(array[i])== -1){
//                     uniqueNumber.push(array[i])
//                 }
//                 if(uniqueNumber!==undefined){
//                     setTimeout(()=>{
//                         resolve(uniqueNumber)
//                     },8000)
//                 }
//                 else{
//                     reject("this is a not  uniquNumber")
//                 }
//             }

//         }).then((kailash)=>{
//             console.log("kailash==============================",kailash)
//         }).catch((error)=>{
//             console.log("error==============================",error)
//         })
//     })
// })


// var new_number =new Promise((resolve, reject) => {
//     var num=21
//     var num2=90
//     if(num>num2){
//         resolve("right")
//     }
//     else if(num==num2){
//         resolve("turu")
//     }
//     else if(num<num2){
//         resolve("grate")
//     }
//     else{
//         reject("this is a wrong")
//     }
// })
// new_number.then((dimpal)=>{
//     console.log("dimpal========================",dimpal)
//     return new Promise((resolve, reject) => {
//         var array=[90,87,65,43,32,21,12,67,89,128,100,160];
//         var max=array[0]
//         for(var i in array){
//             if(array[i]>max){
//                 max=array[i]
//             }
//             if(max!==undefined){
//                 setTimeout(()=>{
//                     resolve(max)
//                 },5000)
//             }
//         }

//     }).then((pushapa)=>{
//         console.log("pushapa=================",pushapa);
//         return new Promise((resolve, reject) => {
//             var num1=99
//             var num2=80
//             var num3=93
//             if(num1==num2 && num2>num3){
//                 resolve("first condation is a wrong")
//             }
//             else if(num1>num2 && num1<num3){
//                 resolve("secound condation is a right")
//             }
//             else if(num1>=num3 && num2<num3){
//                 resolve("third condation is a right")
//             }
//             else{
//                 reject("this is a not number")
//             }
//         }).then((manvi)=>{
//             console.log("manvi====================",manvi)
//         }).catch((error)=>{
//             console.log("error====================",error)
//         })
//     })
// })


// var Numbers =new Promise((resolve, reject) => {
//     var arr1=[1,2,3,4,5,6,7,8,9];
//     var arr2=[9,8,7,6,4,1,12,13,14];
//     var emptarray=[]
//     for(var i of arr1){
//         if(arr2.includes(i)){
//             emptarray.push(i)
//         }
//         if(emptarray!==undefined){
//             setTimeout(()=>{
//                 resolve(emptarray)
//             },7000)
//         }
//         else{
//             reject("this is a not number")
//         }
//     }
// })
// Numbers.then((komal)=>{
//     console.log("komal======================",komal)
//     return new Promise((resolve, reject) => {
//         var array=[12,18,15,15,32,45,67,89,90,19,11,17,13,15,19];
//         var emptarray=[]
//         var num=30
//         for(var i of array){
//             for(var j of array){
//                 if(i+j==num){
//                     emptarray.push([i,j])
//                 }
//             }
//         }
//         if(emptarray!==undefined){
//             setTimeout(()=>{
//                 resolve(emptarray)
//             },9000)
//         }
//     }).then((love)=>{
//         console.log("love=====================",love)
//         return new Promise((resolve, reject) => {
//             var num=[1,8,9,11,2,13,16,18,17,21,20,30,40,50,60,8,9,2,1,13,11,17];
//             var uniqueNumner=[]
//             for(var i=0; i<num.length; i++){
//                 if(uniqueNumner.indexOf(num[i])== -1){
//                     uniqueNumner.push(num[i])
//                 }
//             }
//             if(uniqueNumner!==undefined){
//                 setTimeout(()=>{
//                     resolve(uniqueNumner)
//                 },7000)
//             }
//             else{
//                 reject("worng")
//             }
//         }).then((mom)=>{
//             console.log("mom===============",mom)
//         }).catch((error)=>{
//             console.log("error=========================",error)
//         })
//     })
// })



// var new_number =new Promise((resolve, reject) => {
//     var names="kailashkumarsingh";
//     var charcount={}
//     for(var i in names){
//         var char=names[i]
//         charcount[char]=(charcount[char] || 0)+1
//     }
//     if(charcount!==undefined){
//         setTimeout(()=>{
//             resolve(charcount)
//         },4000)
//     }
//     else{
//         reject("this is not char")
//     }
// })
// new_number.then((kailash)=>{
//     console.log("kailash================",kailash)
//     return new Promise((resolve, reject) => {
//         var name=["kailas","sourav","sonam","payal","royal","aarav"];
//         var keys=["name1","name2","name3","name4","name5","name6"];
//         var object={}
//         for(var i in name){
//             object[keys[i]]=name[i]
//         }
//         if(object!==undefined){
//             setTimeout(()=>{
//                 resolve(object)
//             },2000)
//         }
//         else{
//             reject("this is a not value")
//         }
//     }).then((laxman)=>{
//         console.log("laxman==================",laxman)
//     }).catch((error)=>{
//         console.log("error===================",error)
//     })
// })







var new_number 
= new Promise((resolve, reject) => {
    var array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    var sum = 0
    var i = 0
    while (i < array.length) {
        sum = sum + array[i]
        i = i + 1
    }
    if (sum !== undefined) {
        setTimeout(() => {
            resolve(sum)
        },8000)
    }
    else {
        reject("this is a not sum")
    }
})
new_number.then((sum) => {
    console.log("sum===========", sum)
    return new Promise((resolve, reject) => {
        var array = [12, 14, 56, 78, 90, 53, 21, 123];
        var sum = 0
        for (var i in array) {
            sum = sum + array[i]
        }
        if (sum !== undefined) {
            setTimeout(() => {
                resolve(sum)
                    , 9000
            })
        }
        else {
            reject("no sum")
        }
    })
        .then((result) => {
            console.log("result============", result)
        }).catch((error) => {
            console.log("error=============", error)
        })
})