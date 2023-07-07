// adding===========================================================
// var num={a:6,b:1,c:11,d:19,e:51,f:17}
// num.k=99
// console.log(num)

// var name={name1:"kailash",name2:"sonam",name3:"komal"}
// name.name4="payal"
// console.log(name)

// change=========================================================
// var number={a:9,b:8,c:7,d:6,e:5,f:3}
// number.d=18
// console.log(number)

// var name={name1:"kailash",name2:"sonam",name3:"komal"}
// name.name1="sourav";
// console.log(name)

// delete=====================================================
// var number={a:9,b:8,c:7,d:6,e:5,f:12};
// delete number.d
// console.log(number)

// var name={name1:"payal",name2:"aaryan",name3:"sonam"}
// delete name.name3
// console.log(name)

// count======================================
// var number={a:9,b:8,c:7,d:6,e:5,f:4}
// var count=Object.keys(number).length
// console.log(count)

// var name={name1:"payal",name2:"aaryan",name3:"sonam"}
// var count =Object.keys(name).length
// console.log(count)

// length==============================================
// var number={num1:"77",num2:"90",num3:"12",num4:"10",num5:"70"}
// var length=Object.keys(number).length
// console.log(length)

// var name={name1:"komal",name2:"sonam",name3:"aaryan",name4:"nili"}
// var length=Object.keys(name).length
// console.log(length)


// index===================================
// var MyDetlis={
//            name:"kailash",
//            class:"12",
//            roll:"10",
//            college:"tkg"
// }
// console.log(MyDetlis)
// for(var i in MyDetlis){
//     console.log(i)
//     console.log(MyDetlis[i])
// }

// sum========================================
// var object={a:10,b:19,c:20,d:30,t:60}
// var sum=0
// for(var i in object){
//     sum=sum+object[i]
// }
// console.log(sum)

// even_and_odd=========================================
// var number={a:9,b:8,c:7,d:6,e:5,f:4,g:3,h:2,i:1,k:11,l:18,m:186}
// for(var i in number){
//     if(number[i]%2==0){
//         console.log(number[i],"even")
//     }
//     else{
//         console.log(number[i],"odd")
//     }
// }

// posstive_and_neagtive===========================
// var object={a:-9,b:8,c:-1,d:19,e:-5,f:3,h:15,j:12,k:-31,x:-16};
// for(var i in object){
//     if(object[i]>0){
//         console.log(object[i],"posstive")
//     }
//     else{
//         console.log(object[i],"neagtive")
//     }
// }

// uniqueNumber===========================================================
// var names={name1:"komal",name2:"sonam",name3:"payal",name4:"sourav",name1:"savita",name2:"sangita"}
// console.log(names)

// var Numbers={a:8,b:6,c:5,d:10,e:11,h:90,j:81,k:31,m:15,a:9,b:7,c:73}
// console.log(Numbers)


// max=================================================
// var number={a:40,b:30,c:67,d:35,e:12,f:71}
// var max=number[0]
// for(var i in number){
//     if(max=number[i]){
//         number[i]=max
//     }
// }
// console.log("max================",max)

// char_count=================================================

// var name="kailashkomal";
// var char_count={}
// for(var i in name){
//     var char=name[i]
//     char_count[char]=(char_count[char] || 0)+1
// }
// console.log(char_count)

// for(var i=0; i<name.length; i++){
//     var char=name[i]
//     char_count[char]=(char_count[char] || 0)+1
// }
// console.log(char_count)

// duble_array_of_object================================================
// var names=["kailash","sourav","sima","puja","rabina","chandani","laxmi","nutan","sona","indu"];
// var keys=["name1","name2","name3","name4","name5","name6","name7","name8","name9","name10"]
// var object={}
// for(var i in names ){
//     object[keys[i]]=names[i]
// }
// console.log(object)


// class=======================================================
// class number{
//     constructor(){
//         this.num1="99",
//         this.num2="90",
//         this.num3="56",
//         this.num4="20",
//         this.num5="10"
//     }
// }
// var new_number =new number()
// console.log(new_number)

// first_way============================
// var object={a:9,b:8,c:7,d:6,e:5,f:3,h:11}
// console.log(object.b)

// var names={name1:"komal",name2:"sonam",name3:"payal",name4:"sourav"}
// console.log(names.name4)

// secound_way=================================
// var object={a:9,b:8,c:7,d:6,e:5,f:3,h:11}
// console.log(object["c"])

// var names={name1:"komal",name2:"sonam",name3:"payal",name4:"sourav"}
// console.log(names["name3"])

// distraching==========================================
// var array=[9,8,7,6,5,4,3,2,1]
// var[a,b,c,d,r]=array
// console.log(a,b,c,d,r)

// var names=["komal","kailash","kishan","mona","sona"]
// var[a,b,n,i]=names
// console.log(a,b,n,i)


// var object={a:9,b:8,c:7,d:6,e:5,f:3,h:11}
// var{a,c,d,f}=object
// console.log(a,c,d,f)

// var names={name1:"komal",name2:"sonam",name3:"payal",name4:"sourav"}
// var{name1,name3,name4}=names
// console.log(name1,name3,name4)