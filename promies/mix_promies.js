// var new_number=new Promise((resolve, reject) => {
//     var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21, 23, 34, 54, 56, 76, 78, 99, 63, 45, 69];
//     var evennumber = []
//     var i = 1
//     while (i < array.length) {
//         if (array[i] % 2 == 0) {
//             evennumber.push(array[i])
//         }
//         i=i+1
//     }
//     if (evennumber.length > 0) {
//         resolve(evennumber)
//     }
//     else {
//         reject("this is  a not evennumber")
//     }
// })
// new_number.then((kailash) => {
//     console.log("kailash==============",kailash)
// }).catch((error) => {
//     console.log("error===============",error)
// })

// var new_number = new Promise((resolve, reject) => {
//     var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21, 23, 34, 54, 56, 76, 78, 99, 63, 45, 69];
//     var evennumber = []
//     for (var i = 0; i < array.length; i++){
//         if (array[i] % 2 == 0) {
//             evennumber.push(array[i])
//         }
//         if (evennumber.length > 0) {
//             resolve(evennumber)
//         }
//         else {
//             reject("this is a not even")
//         }
//     }
// })
// new_number.then((even) => {
//     console.log("even=================",even)
// }).catch((error) => {
//     console.log("error=======================",error)
// })

// var new_number = new Promise((resolve, reject) => {
//     var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21, 23, 34, 54, 56, 76, 78, 99, 63, 45, 69];
//     var evennumber = []
//     var i = 1
//     while (i < array.length) {
//         if (array[i] % 2 == 0) {
//             evennumber.push(array[i])
//         }
//         i = i + 1
//     }
//     if (evennumber.length > 0) {
//         setTimeout(() => {
//             resolve(evennumber)
//         }, 4000)

//     }
//     else {
//         reject("this is  a not evennumber")
//     }
// })
// new_number.then((kailash) => {
//     console.log("kailash==============", kailash)
// }).catch((error) => {
//     console.log("error===============", error)
// })

// var number=new Promise((resolve, reject) => {
//     var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 21, 23, 45, 44, 66, 87, 89, 90, 74, 30, 48];
//     var oddnumber = [];
//     var i = 1
//     while (i < array.length) {
//         if (array[i] % 2 != 0) {
//             oddnumber.push(array[i])
//         }
//         i=i+1
//     }
//     if (oddnumber.length > 0) {
//         resolve(oddnumber)
//     }
//     else {
//         reject("this is a not odd number")
//     }
// })
// number.then((manvi) => {
//     console.log("manvi=====================",manvi)
// }).catch((error) => {
//     console.log("error================",error)
// })

// var number=new Promise((resolve, reject) => {
//     var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 21, 23, 45, 44, 66, 87, 89, 90, 74, 30, 48];
//     var oddnumber = [];
//     var i = 1
//     while (i < array.length) {
//         if (array[i] % 2 != 0) {
//             oddnumber.push(array[i])
//         }
//         i=i+1
//     }
//     if (oddnumber.length > 0) {

//         setTimeout(() => {
//             resolve(oddnumber)
//         },6000)
//     }
//     else {
//         reject("this is a not odd number")
//     }
// })
// number.then((manvi) => {
//     console.log("manvi=====================",manvi)
// }).catch((error) => {
//     console.log("error================",error)
// })

// var Numbers=new Promise((resolve, reject) => {
//     var array = [1, -9, 2, -8, 3, -7, 4, -5, 11, -91, -28, 45, 67, 54, 31];
//     var posstive = [];
//     var i = 0
//     while (i < array.length) {
//         if (array[i] > 0) {
//             posstive.push(array[i])
//         }
//         i=i+1
//     }
//     if (posstive.length > 0) {
//         resolve(posstive)
//     }
//     else {
//         reject("this is a not posstive")
//     }
// })
// Numbers.then((pos) => {
//     console.log("pos==================",pos)
// }).catch((error) => {
//     console.log("error====================",error)
// })


// var Numbers=new Promise((resolve, reject) => {
//     var array = [1, -9, 2, -8, 3, -7, 4, -5, 11, -91, -28, 45, 67, 54, 31];
//     var posstive = [];
//     var i = 0
//     while (i < array.length) {
//         if (array[i] > 0) {
//             posstive.push(array[i])
//         }
//         i=i+1
//     }
//     if (posstive.length > 0) {
//         setTimeout(() => {
//             resolve(posstive)
//         },8000)
//     }
//     else {
//         reject("this is a not posstive")
//     }
// })
// Numbers.then((pos) => {
//     console.log("pos==================",pos)
// }).catch((error) => {
//     console.log("error====================",error)
// })


