const file=require("fs");
file.rename("kailash.text","kailash12.text",function(err){
    if(err){
        console.log("err--------",err)
    }else{
        console.log("you have successfulyy rename your file")
    }
})