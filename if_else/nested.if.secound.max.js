
var rlSync =require('readline-sync')
var a =rlSync.questionInt('what is your a---:')//3,4,5
var b =rlSync.questionInt('what is your b---:')//4,3,3,
var c =rlSync.questionInt('what is your c---:')//5,5,4
if (a>b){
    if (b<c){
        console.log(a,"is sec_max======")
    }
    else if (b>c){
        console.log(b," is sec_max(((((((((")
    }
}
else if (b>a){//3,12,14
    if (a<c){
        
        console.log(b," is sec_max--------------")
    }
    else if (b>c){
        console.log(a," is sec_max000000000")
    }
}
else{
    console.log(c," is max**********")
}