// var Numbers=new Promise((resolve, reject) => {
//     var array = [1, -9, 2, -8, 3, -7, 4, -5, 11, -91, -28, 45, 67, 54, 31];
//     var neagtive = [];
//     var i = 0
//     while (i < array.length) {
//         if (array[i] <0) {
//             neagtive.push(array[i])
//         }
//         i=i+1
//     }
//     if (neagtive.length > 0) {
//         setTimeout(() => {
//             resolve(neagtive)
//         },8000)
//     }
//     else {
//         reject("this is a not neagtive")
//     }
// })
// Numbers.then((neagtive) => {
//     console.log("neagtive==================",neagtive)
// }).catch((error) => {
//     console.log("error====================",error)
// })

// var Numbers = new Promise((resolve, reject) => {
//     var array = [1, -9, 2, -8, 3, -7, 4, -5, 11, -91, -28, 45, 67, 54, 31];
//     var posstive = [];
//     for (var i = 0; i < array.length; i++){
//         if (array[i] > 0) {
//             posstive.push(array[i])
//         }
//         if (posstive.length > 0) {
//             resolve(posstive)
//         }
//         else {
//             reject("this is a not posstive")
//         }
//     }
// })
// Numbers.then((posstive) => {
//     console.log("posstive===================",posstive)
// }).catch((error) => {
//     console.log("error=================",error)
// })


// var new_number=new Promise((resolve, reject) => {
//     var array = [12, 45, 67, 89, 90, 75, 100];
//     var max = []
//     var i = 0
//     while (i < array.length) {
//         if (array[i] > max) {
//             max = array[i]

//         }
//         i=i+1
//     }
//     if (max !== undefined) {
//         resolve(max)
//     }
//     else {
//         reject("not max")
//     }
// })
// new_number.then((max) => {
//     console.log("max==================",max)
// }).catch((error) => {
//     console.log("error========================",error)
// })



// var Promise1=new Promise((resolve, reject) => {
//     var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//     var sum = 0
//     var i = 1
//     while (i < array.length) {
//         sum = sum + array[i]
//         i=i+1
//     }
//     if (sum !== undefined) {
//         resolve(sum)
//     }
// })
// var Promise2=new Promise((resolve, reject) => {
//     var array = [1, 2, 78, 90, 65, 43, 80, 100, 23];
//     var max = []
//     for (var i = 0; i < array.length; i++){
//         if (array[i] > max) {
//             max=array[i]
//         }
//     }
//     if (max !== undefined) {
//         resolve(max)
//     }

// })
// var Promise3=new Promise((resolve, reject) => {
//     var array = [1, 23, 45, 6, 7, 8, 9, 1, 2, 6, 7, 8, 9, 11, 10, 29, 30, 45, 67, 54, 31, 40];
//     var uniqueNumber = []
//     for (var i = 0; i < array.length; i++){
//         if (uniqueNumber.indexOf(array[i]) == -1) {
//             uniqueNumber.push(array[i])
//         }
//     }
//     if (uniqueNumber !== undefined) {
//         resolve(uniqueNumber)
//     }
// })
// var all_promise = Promise.all([Promise1, Promise2, Promise3])
// all_promise.then((result) => {
//     console.log(result)
// })


