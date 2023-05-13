
var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter the any num=");
var sum=0
var check=num;
var rem=0
var power=0
var len=num.toString().length
console.log("len------->",len)
while (num!=0){
    rem=num%10
    console.log("rem----",rem)
    power=Math.pow(rem,len)
    console.log("power---------->",power)
    sum=sum+power
    num=parseInt(num/10);
    console.log('num------------->',num)
}
console.log(sum)
if (sum==check){
    console.log(sum,"it is armstrong num")
}else{
    console.log(sum,"it is not armstrong num")
}