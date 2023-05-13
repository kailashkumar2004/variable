
var rlSync =require('readline-sync')
var Number =rlSync.question('what is your number:-')
if(Number<0){
    console.log("this is the negative number")
}
else if(Number>=0){
    console.log("this is the number postive")
}
else{
    console.log("enter the valid number")
}