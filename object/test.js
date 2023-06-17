// let obj={firstNname:"kailsh",lastName:"kumar",post:"churli",bo:"tkg",po:"galgaliya"}
// for(let i in obj){
//     console.log(obj[i])
// }
// console.log(obj)

// var obj={a:1,b:2,c:3,d:4,e:5}
// // console.log(obj)
// for(var i in obj){
//     console.log(obj[i])
// }

// var obj={a:1,b:3,c:4,d:5,e:7,f:8,g:9}
// for(var i in obj){
//     if(obj[i]%2==0){
//         console.log(obj[i],"even")
//     }
//     else{
//         console.log(obj[i],"odd")
//     }
// }

// var obj={village:"khosidangi",post:"churli",pollicestan:"galgaliya",block:"thakurganj",distik:"kishanganj",state:"bihar",country:"india"}
// console.log(obj)
// for(var i in obj){
//     console.log(obj[i])
// }

// var obj={whatisyourname:"my name is kailah kumar sing",whereweareform:"i am form bihar"}
// console.log(obj)
// for(var i in obj){
//     console.log(obj[i])
// }
// for(var i in obj){
//     console.log(i)
// }

// var vegetables ={
//     veg1:"potato",
//     veg2:"brinjal",
//     veg3:"bottle gourd"
//  }
//  var vegetable1 = vegetables.veg1;
//  var vegetable2 = vegetables.veg2;
//  var vegetable3 = vegetables.veg3;
 
//  console.log(vegetable1);
//  console.log(vegetable2);
//  console.log(vegetable3);


//  var array=[{a:1,b:2,c:3},{name:"kailash",age:20},{class:12,roll:10},{fatherName:"mahendra mahto",mothersName:"sumintra devi"}]

// console.log(array)
// for(var i in array){
//     console.log(array[i])
// }
// for(var i in array){
//     console.log(i)
// }

// var array = [
//     { a: 1, b: 2, c: 3 },
//     { name: "kailash", age: 20 },
//     { class: 12, roll: 10 },
//     { fatherName: "mahendra mahto", mothersName: "sumintra devi" }
//   ];
  
//   var length = array.length;
//   console.log(length);


// var array = [
//     { a: 1, b: 2, c: 3 },
//     { name: "kailash", age: 20 },
//     { class: 12, roll: 10 },
//     { fatherName: "mahendra mahto", mothersName: "sumintra devi" }
//   ];
  
//   var count = 0;
  
//   for (var i = 0; i < array.length; i++) {
//     var obj = array[i];
//     var keys = Object.keys(obj);
//     count += keys.length;
//   }
  
//   console.log(count);



// var array = [
//     { a: 1, b: 2, c: 3 },
//     { name: "kailash", age: 20 },
//     { class: 12, roll: 10 },
//     { fatherName: "mahendra mahto", mothersName: "sumintra devi" }
//   ];
  
//   var count = 0;
//   var i = 0;
  
//   while (i < array.length) {
//     var obj = array[i];
//     var keys = Object.keys(obj);
//     count += keys.length;
//     i=i+1
//   }
  
//   console.log(count);

// for(var i=0; i<array.length; i++){
//     var obj =array[i];
//     var keys =Object.keys(obj);
//     count +=keys.length
// }
// console.log(count)

// for(var i in array){
//     var obj =array[i];
//     var keys =Object.keys(obj);
//     count +=keys.length
// }
// console.log(count)



// var array = [
//     { a: 1, b: 2, c: 3 },
//     { name: "kailash", age: 20 },
//     { class: 12, roll: 10 },
//     { fatherName: "mahendra mahto", mothersName: "sumintra devi" }
//   ];
  
//   var sum = 0;
  
//   for (var i = 0; i < array.length; i++) {
//     var obj = array[i];
//     var values = Object.values(obj);
  
    // for (var j = 0; j < values.length; j++) {
    //   if (typeof values[j] === 'number') {
    //     sum += values[j];
    //   }
    // }
  
  
