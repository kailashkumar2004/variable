// var arr=[10,20,30,40,50];
// var newarray=arr.map(function(value,index){
//     value=value+1
//     return index
// })
// console.log(arr)
// console.log(newarray)


// var num=[36,46,68,81,100];
// const newarray=num.map(i=>i+1)
// console.log(newarray)

// var array=[20,30,40,50,60,70,80,90];
// var newarray=array.map(num=>num*2)
// console.log(newarray)


// var array = [
//     [8, 9, 7, 4],
//     [1, 2, 3, 4]
//   ];
  
//   var newArray = array.map(function(secondFunction) {
//     return secondFunction.map(function(num) {
//       return num * 4;
//     });
//   });
  
//   console.log(newArray);


// var ary=[
//     {fname:"kailash", lname:"kumar"},
//     {fname:"manci", lname:"mpriya"},
//     {fname:"savita", lname:"kumari"}
// ]
// var newArray=ary.map(name);
// console.log(newArray);
// function name(names){
//     return names.fname+" "+names.lname
// }

// var num=[2,3,4,5,6,7,8,9,11,19];
// var newarray=num.map(num=>num*2)
// console.log(newarray)
    
// var x=[4,5,6,7,8,7,3,2,4,1,-0,-6];
// var newArray=x.map(i=>i%2)
// console.log(newArray)
// var newarray=x.map(i=>i<5)
// console.log(newarray)



// var x=[4,5,6,7,8,7,3,2,4,1,-0,-6];
// var evennumber=[]
// var oddnumber=[]
// for(var i=0; i<x.length; i++){
//     if(x[i]%2==0){
//         evennumber.push(x[i]);
//     }
//     else{
//         oddnumber.push(x[i]);
//     }
// }
// console.log(evennumber)
// console.log(oddnumber)

// var array=[3,-1,2,-9,4,-8,5,-7,6,-11,18,39,40];
// var newarray=array.map(i=>i>0)
//     console.log(newarray)
//     let newArray=array.map(i=>i<0)
//         console.log(newArray)
    
// var number=[1,2,3,4,5,6,7,8,9,10,11,12,16,18,19,20,34,45,56];
// var newarray=number.map(i=>i%2==0)
// console.log(newarray)
// let newArray=number.map(i=>i%2!=0)
// console.log(newArray)

// let arr=[45,23,21];
// let a=arr.map((value,index,array)=>{
//     console.log(value,index,array)
//     // return value+1
// })
// console.log(a)

// var array=[12,32,11,15,28,39,45,60,79];
// var newarray=array.map(value=>value%2==0)
// console.log(newarray)


// var array = [1, 2, 3, 4, 5];
// var mappedArray = array.map(function(element) {
//   return element * 2;
// });
// mappedArray.forEach(function(element) {
//   console.log(element);
// });

// var number=[1,-2,3,4,-5,6,-7]
// var newarray=number.map(function(element){
//     return element>0
// })
// newarray.forEach(function(element){
//     console.log(element)
// })
// var newArray=number.map(function(element){
//     return element<0
// })
// newArray.forEach(function(element){
//     console.log(element)
// })


// var number=[2,4,5,6,7,8,9];
// var newarray=number.map(function(num){
//     return num+2
// })
// newarray.forEach(function(num){
//     console.log(num)
// })

// let data=([
//    [3,6,7,8,9],
//    [11,19,30,49]
// ])
// data.forEach((value,index)=>{
//     console.log(value,index)

// })

// var number = [18, 20, 30, 40, 50, 60, 70, 80, 90];
// var maxArray = number.map(element => Math.max(...number));
// console.log(maxArray);

// var array=[2,6,7,8,9,11,80,40,50];
// var minarray=array.map(element=>Math.min(...array))
// console.log(minarray)

// var numbers = [18, 20, 30, 40, 50, 60, 70, 80, 90];
// var maxNumber = Math.max(...numbers);
// var maxArray = numbers.map(element =>element == maxNumber ? maxNumber : null)
// .filter(element => element !== null);
// console.log(maxArray);

// var numbers = [18, 20, 30, 40, 50, 60, 70, 80, 90];
// var minNumber =Math.min(...numbers);
// var minarray=numbers.map(element=>element == minNumber ? minNumber : null)
// .filter(element=>element !==null)
// console.log(minarray)

// var number=[9,8,7,6,5,4,3];
// var newarray=number.map((value,index)=>{
   
//     console.log(value,index)
//     return value++
// })
// console.log(newarray)
// var number =[1,2,4,5,6,7,8];
// var newarray=number.map(num=>num*2)
// console.log(newarray)

// var array=[1,2,3,4,5,6,7,8,9,12,131,13,45];
// var newarray=array.map(num=>num%2==0);
// var newArray=array.map(num=>num%2!=0)
// console.log("newarray even number",newarray)
// console.log("newArray odd number",newArray)









// var number=[2,5,6,7,8,4,2,1];
// var newarray =number.map(num=>num+8)
// console.log(newarray)

// var num=[1,2,3,4,5,6,7,8,9];
// var newarray=num.map(function(value,index){
//     console.log(value,index)
//     return value=value+1
// })
// console.log(newarray)












// var array=[2,4,6,7,8,9];
// var newarray =array.map(i=>i*2+i)
// console.log(newarray)

// var number=[9,8,7,6,5,4,3];
// var newarray =number.map(i=>i%2==0)
// console.log(newarray)


// var array=[9,7,5,4,3,2]
// var newarray =array.map(function(index,value,arr){
//     value=value+1
//     console.log(index,value,arr)
// })




// var array=[12,21,23,43,56,78,90,11,19,29,38,47,50,82];
// var evennewarray=array.map(num=>num%2==0)
// var oddnewarray=array.map(num=>num%2!=0)
// console.log(evennewarray)
// console.log(oddnewarray)

// var number=[-1,2,-3,4,-5,6,-7,8,9,10,-19,29,-39,40,-75];
// var posstivenumber=number.map(i=>i>0);
// var neagtivenumber=number.map(i=>i<0);
// console.log(posstivenumber);
// console.log(neagtivenumber)

// var array=[2,6,8,4,9,8,12,1,3,5,97,57];
// var greatethen=array.map(i=>i>6);
// var lessthen=array.map(i=>i<6);
// console.log(greatethen);
// console.



// var array=[9,7,4,2,1,76,80,43,24];
// var newarray=array.map(i=>i%2==0)
// var newArray=array.map(i=>i%2!==0)
// console.log(newarray)
// console.log(newArray)

// var array=[12,45,67,89,90,765,43,21,123];
// var newarray=array.map(i=>i>40)
// console.log(newarray)

// var array=[12,45,67,89,90,765,43,21,123];
// var newArray=array.map(function(value,index){
//     console.log(value,index)
// })

// var array=[2,4,6,8,10,12,14,16,18,20]
// var newarray =array.map(i=>i*2+1)
// console.log(newarray)