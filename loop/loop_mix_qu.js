// var readline =require("readline-sync")
// var num= readline.questionInt("enter the any num=========")
// var i=2
// var conut=0
// while(i<=num){
//     if(num%i==0){
//         conut=conut+1
//     }
//     i=i+1
// }
// console.log("count===========",conut)
// if(conut==1){
//     console.log("this is a prime number")
// }
// else{
//     console.log("this is a not prime number")
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num=========")
// var i=1
// var sum=0
// while(i<num){
//     if(num%i==0){
//         sum=sum+i
//     }
//     i=i+1
// }
// if(sum==num){
//     console.log(sum,"it is a perfect number")
// }
// else{
//     console.log(sum,"it is a not perfect number")
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num=====")
// var num1 =readline.questionInt("enter the any num1======")
// while(num<=num1){
//     var i=1
//     while(i<=10){
//         console.log(num*i)
//         i=i+1
//     }
//     console.log(" ")
//     num=num+1
// }

// var  readline =require("readline-sync")
// var num =readline.questionInt("enter the any num=======")
// var fact=1
// while(num>0){
//     fact=fact*num
//     num=num-1
// }
// console.log("fact",fact)

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num=====")
// var a=0
// var b=1
// console.log(a);
// console.log(b);
// for(var i=0; i<=num; i++){
//     var temp=a+b
//     console.log(temp)
//     b=a
//     a=temp
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num====")
// var i=0
// while(i<=num){
//     var num1=readline.questionInt("enter the any num1======")
//     if(num1>0){
//         console.log(num1,"posstive")
//     }
//     else{
//         console.log(num1,"neagtive")
//     }
//     i=i+1
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num======")
// var i=1
// while(i<=num){
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
//     i=i+1
// }


// var i=1
// var num=20
// while(i<=num){
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
//     i=i+1
// }

// var num=0
// var i=20
// while(i>=num){
//     console.log(i)
//     i=i-1
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num=======")
// var i=1
// var evensum=0
// var oddsum=0
// while(i<=num){
//     if(i%2==0){
//         evensum=evensum+i
//     }
//     else{
//         oddsum=oddsum+i
//     }
//     i=i+1
// }
// console.log("total of evensum",evensum)
// console.log("total of oddsum",oddsum)

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num========")
// var i=1
// var even_count=0
// var odd_count=0
// while(i<=num){
//     if(i%2==0){
//         even_count=even_count+1
//     }
//     else{
//         odd_count=odd_count+1
//     }
//     i=i+1
// }
// console.log("total of even_count",even_count)
// console.log("total of odd_count",odd_count)


// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num===")
// var i=1
// var evensum=0
// while(i<=num){
//     if(i%2==0){
//         evensum=evensum+i
//     }
//     i=i+1
// }
// console.log("total of evensum",evensum)


// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num=====")
// var i=1
// var sum=0
// while(i<=num){
//     sum=sum+i
//     i=i+1
// }
// console.log("total of sum",sum)


// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num====")
// var sum=0
// var i=1
// while(i<=num){
//     var num1=readline.questionInt("enter the any num1=======")
//     sum=sum+num1
//     i=i+1
// }
// console.log("total of sum",sum)

// var i=0
// while(i<=20){
//     console.log(i)
//     i=i+1
// }

// var i=10
// while(i>=0){
//     console.log(i)
//     i=i-1
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num====")
// var i=1
// do{
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
//     i=i+1
// }
// while(i<=num)

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num=====")
// for(var i=1; i<=num; i++){
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num========")
// var evensum=0
// var oddsum=0
// for(var i=1; i<=num; i++){
//     if(i%2==0){
//         evensum=evensum+i
//     }
//     else{
//         oddsum=oddsum+i
//     }
// }
// console.log("total of evensum",evensum)
// console.log("total of oddsum",oddsum)

// var number=[11,13,15,18,14,19,20];
// for(var i in number){
//     if(number[i]%2==0){
//         console.log(number[i],"even")
//     }
//     else{
//         console.log(number[i],"odd")
//     }
// }

// var element=[11,12,13,44,56,78,99];
// for(var i of element){
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
// }

// var number=[11,12,13,14,15,16,17,18];
// var sum=0
// var i=1
// while(i<number.length){
//     sum=sum+number[i]
//     i=i+1
// }
// console.log(sum,"sum")

