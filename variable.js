// var a=9
// var b=7
// console.log(a+b)

// var a=90
// var b=9
// var a=6
// var b=7
// console.log(a+b)

// var a=9
// var b=6
// var a=19
// var b=11
// console.log(a-b)

// var a=90
// var b=10
// console.log(a-b)

// var a=27
// var b=3
// console.log(a/b)

// var b=90
// var a=5
// var b=80
// var a=5
// console.log(b/a)


// var day="sunday"
// if(day=="sunday"){
//     console.log("rice dal")
// }
// else{
//     console.log("panir matar")
// }

var readline= require("readline-sync")
var day =readline.question("enter the any your day=============")
if(day=="sunday"){
    console.log("aalu chana")
}
else if(day=="monday"){
    console.log("rice dal")
}
else if(day=="tuesady"){
    console.log("chiken roti")
}
else if(day=="wenesday"){
    console.log("kari rice")
}
else if(day=="thuresday"){
    console.log("matan rice")
}
else if(day=="friday"){
    console.log("biryani")
}
else{
    console.log("paw baji")
}