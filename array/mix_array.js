// var array=[1,2,3,4,5,6,7,8,9,10,14,89,75,48];
// for(var i in array){
//     if(array[i]%2==0){
//         console.log(array[i],"even")
//     }
//     else{
//         console.log(array[i],"odd")
//     }
// }

// for(var i of array){
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
// }

// even_and_odd_of_sum=======================

// var array=[18,23,45,67,89,12,14,18,90,86,45,37];
// var evensum=0
// var oddsum=0
// for(var i in array){
//     if(array[i]%2==0){
//         evensum=evensum+array[i]
//     }
//     else{
//         oddsum=oddsum+array[i]
//     }
// }
// console.log("total of evensum",evensum);
// console.log("total of oddsum",oddsum)

// for(var i of array){
//     if(i%2==0){
//         evensum=evensum+i
//     }
//     else{
//         oddsum=oddsum+i
//     }
// }
// console.log("total of evensum",evensum);
// console.log("total of oddsum",oddsum)

// var i=0
// while(i<array.length){
//     if(array[i]%2==0){
//         evensum=evensum+array[i]
//     }
//     else{
//         oddsum=oddsum+array[i]
//     }
//     i=i+1
// }
// console.log("total of evensum",evensum)
// console.log("total of oddsum",oddsum)

// for(var i=0; i<array.length; i++){
//     if(array[i]%2==0){
//         evensum=evensum+array[i]
//     }
//     else{
//         oddsum=oddsum+array[i]
//     }
// }
// console.log("total of evensum",evensum);
// console.log("total of oddsum",oddsum)

// simpal_sum======================

// var array=[90,87,65,53,21,17,29,40,50,60];
// var sum=0
// var i=0
// while(i<array.length){
//     sum=sum+array[i]
//     i=i+1
// }
// console.log("total of sum",sum)

// for(var i in array){
//     sum=sum+array[i]
// }
// console.log(sum)

// for(var i of array){
//     sum=sum+i
// }
// console.log(sum)

// simpal_count====================
// var array=[1,2,3,4,5,6,7,8,9,10,11,23,54,21,40,76,54];
// var count=0
// var i=0
// while(i<array.length){
//     count=count+1
//     i=i+1
// }
// console.log("total of count",count)

// for(var i in array){
//     count=count+1
// }
// console.log(count)

// for(var i of array){
//     count=count+1
// }
// console.log(count)

// even_and_odd_count======================
// var array=[10,19,18,17,16,15,14,13,121,11,12,23,45,67,89];
// var evencount=0
// var oddcount=0
// var i=1
// while(i<array.length){
//     if(array[i]%2==0){
//         evencount=evencount+1
//     }
//     else{
//         oddcount=oddcount+1
//     }
//     i=i+1
// }
// console.log("total of evencount",evencount);
// console.log("total of oddcount",oddcount)

// for(var i in array){
//     if(array[i]%2==0){
//         evencount=evencount+1
//     }
//     else{
//         oddcount=oddcount+1
//     }
// }
// console.log("total of evencount",evencount);
// console.log("total of oddcount",oddcount)

// for(var i of array){
//     if(i%2==0){
//         evencount=evencount+1
//     }
//     else{
//         oddcount=oddcount+1
//     }
// }
// console.log("total of evencount",evencount);
// console.log("total of oddcount",oddcount)

// for(var i=0; i<array.length; i++){
//     if(array[i]%2==0){
//         evencount=evencount+1
//     }
//     else{
//         oddcount=oddcount+1
//     }
// }
// console.log("total of evencount",evencount);
// console.log("total of oddcount",oddcount)

// posstive_and_neagtive===================================
// var array=[-1,2,-3,4,-5,6,-7,8,-9,10,-11,12,-13,14,-15,16,-17,78,-90,84,63,21];
// var i=0
// while(i<array.length){
//     if(array[i]>0){
//         console.log(array[i],"posstive")
//     }
//     else{
//         console.log(array[i],"neagtive")
//     }
//     i=i+1
// }

// for(var i=0; i<array.length; i++){
//     if(array[i]>0){
//         console.log(array[i],"posstive")
//     }
//     else{
//         console.log(array[i],'neagtive')
//     }
// }

// for(var i in array){
//     if(array[i]>0){
//         console.log(array[i],"posstive")
//     }
//     else{
//         console.log(array[i],"neagtive")
//     }
// }

// for(var i of array){
//     if(i>0){
//         console.log(i,"posstive")
//     }
//     else{
//         console.log(i,"neagtive")
//     }
// }


// index==========================================
// var array=[9,7,6,5,4,33,24,2,1,19,39,40,50,78];
// for(var i in array){
//     console.log(i,array[i])
// }

