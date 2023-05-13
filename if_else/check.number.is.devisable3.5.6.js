var rlSync =require('readline-sync')
var number =rlSync.question('what is your number:-')
if(number%3==0 && number%5==0){
    console.log('navgurukul')
}
// else if(number%3==0 && number%5==0){
//     console.log('navgurukul')
// }
else if(number%3==0 && number%6==0){
    console.log('manvi')
}
else{
    console.log('enter valid number')
}
