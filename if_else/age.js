var rlSync =require('readline-sync')
var age1 =rlSync.questionInt('enter the age1---:')//25,66,19
var age2 =rlSync.questionInt('enter the age2---:')//40,45,32
var age3 =rlSync.questionInt('enter the age3---:')//47,28,16
if(age1>age2 && age1>age3){
    console.log('age1 bada hai')
}
else if(age2>age1 && age2>age3){
    console.log('age2  bada hai')
}
else if(age3>age1 && age3>age2){
    console.log('age3 bada hai')
}
else{
    console.log('all age same')
}
    