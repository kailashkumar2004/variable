// var rlsync =require('readline-sync')
// var num =rlsync.questionInt('enter the num----:')
// var i=1
// while(i<=num){
    // if(i%3==0 && i%5==0){
    //     console.log(i,'kailash kumar')
    // }
    // else if(i%3==0){
    //     console.log(i,'kailash')
    // }
    // else if(i%5==0){
    //     console.log(i,'kumar')
    // }
    // else{
    //     console.log(i,"manviiiiiiiiiiiiiii")
    // }
//     i=i+1
// // }

// var rlsync =require('readline-sync')
// var num =rlsync.questionInt('enter the num----:')
// var i=1
// while(i<=num){
// var num1 =rlsync.questionInt('enter the num1----:')
// if(num1%2==0){
//     console.log(num1,"even")
// }else{
//     console.log(num1,"odd-------")
// }
// i=i+1
// }

// var i=1
// while(i<=30){
//     if(i%2==0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
//     i=i+1
// }

// var readlinesync=require('readline-sync')
// var num=readlinesync.questionInt('enter num---')
// var num1=readlinesync.questionInt('enter num1---')
// var i=5
// var lcm=1
// while(i>1){
//     if(i%num==0 && i%num1==0){
//     lcm=i
//     break
// }

// i=i+1}
// console.log(lcm)




// var readline =require('readline-sync')
// var num =readline.questionInt('enter the num--:')
// var i=0
// while(i<=num){
//     if(i%3==0 && i%7==0){
//         console.log('manvi mauriya')
//     }
//     else if(i%3==0){
//         console.log('manvi')
//     }
//     else if(i%7==0){
//         console.log('mauriya')
//     }
//     else{
//         console.log(i,'savita')
//     }
//     i=i+1
// }

// var rlsync =require('readline-sync')
// var num =rlsync.questionInt("enter num----:")
// var i=2
// while(i<=num){
//     if(i%2==0){
//         console.log('concat')
//     }
//     else{
//         console.log('count')
//     }
//     i=i+1
// // }

// const readline = require('readline')
// var rlSync =require('readline-sync')
// var num =rlSync.questionInt('num---:')
// var i=0
// while(i<=num){
//     var num1=rlSync.questionInt('enter the num1---')
//     if(num1>i){
//         console.log(num1,'postive')    
//     }
//     else{
//         console.log(num1,'neagtive')
//     }
//     // console.log(i,"i")
//     i=i+1
// }


// var readline =require('readline-sync')
// var num=readline.questionInt('enter num---')
// var num1=readline.questionInt('enter num1----')
// var i=1
// var lcm=0
// while(i>0){
//     if(i%num==0 && i%num1==0){ 
//         lcm=i
//         break
//     }
   
//      i=i+1   
// }
// console.log(lcm)





var rlsync =require('readline-sync')
var number =rlsync.questionInt('enter any number-----')
int=n,r,c,arm=0;
n= r.nextInt();
while(n>0){
    rem=n%10;
    arm=(r*r*r)+arm;
    n=n%10
}
if(c==arm){
    console.log('armstrong number')
}
else{
    console.log('not armstrong number')
}