// var Promise1=new Promise((resolve, reject) => {
//     var arr1 = [12, 78, 90, 54, 63, 21, 33, 47, 58, 97, 65, 41];
//     var arr2 = [37, 89, 90, 32, 45, 67, 12, 41, 33, 97, 78, 20, 50, 80];
//     var emptyarray = []
//     for (var i of arr1) {
//         if (arr2.includes(i)) {
//             emptyarray.push(i)
//         }
//     }
//     if (emptyarray !== undefined) {
//         setTimeout(() => {
//             resolve(emptyarray)
//         },4000)
//     }
// })
// var Promise2=new Promise((resolve, reject) => {
//     var array = [12, 18, 20, 10, 38, 49, 50, 19, 11, 15, 15, 43, 65, 70, 98];
//     var num = 30
//     var emptyarray = [];
//     for (var i of array) {
//         for (var j of array) {
//             if (i + j == num) {
//                 emptyarray.push([i,j])
//             }
//         }
//     }
//     if (emptyarray !== undefined) {
//         resolve(emptyarray)
//     }
// })
// var Promise3=new Promise((resolve, reject) => {
//     var array = [12, 13, 14, 16];
//     var output = [];
//     var i = 0
//     while (i < array.length) {
//         var j = 1
//         while (j < array.length) {
//             output.push(array.slice(i, j + 1))
//             j=j+1
//         }
//         i=i+1
//     }
//     if (output !== undefined) {
//         resolve(output)
//     }
// })
// var Promise4=new Promise((resolve, reject) => {
//     var array = [12, 34, 56, 78, 97, 65, 43, 21, 30];
//     var sum = 0
//     for (var i in array) {
//         sum=sum+array[i]
//     }
//     if (sum !== undefined) {
//         setTimeout(() => {
//             resolve(sum)
//         },9000)
//     }
// })
// var all_promise = Promise.all([Promise1, Promise2, Promise3, Promise4])
// all_promise.then((result) => {
//     console.log(result)
// })

// var new_number=new Promise((resolve, reject) => {
//     var array = [12, 32, 45, 67, 89, 90, 84, 21, 22, 45];
//     var sum = 0
//     for (var i in array) {
//         sum=sum+array[i]
//     }
//     if (sum !== undefined) {
//         resolve(sum)
//     }
//     else {
//         reject("not sum")
//     }
// })
// new_number.then((sum) => {
//     console.log("sum===============", sum)
//     return new Promise((resolve, reject) => {
//         var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21, 32, 45, 67, 87, 98, 90, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//         var uniqueNumber = []
//         for (var i = 0; i < array.length; i++){
//             if (uniqueNumber.indexOf(array[i]) == -1) {
//                 uniqueNumber.push(array[i])
//             }
//         }
//         if (uniqueNumber !== undefined) {
//             setTimeout(() => {
//                 resolve(uniqueNumber)
//             },9000)
//         }
//         else {
//             reject("not number")
//         }
//     }).then((uniqueNumber) => {
//         console.log("uniqueNumber===============", uniqueNumber)
//         return new Promise((resolve, reject) => {
//             var array = [12, 90, 75, 43, 30, 50, 70, 100];
//             var max = []
//             for (var i in array) {
//                 if (array[i] > max) {
//                     max=array[i]
//                 }
//             }
//             if (max !== undefined) {
//                 resolve(max)
//             }
//             else {
//                 reject("not max")
//             }
//         }).then((max) => {
//             console.log("max=============",max)
//         }).catch((error) => {
//             console.log("error=============",error)
//         })
//     })
// })

// var new_number=new Promise((resolve, reject) => {
//     var array = [9, 7, 6, 5, 4, 3, 2, 1, 11, 23, 42, 56, 78, 90];
//     var evennumber = [];
//     var i = 1
//     while (i < array.length) {
//         if (array[i] % 2 == 0) {
//             evennumber.push(array[i])
//         }
//         i=i+1
//     }
//     if (evennumber.length > 0) {
//         setTimeout(() => {
//             resolve(evennumber)
//         },9000)
//     }
//     else {
//         reject("not even")
//     }
// })
// new_number.then((even) => {
//     console.log("even==============",even)
// }).catch((error) => {
//     console.log("error=================",error)
// })


// var numbers=new Promise((resolve, reject) => {
//     var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     var sum = 0
//     for (var i in array) {
//         sum=sum+array[i]
//     }
//     if (sum !== undefined) {
//         resolve(sum)
//     }
//     else {
//         reject("not sum")
//     }
// })
// numbers.then((sum) => {
//     console.log("sum=============",sum)
// }).finally((heloo) => {
//     console.log("hello==============",heloo)
// }).catch((error) => {
//     console.log("error=================",error)
// })

