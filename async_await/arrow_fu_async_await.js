// const getData = async() => {
//     let y = await "Hello World";
//     console.log(y);
// }
// console.log(1);
// getData();
// console.log(2);


// var mynumber = async () => {
//     var num1 = 90
//     var num2 = await 20
//     console.log(num1+num2)
// }
// console.log("kailash")
// mynumber()
// console.log("hello")


// var number = async (a, b) => {
//     console.log(a+b)
// }
// number(20,10)


// var number = async (num) => {
//     i = 1
//     while (i <= await num) {
//         if (i % 2 == 0) {
//             console.log(i,"even")
//         }
//         else {
//             console.log(i,"odd")
//         }
//         i=i+1
//     }
// }
// number(10)

// even_amd_odd_sum============================================
// // var number = async () => {
//     var readline = require("readline-sync")
//     var num = readline.questionInt("enter the any num==============")
//     var i = 1
//     var evensum = 0
//     var oddsum = 0
//     while (i <= await num) {
//         if (i % 2 == 0) {
//             evensum=evensum+i
//         }
//         else {
//             oddsum=oddsum+i
//         }
//         i=i+1
//     }
//     console.log("total of evensum", evensum)
//     console.log("total of oddsum",oddsum)
// }
// number()

// even_and_odd_count===========================================================
// var kailash = async () => {
//     var readline = require("readline-sync")
//     var num = readline.questionInt("enter the any num===============")
//     var i = 1
//     var evencount = 0
//     var oddcount = 0
//     while (i <= await num) {
//         if (i % 2 == 0) {
//             evencount=evencount+1
//         }
//         else {
//             oddcount=oddcount+1
//         }
//         i=i+1
//     }
//     console.log("total of evencount", evencount)
//     console.log("total of oddcount",oddcount)
// }
// kailash()

// even_and_odd=========================================================
// var manvi = async () => {
//     var array = [2, 3, 5, 6, 7, 8, 9, 11, 21, 34, 56]
//     for (var i in array) {
//         if (await array[i] % 2 == 0) {
//             console.log(array[i],"even")
//         }
//         else {
//             console.log(array[i],"odd")
//         }
//     }
// }
// manvi()

// sum=============================================================
// var savita = async () => {
//     var array = [12, 34, 56, 78, 90, 10, 20, 30, 40, 50];
//     var sum = 0
//     var i = 0
//     while (i < await array.length) {
//         sum = sum + array[i]
//         i=i+1
//     }
//     console.log("total of sum",sum)
// }
// savita()

// uniqueNumbers========================================================
// var kailash = async () => {
//     var array = [1, 9, 66, 70, 2, 1, 12, 2, 9, 53, 100, 89, 85];
//     var uniqueNumber = [];
//     for (var i = 0; i < await array.length; i++){
//         if (uniqueNumber.indexOf(array[i]) == -1) {
//             uniqueNumber.push(array[i])
//         }
//     }
//     console.log(uniqueNumber)
// }
// kailash()

// max_Number===========================================================
// var komal = async () => {
//     var array = [12, 30, 56, 80, 90, 100, 31, 49, 76, 83];
//     var max = array[0];
//     var i = 0
//     while (i < await array.length) {
//         if (array[i] > max) {
//             max=array[i]
//         }
//         i=i+1
//     }
//     console.log(max)
// }
// komal()

// min_Number==============================================================
// var rani = async () => {
//     var array = [9, 77, 45, 32, 12, 70, 94, 26, 48, 59, 1];
//     var min = array[0];
//     var i = 0
//     while (i < await array.length) {
//         if (array[i] < min) {
//             min=array[i]
//         }
//         i=i+1
//     }
//     console.log(min)
// }
// rani()

// input===============================================================
// var number = async () => {
//     var array = [4, 5, 6, 8];
//     var output = [];
//     var i = 0
//     while (i < await array.length) {
//         var j = 1
//         while (j < await array.length) {
//             output.push(array.slice(i, j + 1))
//             j=j+1
//         }
//         i=i+1
//     }
//     console.log(output)
// }
// number()

