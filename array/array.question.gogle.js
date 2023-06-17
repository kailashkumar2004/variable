// var  arr = [1, 2, 3, 4];
// var firstElement = arr[0]; 
// var lastElement = arr[arr.length - 1];
// console.log(firstElement)
// console.log(lastElement)

// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr)

// var arr = [1, 2, 3];
// for(var i = 0; i<arr.length; i++) {
// console.log(arr[i]);
// }

// let arr = [1, 2, 3];
// if(arr.indexOf(2)!==-1) {
// console.log('Element found');
// } 
// else {
// console.log('Element not found');
// }

// let arr = [1, 2, 3];
// arr.splice(1,2);
// console.log(arr); 

// var number=[3,6,8,9,7,5,4,3,2,1];
// number.splice(3,7)
// console.log(number)

// var arr1 = [1, 2];
// let arr2 = [3, 4];
// var arr3 = [5, 7];
// const newArr = arr1.concat(arr2,arr3);
// console.log(newArr)

// var nestedArray = [1, [2, [3, 4], 5], 6];
// var flattenArray=(nestedArray)
// console.log(flattenArray)

// sum=0
// for(var i in nestedArray){
//     for(var j in nestedArray[i]){
//             sum=sum+nestedArray[i][j]  
//         }
//     }
    

// console.log(sum)



// var nestedArray = [1, [2, [3, 4], 5], 6];

// var flattenedArray = nestedArray.flat(2);
// console.log(flattenedArray);

// var nestedArray=[3,[5,7,[1,7,8],9,11],19]
// var flattenedArray=nestedArray.flat(2)
// console.log(flattenedArray)

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(numbers=> console.log(numbers * 2));


// var array =[2,6,8,9,5,4,3];
// array.forEach(array=>console.log(array*2));


//  var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// arr1.sort((a,b)=>a-b);
// console.log(arr1)

// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var uniqueNumbers=[];
// var i=1
// for(var i=1; i<arr1.length; i++){
//     if(uniqueNumbers.indexOf(arr1[i])== -1){
//         uniqueNumbers.push(arr1[i])
//     }
// }
// console.log(uniqueNumbers)

// function last(arr, n) {
//     if (n===undefined) {
//       return arr[arr.length - 1];
//     } 
//     else if (n<=arr.length) {
//       return arr.slice(arr.length - n);
//     }
//      else {
//       return arr;
//     }
//   }
  
//   console.log(last([7, 9, 0, -2]));
//   console.log(last([7, 9, 0, -2], 3));
//   console.log(last([7, 9, 0, -2], 6));


// var myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(","));
// console.log(myColor.join("-"));
// console.log(myColor.join("+"));

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for (var i = 0; i < a.length; i++) {
//   console.log("row " + i);
//   for (var j = 0; j < a[i].length; j++) {
//     console.log(" " + a[i][j]);
//   }
//   console.log("------");
// }


// let myArray = [1, 2, 3, 4];
// myArray.length = 3;
// console.log(myArray);

// let myArray = [1, 2, 3, 4];

// while (myArray.length < 2) {
//   myArray.pop(4);
// }

// console.log(myArray);

// function areElementsConsecutive(){
//     var array1 = [1, 2, 3, 4, 5];
//     var array2 = [1, 2, 4, 5, 6];
//     for (let i = 0; i < array1.length - 1; i++){
//       if (array1[i] !== array2[i + 1] - 1) {
//         console.log(false)
//       }
//     }
//     console.log(true)
//   }
//   areElementsConsecutive()

// let array1 = [1, 0, 2, 3, 4];
// let array2 = [3, 5, 6, 7, 8, 13];
// let sumArray = [];
// for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
//   let sum = (array1[i] || 0) + (array2[i] || 0);
//   sumArray.push(sum);
// }
// console.log(sumArray);

// function dublicatenumber(){
// let array = [1, 2, 3, 2, 4, 5, 3, 6, 7, 6, 8, 9, 9];
// var uniqueNumbers=[]
// var i=0
// for(var i=0; i<array.length; i++){
//     if(uniqueNumbers.indexOf(array[i])== -1){
//         uniqueNumbers.push(array[i])
//     }
// }
// return(uniqueNumbers)
// }
// console.log(dublicatenumber())
  

// function union(){
//     var array1 = [1, 2, 3];
//   var  array2 = [100, 2, 1, 10];
//     const set = new Set([array1, array2]);
//     const unionArray = Array.from(set);
//     console.log(unionArray)
//   }
  
//  union()
  

// function union(arr1, arr2) {
//     const set = new Set([...arr1, ...arr2]);
//     const unionArray = Array.from(set);
  
//     console.log(unionArray);
//   }
//   const array1 = [1, 2, 3];
//   const array2 = [100, 2, 1, 10];
//   union(array1,array2)

// var number=15
// var output={}
// var i=1
// for(var i=1; i<=number; i++){
//     output[i]=i*i
// }
// console.log(output)
  
// var number=[12,13,14,16]
// var i=0
// var output=[]
// while(i<number.length){
//     var j=1
//     while(j<number.length){
//         output.push(number.slice(i, j+1))
//         j=j+1
//     }
//     i=i+1
// }
// console.log(output)

// var number=[99,26,78,89,66,91,45,67];
// var max =number[0]
// var i=0
// while(i<number.length){
//     if(number[i]>max){
//         max=number[i]
//     }
//     i=i+1
// }
// console.log(max)


// function difference(arr1, arr2) {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
  
//     const diff = [...arr1.filter(x => !set2.has(x)), ...arr2.filter(x => !set1.has(x))];
  
//     return diff;
//   }
  
//   console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//   console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
//   console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// even---
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(a=> a % 2 === 0);
// console.log(evenNumbers)


// odd
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(a=> a % 2=== 0);
// const oddNumbers = numbers.filter(a=> a % 2 != 0);

// console.log("even ---",evenNumbers)
// console.log("oddNumbers------",oddNumbers)



// const numbers = [1, 2, 3, 4, 5, 6,0,1,-1,-3,8];
// const evenNumbers = numbers.filter(a=> a<2);
// console.log("even ---",evenNumbers)


// var numbers=[2,-3,4,-5,6,-7,8,-9,0,-1,2,3,-1,-4,2,4,6,8];
// posstiveNumber=numbers.filter(i=> i>0)
// neagtiveNumber=numbers.filter(i=> i<0)
// console.log("posstive==========",posstiveNumber)
// console.log("neagtive==========",neagtiveNumber)