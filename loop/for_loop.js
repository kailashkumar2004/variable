// // var i;
// for(var i=1; i<=10; i++){
//     console.log(i)
// }

// var i;
// for(i=10; i<=20; i++){
//     console.log(i)
// }

// var i;
// for(i=25; i<=40;  i++){
//     console.log(i)
// }

// var i=10
// for(i=10; i<=20;  i++){
//     if(i%2==0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }

// let i;
// for(i=10; i<=40;  i++){
//     if(i%2==0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }


// var z;
// for(z=15; z<=43; z++){
//     if(z%2==0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }


// let x;
// for(x=21; x<=49; x++){
//     if(x%2==0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }


var rlsync =require('readline-sync')
var number =rlsync.questionInt('enter any number---:')
var n; count=0;
for(var i=2; i<=number;   i++){
    if(n%i==0){
        count++;
     }
}
if(count==2){
    console.log('this is prime number');
}
else{
    console.log('this is not prime number');
}


// Armstrong number
// var rlsync =require('readline-sync')
// var a =rlsync.questionInt('plese enter a number----')
// var b =rlsync.questionInt('plese enter a secound number----')
// for(var i=a; i<=b;  i++){
//     var temp=i;
//     var noofdight=i;toString().length;
//     var sum=0;
//     while (temp>o) {
//         var digit=temp%10;
//         temp=parseInt(temp/10);
//         sum+=digit**noofdight;
//     }
//     if(sum==i){
//         console.log('armstrong number');
//     }
//     else{
//         console.log('not armstrong number');
//     }
        
//     }

    // var rlsync =require('readline-sync')
    // var number =rlsync.questionInt('enter any number-----')
    // int=n,r,c,arm=0;
    // n= r.nextInt();
    // while(n>0){
    //     rem=n%10;
    //     arm=(r*r*r)+arm;
    //     n=n%10
    // }
    // if(c==arm){
    //     console.log('armstrong number')
    // }
    // else{
    //     console.log('not armstrong number')
    // }


    