// var Promise1=new Promise((resolve, reject) => {
//     var array = [21, 23, 45, 67, 89, 65, 43, 21, 10, 20];
//     var sum = 0
//     for (var i of array) {
//         sum=sum+i
//     }
//     if (sum !== undefined) {
//         setTimeout(() => {
//             resolve(sum)
//         },4000)
//     }
//     else {
//         reject("not sum")
//     }
// })
// var Promise2=new Promise((resolve, reject) => {
//     var array = [1, 2, 3, 4, 5, 6, 7, 11, 19, 27, 39, 40, 56, 1, 2, 3, 4, 5, 12];
//     var uniqueNumber = []
//     for (var i = 0; i < array.length; i++){
//         if (uniqueNumber.indexOf(array[i]) == -1) {
//             uniqueNumber.push(array[i])
//         }
//     }
//     if (uniqueNumber !== undefined) {
//         resolve(uniqueNumber)
//     }
// })
// var Promise3=new Promise((resolve, reject) => {
//     var array = [12, 18, 20, 10, 56, 87, 90, 16, 14, 19, 11, 41, 29, 32];
//     var num = 30;
//     var emptyarray = [];
//     for (var i of array) {
//         for (var j of array) {
//             if (i + j == num) {
//                 emptyarray.push([i,j])
                
//             }
//         }
//     }
//     if (emptyarray !== undefined) {
//         resolve(emptyarray)
//     }
// })

// var all_promise = Promise.all([Promise1, Promise2, Promise3])
// all_promise.then((result) => {
//     console.log(result)
// })


// var new_promise=new Promise((resolve, reject) => {
//     var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//     var evennuber = [];
//     for (var i in array) {
//         if (array[i] % 2 == 0) {
//             evennuber.push(array[i])
//         }
//     }
//     if (evennuber.length > 0) {
//         resolve(evennuber)
//     }
//     else {
//         reject("this is a no even")
//     }
// })
// new_promise.then((even) => {
//     console.log("even===========", even)
//     return new Promise((resolve, reject) => {
//         var array = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//         var oddnumber = [];
//         for (var i of array) {
//             if (i % 2 != 0) {
//                 oddnumber.push(array[i])
//             }
//         }
//         if (oddnumber.length > 0) {
//             setTimeout(() => {
//                 resolve(oddnumber)
//             },9000)
//         }
//         else {
//             reject("not odd")
//         }
//     }).then((oddnumber) => {
//         console.log("oddnumber==============", oddnumber)
//         return new Promise((resolve, reject) => {
//             var array = [1, -9, 2, -8, 3, -7, 4, -5, 11, 21, 40, -87]
//             var positive = []
//             for (var i in array) {
//                 if (array[i] > 0) {
//                     positive.push(array[i])
//                 }
//             }
//             if (positive.length > 0) {
//                 resolve(positive)
//             }
//             else {
//                 reject("not posstive")
//             }
//         }).then((positive) => {
//             console.log("posstive=============",positive)
//         }).catch((error) => {
//             console.log("errr==============",error)
//         })
//     })
// })





  

// var number=new Promise((resolve, reject) => {
//   var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   var sum = 0
//   for (var i in array) {
//     sum=sum+array[i]
//   }
//   i = i + 1
//   if (sum !== undefined) {
//     setTimeout(() => {
//       resolve(sum)
//     },9000)
//   }
//   else {
//     reject("not sum")
//   }
// })
// number.then((sum) => {
//   console.log("sum=============", sum)
// }).finally((sourav) => {
//   console.log("sourav=============", sourav)
// }).catch((error) => {
//   console.log("error=============", error)
// })

// var new_promise=new Promise((resolve, reject) => {
//   var array = [12, 21, 34, 56, 78, 90, 10, 38, 40, 57, 43];
//   var sum = 0;
//   for (var i in array) {
//     sum=sum+array[i]
//   }
//   if (sum !== undefined) {
//     resolve(sum)
//   }
//   else {
//     reject("not sum")
//   }
// })
// new_promise.then((sum) => {
//   console.log("sum===============", sum)
//   return new Promise((resolve, reject) => {
//     var array = [12, 36, 90, 85, 43, 21, 10, 100];
//     var max = array[0]
//     for (var i in array) {
//       if (array[i] > max) {
//         max=array[i]
//       }
//     }
//     if (max !== undefined) {
//       console.log(max)
//     }
//     else {
//       reject("not max")
//     }
//   }).then((max) => {
//     console.log("max==============",max)
//   }).catch((error) => {
//     console.log("error=================",error)
//   })
// })