// var array=[12,11,14,15,18,12];
// var i=1
// while(i<array.length){
//     if(array[i]%2==0){
//         console.log(array[i],"even")
//     }
//     else{
//         console.log(array[i],"odd")
//     }
//     i=i+1
// }

// var array=[18,19,16,15,14,13,12];
// var sum=0
// for(var i in array){
//     sum=sum+array[i]
// }
// console.log("total of sum",sum)

// for(var i of array){
//     sum=sum+i
// }
// console.log(sum,"totsl of sum")


// var number=[11,-14,17,-81,19,45,-9];
// for(var i in number){
//     if(number[i]>0){
//         console.log(number[i],"posstive")
//     }
//     else{
//         console.log(number[i],"neagtive")
//     }
// }

// for(var i of number){
//     if(i>0){
//         console.log(i,"posstive")
//     }
//     else{
//         console.log(i,"neagtive")
//     }
// }

// var array=[
//     [11,12,13,14,15],
//     [15,14,13,12,11],
//     [19,18,26,45,32],
// ]
// var sum=0
// for(var i in array){
//     for(var j in array[i])
//     sum=sum+array[j][i]
// }
// console.log("total of sum",sum)


// for(var i of array){
//     for(var j of i){
//         sum=sum+j
//     }
// }
// console.log(sum)

// var numbers=[1,2,3,4,5,1,2,7,8,9,11];
// var i=0
// var uniqueNumbers=[];
// for(vari=0; i<numbers.length; i++){
//     if(uniqueNumbers.indexOf(numbers[i])== -1){
//         uniqueNumbers.push(numbers[i])
//     }
// }
// console.log(uniqueNumbers)


// var number=[99,83,52,17];
// var i=0
// var max=number[i]
// while(i<number.length){
//     if(number[i]>max){
//         max=number[i]
//     }
//     i=i+1
// }
// console.log(max)










// var number=[9,7,6,6,5,4,3,2,2];
// var i=0
// var uniqueNumbers=[];
// for(var i=0; i<number.length; i++){
//     if(uniqueNumbers.indexOf(number[i])== -1){
//         uniqueNumbers.push(number[i])
//     }
// }
// console.log(uniqueNumbers)


// var i=0
// var num=20
// while(i<=num){
//     console.log(i)
//     i=i+1
// }

// var i=1
// var num=20
// while(i<=num){
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
//     i=i+1
// }

// var num=0
// var i=20
// while(i>=num){
//     console.log(i)
//     i=i-1
// }

// var num=15
// var i=0
// do{
//     console.log(i)
//     i=i+1
// }
// while(i<=num)

// var i=13
// var num=0
// do{
//     console.log(i)
//     i=i-1
// }
// while(i>=num)

// var num=11
// var i=0
// do{
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
//     i=i+1
// }
// while(i<=num)

// var readline=require("readline-sync")
// var num =readline.questionInt("enter the any num=======")
// var i=1
// while(i<=num){
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
//     i=i+1
// }

// do{
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
//     i=i+1
// }
// while(i<=num)

// for(var i=1; i<=num; i++){
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num==========")
// var i=1
// var evensum=0
// while(i<=num){
//     if(i%2==0){
//         evensum=evensum+i
//     }
//     i=i+1
// }
// console.log("total of even sum",evensum)

// do{
//     if(i%2==0){
//         evensum=evensum+i
//     }
//     i=i+1
// }
// while(i<=num)
// console.log("total of evensum",evensum)


// for(var i=1; i<=num; i++){
//     if(i%2==0){
//         evensum=evensum+i
//     }
// }
// console.log("total of evensum",evensum)


// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num=============")
// var i=1
// var evensum=0
// var oddsum=0
// while(i<=num){
//     if(i%2==0){
//         evensum=evensum+i
//     }
//     else{
//         oddsum=oddsum+i
//     }
//     i=i+1
// }
// console.log("total of evensum",evensum)
// console.log("total of oddsum",oddsum)


// do{
//     if(i%2==0){
//         evensum=evensum+i
//     }
//     else{
//         oddsum=oddsum+i
//     }
//     i=i+1
// }
// while(i<=num)
// console.log("total of evensum",evensum)
// console.log("total of oddsum",oddsum)


