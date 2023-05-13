var rlsync =require('readline-sync')
var a =rlsync.questionInt('enter the first number---:')
var b =rlsync.questionInt('enter the secound number---:')
var oprater=rlsync.question('enter the oprater----:')
if(oprater=="+"){
    console.log(a+b)
}
else if(oprater=="-"){
    console.log(a-b)
}
else if(oprater=="*"){
    console.log(a*b)
}
else if(oprater=='/'){
    console.log(a/b)
}
else if(oprater=='%'){
    console.log(a%b)
}

else if(oprater=='**'){
    console.log(a**b)
}
else{
    console.log("please input any valid oprate---")
}