// var Promise1=new Promise((resolve, reject) => {
//   var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//   var sum = 0
//   var i = 0
//   while (i < array.length) {
//     sum = sum + array[i]
//     i=i+1
//   }
//   if (sum !== undefined) {
//     setTimeout(() => {
//       resolve(sum)
//     },6000)
//   }
//   else {
//     reject("not sum")
//   }
// })
// var Promise2=new Promise((resolve, reject) => {
//   var array = [12, 34, 5, 6, 78, 65, 43, 100, 97];
//   var max = array[0]
//   var i = 0
//   while (i < array.length) {
//     if (array[i] > max) {
//       max=array[i]
//     }
//     i=i+1
//   }
//   if (max !== undefined) {
//     resolve(max)
//   }
//   else {
//     reject("not max")
//   }
// })
// var Promise3=new Promise((resolve, reject) => {
//   var num = [19, 34, 25, 90, 87, 32, 13, 1];
//   var min = num[0]
//   var i = 0
//   while (i < num.length) {
//     if (num[i] < min) {
//       min=num[i]
//     }
//     i=i+1
//   }
//   if (min !== undefined) {
//     setTimeout(() => {
//       resolve(min)
//     },5000)
//   }
//   else {
//     reject("not min")
//   }
// })
// var all_promise = Promise.all([Promise1, Promise2, Promise3])
// all_promise.then((result) => {
//   console.log("result=============",result)
// }).catch((error) => {
//   console.log("error=============",error)
// })

// var number=new Promise((resolve, reject) => {
//     var array = [12, 34, 56, 78, 90, 80, 54, 32, 12];
//     var sum = 0
//     for (var i = 0; i < array.length; i++){
//         sum=sum+array[i]
//     }
//     if (sum !== undefined) {
//         resolve(sum)
//     }
//     else {
//         reject("not sum")
//     }
// })
// number.then((sum) => {
//     console.log("sum==============",sum)
// }).catch((error) => {
//     console.log("error===============",error)
// }).finally((kailash) => {
//     console.log("kailash=============",kailash)
// })

// var Promise1=new Promise((resolve, reject) => {
//     var array = [12, 67, 90, 85, 100, 52, 27, 39, 40, 50];
//     var max = array[0]
//     var i = 0
//     while (i < array.length) {
//         if (array[i] > max) {
//             max=array[i]
//         }
//         i=i+1
//     }
//     if (max !== undefined) {
//         setTimeout(() => {
//             resolve(max)
//         },9000)
//     }
//     else {
//         reject("not max")
//     }
// })
// var Promise2=new Promise((resolve, reject) => {
//     var array = [10, 90, 86, 74, 52, 35, 78, 59, 1, 100];
//     var min = array[0]
//     var i = 0
//     while (i < array.length) {
//         if (array[i] < min) {
//             min=array[i]
//         }
//         i=i+1
//     }
//     if (min !== undefined) {
//         setTimeout(() => {
//             resolve(min)
//         },3000)
//     }
//     else {
//         reject("not min")
//     }
// })

// var all_promise = Promise.all([Promise1, Promise2])
// all_promise.then((result) => {
//     console.log("result=================",result)
// }).catch((error) => {
//     console.log("error==================",error)
// })

// var new_promise=new Promise((resolve, reject) => {
//     var num1 = [12, 34, 56, 78, 90, 12, 34, 56, 78, 80, 64, 32, 23, 49, 91, 54]
//     var num2 = [90, 87, 34, 56, 78, 11, 19, 20, 70, 64, 32];
//     var emptyarray = []
//     for (var i of num1) {
//         if (num2.includes(i)) {
//             emptyarray.push(i)
//         }
//     }
//     if (emptyarray !== undefined) {
//         setTimeout(() => {
//             resolve(emptyarray)
//         },9000)
//     }
//     else {
//         reject("not found")
//     }
// })
// new_promise.then((emptyarray) => {
//     console.log("emptyarray============", emptyarray)
//     return new Promise((resolve, reject) => {
//         var arr1 = [12, 32, 45, 67, 89, 10, 98, 23, 43, 54, 67, 89, 100, 21];
//         var arr2 = [77, 43, 15, 71, 80, 82, 34, 56, 78, 90];
//         emptyarray = []
//         for (var i in arr1) {
//             if (!arr2.includes(i)) {
//                 emptyarray.push(i)
//             }
//         }
//         if (emptyarray !== undefined) {
//             resolve(emptyarray)
//         }
//         else {
//             reject
//         }
//     }).then((kailash) => {
//         console.log("kailash================",kailash)
//     }).catch((error) => {
//         console.log("error===================",error)
//     })
// })