// inculdes===============================================================
// var heloo = async () => {
//     var aar1 = [12, 32, 45, 67, 89, 90, 85, 41, 11, 1, 7, 9, 3, 5, 10];
//     var arr2 = [10, 12, 11, 1, 7, 8, 54, 35, 78, 97, 43, 5, 26, 70, 98];
//     var emptyarray = []
//     for (var i of aar1) {
//         if (arr2.includes(i)) {
//             emptyarray.push(i)
//         }
//     }
//     console.log(emptyarray)
// }
// heloo()

// i+j=num==============================================================
// var mahi = async () => {
//     var array = [12, 38, 20, 30, 25, 25, 38, 96, 45, 68, 10, 26, 39, 41, 15, 35];
//     var num = 50
//     var emptyarray = [];
//     for (var i of array) {
//         for (var j of array) {
//             if (i + j == await num) {
//                 emptyarray.push([i,j])
//             }
//         }
//     }
//     console.log(emptyarray)
// }
// mahi()

// posstive_and_neagtive=========================================================
// var number = async()=> {
//     var array = [-9, 8, -6, 4, 3, 21, -11, 48, 60, 80];
//     var i = 0
//     while (i < await array.length) {
//         if (array[i] > 0) {
//             console.log(array[i],"posstive")
//         }
//         else {
//             console.log(array[i],"neagtive")
//         }
//         i=i+1
//     }
// }
// number()

// var kailash = async () => {
//     var readline = require("readline-sync")
//     var num = readline.questionInt("enter the any num===============")
//     var i = 0
//     while (i <= await num) {
//         var num1 = readline.questionInt("enter the any num1====================")
//         if (num1 > 0) {
//             console.log(num1,"poddtive")
//         }
//         else {
//             console.log(num1,"neagtive")
//         }
//         i=i+1
//     }
// }
// kailash()

// febonesish================================================
// var num = async (a) => {
//     var a = 0;
//     var b = 1;
//     console.log(a);
//     console.log(b);
//     for (var i = 0; i <= await a; i++){
//         var temp = a + b;
//         console.log(temp);
//         b = a;
//         a = temp;
//     }
    
// }
// num(7)

// var number = async () => {
//     var readline = require("readline-sync")
//     var num = readline.questionInt("enter the any num==============")
//     var a = 0;
//     var b = 1;
//     console.log(a);
//     console.log(b);
//     for (var i = 0; i <= await num; i++){
//         var temp = a + b;
//         console.log(temp)
//         b = a;
//         a=temp
//     }
// }
// number()

// factoriyal==========================================================
// var kailash = async (num) => {
//     var fact = 1
//     while (await num > 0) {
//         fact = fact * num
//         num=num-1
//     }
//     console.log("fact",fact)
// }
// kailash(6)

// var number = async () => {
//     var num = 7
//     var fact = 1
//     while (await num > 0) {
//         fact = fact * num
//         num=num-1
//     }
//     console.log("fact",fact)
// }
// number()

// var love = async () => {
//     var readline = require("readline-sync")
//     var num = readline.questionInt("enter the any num==============")
//     var fact = 1
//     while (await num > 0) {
//         fact = fact * num
//         num=num-1
//     }
//     console.log("fact",fact)
// }
// love()

// perfect_number=============================================================
// var name = async (x) => {
//     var i = 1
//     var sum = 0
//     while (i < await x) {
//         if (x % i == 0) {
//             sum=sum+i
//         }
//         i=i+1
//     }
//     if (sum == x) {
//         console.log(sum,"sum is a perfect number")
//     }
//     else {
//         console.log(sum,"sum is a not perfect number")
//     }
// }
// name(6)