//   console.log(sum);
  

// var myDetails={
//     "first name":"kumar",
//     "last name": "vadthya",
//     "middle name":"nayak"
//  }
  
//  console.log(myDetails["first name"]);
//  console.log(myDetails["last name"]);
//  console.log(myDetails["middle name"]);
  
// console.log(myDetails)
// for(var i in myDetails){
//     console.log(i)
// }
  
  
// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//   };
//   myHome.name="my Villa";
//   myHome.location="siliguri"
//   console.log(myHome)
// for(var i in myHome){
//     console.log(i)
// }
  
  
// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//   };
 
 
//  myHome.isGood= true;
//  myHome.isvery= "beatufull"
 
// //  console.log(myHome);

// for(var i in myHome){
//     console.log(myHome[i])
// }
 
// var myHome = {
//     name: "Mannat",
//     location:"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"],
//     "isGood":true
//   };
  
//   delete myHome.isGood;
//   console.log(myHome)
 

// var myDetails={
//     "name":"kumar",
//     "age":24
//  }
//  console.log(myDetails)
//  console.log(myDetails.hasOwnProperty("age"));



// var cars = ["Maruti", "Mercedes", "BMW"];

// for (var car in cars) {
//   console.log(cars[car]);
// }

// const campus_list=["Bangalore","Dharamshala","Pune","Bangalore_another"]

// for(var i in campus_list){
//     console.log(i)
// }

// var person={"name":"gouri","surname":"maity","age":37}
// for (var key in person) {
//     console.log(person[key]);
//   }
 
// for (var i in person){
// console.log(i);
// }
// var keys = Object.keys(person);
// var length = keys.length;

// console.log(length);

// for (person_details in person){
//     console.log(person_details+ "= "+person[person_details]);
//     }

// var name={name:"kailash",lastName:"singh",medileName:"kumar"}
// console.log(name)
// for(var i in name){
//     console.log(i)
// }
// var keys =Object.keys(name);
// var length =keys.length;
// console.log(length);


// const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
// for(let i in campus){
//   console.log(campus[i])
// console.log(i)
// }

const d1 = {'a': 100, 'b': 200, 'c': 300};
const d2 = {'a': 300, 'b': 200, 'd': 400};

const result = {};

// Iterate over the keys of d1
// for (let key in d1) {
//   if (d1.hasOwnProperty(key)) {
//     if (d2.hasOwnProperty(key)) {
//       result[key] = d1[key] + d2[key];
//     } else {
//       result[key] = d1[key];
//     }
//   }
// }

// Iterate over the keys of d2 that are not in d1
// for (let key in d2) {
//   if (d2.hasOwnProperty(key) && !d1.hasOwnProperty(key)) {
//     result[key] = d2[key];
//   }
// }

// console.log(result);


// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num=========")
// var output={}
// for(var i=1; i<=num; i++){
//     output[i]=i*i
// }
// console.log(output)

// var mainString = "My name is kumar, and my friend name is Dhamu";
// var subString = "is";

// var count = mainString.split(subString).length - 1;

// console.log("The substring is there", count, "times in the main string.");

// var dic1={1:10, 2:20};
// var dic2={3:30,2:40};
// var dic3={5:50,6:60};
// for (var i in dic1){
//   for (var j in dic2){
//     if (i==j){
//         dic3[i]=dic1[i]+dic2[j]
//         break
//     }
//      else{
//         dic3[i]=dic1[i]
//         dic3[j]=dic2[j]
//      }
//   } 
// }
// console.log(dic3);


// var readline = require('readline-sync');
// var name =readline.question('Enter the any name=========');
// var dict={"name":"Raju", "marks":56}
// for (var i in dict){
//     console.log(i)
// if (dict[i]===name){
//  console.log("exists");
//   break
// }
// else{
//   console.log("not exist");
//   break
// }
// }


// var mydata = {
//     'data1':100,
//     'data2': -54,
//     'data3': 247
//    }
// var sum=0

