// add==========================================
// var name = { "name1": "kailash", "name2": "komal", "name3": "sourav" }
// name.name4 = "manvi";
// console.log(name)

// var number = { "a": "2", "b": "3", "c": "4", "d": "5" }
// number.e = "8";
// console.log(number)

// var num = { "num1": "90", "num2": "78", "num3": "45" }
// num.num4 = "19";
// console.log(num)

// change===========================================================
// var name = { "name1": "kailash", "name2": "komal", "name3": "sourav" }
// name.name2 = "aarti";
// console.log(name)

// var number = { "a": "2", "b": "3", "c": "4", "d": "5" }
// number.c = "11";
// console.log(number)

// delete==================================================================
// var name = { "name1": "kailash", "name2": "komal", "name3": "sourav" }
// delete name.name2;
// console.log(name)

// var num = { "num1": "90", "num2": "78", "num3": "45" }
// delete num.num3;
// console.log(num)

// count=================================================================
// var number = { "a": "1", "b": "2", "c": "3", "d": "4", "e": "5", "f": "7" }
// var count = Object.keys(number).length
// console.log(count)

// var name = { "name1": "kailash", "name2": "komal", "name3": "sourav" }
// var count = Object.keys(name).length;
// console.log(count)

// length=============================================================
// var number = { "a": "1", "b": "2", "c": "3", "d": "4", "e": "5", "f": "7" }
// var length = Object.keys(number).length;
// console.log(length)

// sum==============================================
// var number = { "a": 6, "b": 5, "c": 10, "d": 51, "e": 15, "f": 20 }
// var sum = 0
// for (var i in number) {
//     sum=sum+number[i]
// }
// console.log("total of sum",sum)


// var number = { "a": 6, "b": 5, "c": 10, "d": 51, "e": 15, "f": 20 }
// for (var i in number) {
//     if (number[i] % 2 == 0) {
//         console.log(number[i],"even")
//     }
//     else {
//         console.log(number[i],"odd")
//     }
// }

// posstive_and_neagtive============================================
// var number = { "a": -9, "b": 7, "d": 11, "e": -89, "f": 99, "g": -11 }
// for (var i in number) {
//     if (number[i] > 0) {
//         console.log(number[i],"posstive")
//     }
//     else {
//         console.log(number[i],"neagtive")
//     }
// }

// class===================================================
// class number{
//     constructor() {
//         this.num1 = 97,
//             this.num2 = 67,
//             this.num3 = 78,
//             this.num4 = 63,
//             this.num5 = 11,
//             this.num6=11
//     }
// }
// var new_num = new number();
// console.log(new_num)

// char_count==============================================
// var name = "kailashkumarsingh"
// var charcount = {}
// for (var i in name) {
//     var char = name[i]
//     charcount[char]=(charcount[char] || 0)+1
// }
// console.log(charcount)

// var app = "fecbookinstagramwhatsaap";
// var charcount = {}
// for (var i = 0; i < app.length; i++){
//     var char = app[i]
//     charcount[char]=(charcount[char] || 0)+1
// }
// console.log(charcount)

// duble_array_of_object=================================
// var number = [19, 23, 56, 89, 76, 43, 52, 17, 90, 29, 64];
// var keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k"]
// var num = {}
// for (var i in number) {
//     num[keys[i]]=number[i]
// }
// console.log(num)

// uniquNumber=====================================================
// var numbers = { "a": 9, "b": 11, "c": 89, "d": 50, "e": 60, "c": 45, "b": 11 }
// console.log(numbers)

// first_way=================================
// var number = { "a": 6, "b": 5, "c": 10, "d": 51, "e": 15, "f": 20 }
// console.log(number.e)

// secound_way================================================
// var number = { "a": 6, "b": 5, "c": 10, "d": 51, "e": 15, "f": 20 }
// console.log(number["d"])

// distraching====================================================
// var array = [2, 4, 6, 89, 75, 32, 19, 37, 40, 58];
// var [a,b,o,p,s]=array
// console.log(a,b,o,p,s)

// var object = { "a": 6, "b": 5, "c": 10, "d": 51, "e": 15, "f": 20 }
// var { a, c, e, f } = object
// console.log(a,c,e,f)

// max==============================================
// var number={"a": 6, "b": 5, "c": 10, "d": 51, "e": 15, "f": 20}
// var max = number[0]
// for (var i in number) {
//     max = number[i]
//     number[i]=max
// }
// console.log(max)

// min=====================================================
// var number = { "a": 6, "b": 4, "c": 19, "d": 5, "e": 15, "f": 100 }
// var min = number[0]
// for (var i in number) {
//     if (number[i] < min) {
//         min=number[i]
//     }
// }
// console.log(min)


 // Output: 4


// var name = "kailashkumar"
// var charcount = {}
// for (var i = 0; i < name.length; i++){
//     var char = name[i]
//     charcount[char]=(charcount[char] || 0)+1
// }
// console.log(charcount)

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var obj = {}
for (var i in number) {
    obj[keys[i]]=number[i]
}
console.log(obj)