// var rahul = async () => {
//     var readline = require("readline-sync")
//     var num = readline.questionInt("enter the any num==============")
//     var i = 1
//     var sum = 0
//     while (i < await num) {
//         if (num % i == 0) {
//             sum=sum+i
//         }
//         i=i+1
//     }
//     if (sum == num) {
//         console.log(sum,"sum is a perfect number")
//     }
//     else {
//         console.log(sum,"sum is a not perfect number")
//     }
// }
// rahul()

// prime_number====================================================================
// var number = async (a) => {
//     var i = 2
//     var count = 0
//     while (i <= await a) {
//         if (a % i == 0) {
//             count=count+1
//         }
//         i=i+1
//     }
//     console.log("count==================", count)
//     if (count == 1) {
//         console.log(count,"this is a prime number")
//     }
//     else {
//         console.log(count,"this is a not prime number")
//     }
// }
// number(3)

// var heloo = async () => {
//     var readline = require("readline-sync")
//     var num = readline.questionInt("enter the any num=================")
//     var i = 2
//     var count = 0
//     while (i <= await num) {
//         if (num % i == 0) {
//             count=count+1
//         }
//         i=i+1
//     }
//     console.log("count================", count)
//     if (count == 1) {
//         console.log(count,"count is a prime number")
//     }
//     else {
//         console.log(count,"this is a not prime")
//     }
// }
// heloo()

// table===================================================================
// const number = async (x, y) => {
//     while (x <= await y) {
//         var i = 1
//         while (i <= await 10) {
//             console.log(x * i)
//             i=i+1
//         }
//         console.log(" ")
//         x=x+1
//     }
// }
// number(2,7)



// let num = async () => {
//     var readline = require("readline-sync")
//     var num = readline.questionInt("enter the any num==================")
//     var num1 = readline.questionInt("enter the any num1=================")
//     while (num <= await num1) {
//         var i = 1
//         while (i <= await 10) {
//             console.log(num * i)
//             i=i+1
//         }
//         console.log(" ")
//         num=num+1
//     }
// }
// num()

// lcm============================================================
// let lovely = async (x, y) => {
//     var i = 1
//     var lcm = 0
//     while (i > 0) {
//         if (i % await x == 0 && i % await y == 0) {
//             lcm = i
//             break
//         }
//         i=i+1
//     }
//     console.log(lcm)
// }
// lovely(6,8)


// const num = async () => {
//     var readline = require("readline-sync")
//     var num1 = readline.questionInt("enter the any num1==================")
//     var num2 = readline.questionInt("enter the any num2==================")
//     var i = 1
//     var lcm = 0
//     while (i > 0) {
//         if (i % await num1 == 0 && i % await num2 == 0) {
//             lcm = i
//             break
//         }
//         i=i+1
//     }
//     console.log(lcm)
// }
// num()

// hcf=========================================================
// const number = async () => {
//     var x = 6
//     var y = 29
//     var i = 1
//     var hcf
//     while (x <= await i && y <= await i) {
//         if (x % i == 0 && y % i == 0) {
//             hcf=i
//         }
//         i=i+1
//     }
//     console.log(hcf)
// }
// number()

// var num = async () => {
//     var readline = require("readline-sync")
//     var num1 = readline.questionInt("enter the any num1================")
//     var num2 = readline.questionInt("enter the any num2=================")
//     var i = 1
//     var hcf=0
//     while (i <= await num1 && i <= await num2) {
//         if (num1 % i == 0 && num2 % i == 0) {
//             hcf=i
//         }
//         i=i+1
//     }
//     console.log(hcf)
// }
// num()


// navgurukul========================================================
// let number = async (a) => {
//     var i = 1
//     while (i <= await a) {
//         if (i % 3 == 0 && i % 7 == 0) {
//             console.log(i,"navgurukul")
//         }
//         else if (i % 7 == 0) {
//             console.log(i,"gurukul")
//         }
//         else if (i % 3 == 0) {
//             console.log(i,"nav")
//         }
//         else {
//             console.log(i)
//         }
//         i=i+1
//     }
// }
// number(100)