// for(var i=1; i<=num; i++){
//     if(i%2==0){
//         evensum=evensum+i
//     }
//     else{
//         oddsum=oddsum+i
//     }
// }
// console.log("total of evensum",evensum)
// console.log("total of oddsum",oddsum)

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num===========")
// var i=1
// var evencount=0
// var oddcount=0
// while(i<=num){
//     if(i%2==0){
//         evencount=evencount+1
//     }
//     else{
//         oddcount=oddcount+1
//     }
//     i=i+1
// }
// console.log("total of evencount",evencount)
// console.log("total of oddcount",oddcount)


// do{
//     if(i%2==0){
//         evencount=evencount+1
//     }
//     else{
//         oddcount=oddcount+1
//     }
//     i=i+1
// }
// while(i<=num)
// console.log("total of evecount",evencount)
// console.log("total of oddcount",oddcount)

// for(var i=1; i<=num; i++){
//     if(i%2==0){
//         evencount=evencount+1
//     }
//     else{
//         oddcount=oddcount+1
//     }
// }
// console.log("total of evencount",evencount)
// console.log("total of oddcount",oddcount)

// var readline=require("readline-sync")
// var num =readline.questionInt("enter the any num===========")
// var i=1
// var sum=0
// while(i<=num){
//     sum=sum+i
//     i=i+1
// }
// console.log("total of sum",sum)

// do{
//     sum=sum+i
//     i=i+1
// }
// while(i<=num)
// console.log("total of sum",sum)

// for(var i=1; i<=num; i++){
//     sum=sum+i
// }
// console.log("total of sum",sum)

// var num=20
// var i=1
// var sum=0
// while(i<=num){
//     sum=sum+i
//     i=i+1

// }
// console.log("total of sum",sum)

// do{
//     sum=sum+i
//     i=i+1
// }
// while(i<=num)
// console.log("total of sum",sum)

// for(var i=1; i<=num; i++){
//     sum=sum+i
// }
// console.log("total of sum",sum)

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num========")
// var i=1
// var sum=0
// while(i<=num){
//     var num1=readline.questionInt("enter the any num1============")
//     sum=sum+num1
//     i=i+1
// }
// console.log("total of sum",sum)

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num====")
// var i=0
// while(i<=num){
//     var num1=readline.questionInt("enter the any num1==========")
//     if(num1>0){
//         console.log(num1,"posstive")
//     }
//     else{
//         console.log(num1,"neagtive")
//     }
//     i=i+1
// }

// var readline =require("readline-sync")
// var num=readline.questionInt("enter the any num========")
// var a=0;
// var b=1;
// console.log(a);
// console.log(b);
// for(var i=0; i<=num; i++){
//     var temp=a+b
//     console.log(temp)
//     b=a
//     a=temp
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num==========")
// var fact=1
// while(num>0){
//     fact=fact*num
//     num=num-1
// }
// console.log("fact",fact)

// var readline =require("readline-sync")
// var num=readline.questionInt("enter the any num====")
// var num1 =readline.questionInt("enter the any num1======")
// while(num<=num1){
//     var i=1
//     while(i<=10){
//         console.log(num*i)
//         i=i+1
//     }
//     console.log(" ")
//     num=num+1
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num========")
// var i=1
// var sum=0
// while(i<num){
//     if(num%i==0){
//         sum=sum+i
//     }
//     i=i+1
// }
// if(sum==num){
//     console.log(sum,"this is a perfect")
// }
// else{
//     console.log(sum,"this is a not perfect")
// }

// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num=============")
// var i=2
// var count=0
// while(i<=num){
//     if(num%i==0){
//         count=count+1
//     }
//     i=i+1
// }
// console.log("count=======",count)
// if(count==1){
//     console.log("this is a prime number")
// }
// else{
//     console.log("this is a not primr number")
// }


// var readline =require("readline-sync")
// var num =readline.questionInt("enter the any num===========")
// var sum=0
// var i=1
// while(i<=num){
//     var num1 =readline.questionInt("enter the any num1==========")
//     sum=sum+num1
//     i=i+1
// }
// console.log("total of sum",sum)

// var num=10
// var i=1
// var sum=0
// while(i<=num){
//     sum=sum+i
//     i=i+1
// }
// console.log(sum)