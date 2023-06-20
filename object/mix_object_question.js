// var number={num1:8,num2:9,num3:10,num4:11}
// number.num5=12
// console.log(number)

// var number={a:8,b:7,c:6,d:5,e:4}
// number.e=19
// console.log(number)

// var number={num1:9,num2:8,num3:7,num4:6,num5:5}
// delete number.num4
// console.log(number)

// var number={a:9,b:8,c:7,d:6,e:5,i:4,f:3}
// var count=Object.keys(number).length
// console.log(count)

// var num={a:9,b:8,c:7,d:5,h:4,k:11}
// var length=Object.keys(num).length
// console.log(length)

// var names={name1:"kailash",name2:"manci",name3:"manvi",name4:"moriya"}
// console.log(names)
// for(var i in names){
//     console.log(i)
//     console.log(names[i])
// }

// var number={num1:50,num2:80,num3:100,num4:-30};
// var sum=0
// for(var i in number){
//     sum=sum+number[i]
// }
// console.log("total of sum",sum)

// var values=[10,20,30,40,50,60,70,80];
// var numbers=["num1","num2","num3","num4","num5","num6","num7","num8"]
// var Object={}
// for(var i in values){
//     Object[numbers[i]]=values[i]
// }
// console.log(Object)

// var array={a:8,b:6,c:5,d:4,e:11,f:10}
// console.log(array.c)

// var number={num1:90,num2:80,num3:70,num4:60,num5:50}
// console.log(number["num4"])

// var array=[3,6,7,9,10,30,60,80,20,80]
// var [a,b,h,k,l]=array
// console.log(a,b,h,k,l)

// var number={a:7,b:11,c:19,d:16,e:21,f:17}
// var{a,c,e,f}=number
// console.log(a,c,e,f)

// var number={a:8,b:-5,c:11,d:-4,e:21,f:-1,g:17,h:15}
// for(var i in number){
//     if(number[i]>0){
//         console.log(number[i],"posstive")
//     }
//     else{
//         console.log(number[i],"neagtive")
//     }
// }

// var number={a:9,b:7,c:2,d:11,e:8,a:8,c:7}
// for(var i in number){
//     console.log(number[i])
// }

// class number{
//     constructor(){
//         this.num1="90",
//         this.num2="80",
//         this.num3="70",
//         this.num4="60",
//         this.num5="50",
//         this.num4="40"
//     }
// }
// var new_num =new number();
// console.log(new_num)

// var name="kailashkomalkirankaran";
// var charcount={}
// for(var i=0; i<name.length; i++){
//     var char=name[i]
//     charcount[char]=(charcount[char] || 0)+1
// }
// console.log(charcount)

// var array={a:8,b:9,c:11,d:21,e:10}
// console.log(array.d)

// var number={num1:21,num2:12,num3:31,num4:41}
// console.log(number["num3"])

// var number=[12,23,45,56,78,91,97,58]
// var elements=["a","b","c","d","e","f","g","h"]
// var numbers={}
// for(var i in number){
//     numbers[elements[i]]=number[i]
// }
// console.log(numbers)

// var number=[2,4,5,6,7,8,11,19,29,49];
// var element=["a","b","c","d","e","f","g","h","i","j"];
// var object={}
// for(var i in number){
//     object[element[i]]=number[i]
// }
// console.log(object)