// length==============================
// var array=[10,20,34,56,78,90,93,21,25,68,79,43];
// console.log(array.length)

// reveser===================================
// var array=[90,86,54,21,41,74,59,60,70];
// console.log(array.reverse())

// nested_array==========================
// var array=[
//     [12,19,20,30,40,50],
//     [10,20,30,40,50,60],
//     [11,12,13,14,15,16],
//     [21,22,23,24,25,26]
// ]
// var sum=0
// for(var i in array){
//     for(var j in array[i]){
//         sum=sum+array[i][j]
//     }
// }
// console.log(sum)

// for(var i of array){
//     for(var j of i){
//         sum=sum+j
//     }
// }
// console.log(sum)

// inculdes===============================
// var arr1=[10,29,38,48,46,58,67,89,90,21,34,52,891];
// var arr2=[29,34,56,78,,46,90,89,21,100,39,57,68,80];
// var emptarray=[]
// for(var i of arr1){
//     if(arr2.includes(i)){
//         emptarray.push(i)
//     }
// }
// console.log(emptarray)

// i+j=num================================
// var array=[20,30,25,25,78,90,64,52,15,35,21,29,67];
// var emptarray=[];
// var num=50
// for(var i of array){
//     for(var j of array){
//         if(i+j==num){
//             emptarray.push([i,j])
//         }
//     }
// }
// console.log(emptarray)

// uniquNumber======================================
// array=[1,9,8,7,6,5,4,3,2,1,9,8,7,6,11,13,28,90,76,53,4];
// var uniquNumber=[]
// for(var i=0; i<array.length; i++){
//     if(uniquNumber.indexOf(array[i])== -1){
//         uniquNumber.push(array[i])
//     }
// }
// console.log(uniquNumber)

// max================================================
// var array=[90,86,54,32,15,67,100,79,96];
// var max=array[0]
// var i=0
// while(i<array.length){
//     if(array[i]>max){
//         max=array[i]
//     }
//     i=i+1
// }
// console.log(max)

// for(var i in array){
//     if(array[i]>max){
//         max=array[i]
//     }
// }
// console.log(max)

// for(var i of array){
//     if(i>max){
//         max=i
//     }

// }
// console.log(max)

// squrat=================================================
// var num=19
// var output={};
// for(var i=1; i<=num; i++){
//     output[i]=i*i
// }
// console.log(output)

// var num=15
// var output=[]
// for(var i=1; i<=num; i++){
//     output[i]=i*i
// }
// console.log(output)

// sort_number====================
// var array=[9,7,4,12,1,3,52,39,71,26,11,12,19,17];
// array.sort((a,b)=>a-b)
// console.log(array)

// sort_name===========================
// var names=["komal","payal","aaryan","shobha","rina","pujaa"];
// names.sort()
// console.log(names)

// min_number========================================

// var array=[9,89,6,74,32,12,31,71,17,80,1];
// console.log(Math.min(...array))

// input====================================================
// var input=[56,57,58,60];
// var output=[];
// var i=0;
// while(i<input.length){
//     var j=1
//     while(j<input.length){
//         output.push(input.slice(i,j+1))
//         j=j+1
//     }
//     i=i+1
// }
// console.log(output)
    
// var array=[4,7,8,9,3,2,89,64,32];
// console.log(array[4]="kailash");
// console.log(array)

// var number=[1,2,3,4,5,6,7,8,9];
// number.fill("kiwi")
// console.log(number)

// var number=[1,9,3,7,4,5,6,98,21,34,56];
// number.fill("kiwi",3,7)
// console.log(number)

// var array=[1,9,7,4,3,5,2];
// array.shift()
// console.log(array)

// var number=[12,3,45,67,89,86,53,21];
// number.unshift(100)
// console.log(number)

// var aaryan=[1,90,21,34,56,78,97,61,28,53,49];
// var postion=aaryan.indexOf(56)
// console.log(postion)

// var num=[1,2,3,4,5];
// var array=[10,20,30,40];
// var name=["kailash","konam"];
// var allarray=num.concat(array,name)
// console.log(allarray)

// var array=[12,34,56,78,90,100,127,39];
// array.push(11)
// console.log(array)

// var number=[1,2,3,4,5,6,7,8,9];
// number.pop(12)
// console.log(number)

// var array=[12,13,14,15,16,17,18,19,20];
// array.splice(array.indexOf(15),6)
// console.log(array)

// var array=[10,20,30,40,50,60,70,80,90];
// var finalaaray=array.slice(5)
// console.log(finalaaray)

// var number=[10,20,30,40,50,60,64,32,21,45,7,65];
// delete number[7]
// console.log(number)