// for(var i in mydata){
//     sum=sum+mydata[i]
// }
// console.log("Total:",sum)

// var myDict= {
//     1: 'NAVGURUKUL',
//     2: 'IN',
//     3:{
//     'A' : 'WELCOME',
//     'B' : 'To',
//     'C' : 'DHARAMSALA'
//     }
//     }
//     for(var i in myDict){
//         if ((typeof myDict[i]) === "object"){
//             delete myDict[i]['A']
//     }
// }
// console.log(myDict)


// let list1=['one','two','three','four','five']
// let list2=[1,2,3,4,5]
// var number={}
// for (var i in list1){
//    number[list1[i]]=list2[i]
// }
// console.log(number);


// var array = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
// var uniqueNumbers = [];
// for (var i of array) {
//   for (var j in i) {
//       if (!uniqueNumbers.includes(i[j])){ 
//         uniqueNumbers.push(i[j]);
//       }
//   }
// }
// console.log(uniqueNumbers);


// var readline = require('readline-sync');
// var students={}
// for (var i = 0; i <10; i++){
//    var name =readline.question("Enter your name============");
//    var marks=readline.questionInt("Enter the marks=========");
//    students[name]=marks;
// }
// console.log(students);



// const list1=[]
// const word="MISSISSIPPI"
// let output={}
// for (var i of word) {
//       if(list1.includes(i)){
//        output[i]=output[i]+1
    
//   }
// else{
//        list1.push(i);
//        output[i]=1;
//   }
// }
// console.log(output);


// var dict =  {
//     'Alex': ['subj1', 'subj2', 'subj3'],
//     'David': ['subj1', 'subj2']
//  }
//  var count = 0
//  for(var i in dict){
//     for (var j in dict[i]){
//         count=count+1
//     }
//  }
  
//  console.log(count);

// var array={
//     number:[4,7,9,7,5,7,3],
//     name:["kailash1","komal5","kartik4"]
// }
// var conut=0
// for(var i in array){
//     for(var j in array[i]){
//         conut=conut+1
//     }
// }
// console.log(conut)


// var array = {
//     name: ["kailash3", "roki4", "payal9", "manci1"],
//     number: [3, 5, 6, 7, 7, 8, 9, 0, 22, 33, 44]
//   };
  
//   var sum = array.number.reduce((total, num) => total + num, 0);
//   console.log(sum);



// var my_dict = {
//     'a': 50,
//     'b': 58,
//     'c': 56,
//     'd': 40,
//     'e': 100,
//     'f': 20
//   };
  
//   var number = Object.values(my_dict).filter(value=>value>50);
//   console.log(number);


// var student = {
//     'fist name' : "David Rayy",
//     'class' : "VI",
//     'rollno' : 12 };

    // student.class="IX"
    // console.log(student)

    // for(var i in student){
    //     console.log(i)
    // }
    // for(var i in student){
    //     console.log(student[i])
    // }

    // var vegetables={
    //     veg1:"brinjal",veg2:"oninine",veg3:"patoto",veg4:"chili"
    // }
    // vegetables.veg3="ledishfinger"
    // console.log(vegetables)
    // console.log(vegetables.veg2)
    // vegetables.veg5="botal ground"
    // console.log(vegetables)
    // delete vegetables.veg2; 
    // console.log(vegetables)

    var fruits={
        fruit1:"mango",
        fruit2:"apple",
        fruit3:"banana",
        fruit4:"grapesh"
    }
    // console.log(fruits)
    // for(var i in fruits){
    //     console.log(i)
    // }
    // for(var i in fruits){
    //     console.log(fruits[i])
    // }
    // fruits.fruit4="coconut"
    // console.log(fruits)

    // delete fruits.fruit3;
    // console.log(fruits)

    // fruits.fruit5="lichi"
    // console.log(fruits)
    // var obj={a:1,b:2,c:3,d:4,e:6}
    //first way 
    // console.log(obj.a)
    // //second way
    // console.log(obj['a'])//iklklklkl;
  
