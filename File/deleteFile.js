// const file=require('fs');
// file.unlink("bhai.text",function(err){
//     if(err){
//         console.log("err------",err)
//     }else{
//         console.log("file has been successfully delete")
//     }
// })

var file=require("fs")
file.unlink("every.text",function(err){
    if(err){
        console.log("err==================",err)
    }
    else{
        console.log("you have delete file")
    }
})