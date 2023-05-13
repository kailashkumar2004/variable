var rlSync =require("readline-sync")
var time =rlSync.question("what is your time:-")

if(time>6 && time<7){
    console.log("runing")
}
else if(time>7 && time<8){
    console.log("sining")
}
else if(time>8 && time<9){
    console.log("dancing")
}
else if(time>9 && time<10){
    console.log("enjoy")
}
else if(time>11 && time<12){
    console.log("job")
}
else if(time>12 && time<13){
    console.log("ghumna")
}
else{
    console.log("noting number")
}