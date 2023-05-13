// var x=3
// if(x%3==0 && x%1==0){
//     console.log(x,"prime number hai")
// }
// else{
//     console.log(x,"prime number ")
// }

// var y=11
// if(y%11==0 && y%1==0){
//     console.log(y,"prime number hai")
// }
// else{
//     console.log(y,"prime number nahi hai")
// }
// var num=50
// var prime_count=0
// for(var i=1; i<=50; i++){
//     if(i%50==0 && num%1==0 ){
//     console.log("prime_count")
//     }
//     else{
//         console.log('not prime')
//     }


// }








let isPrime;
for (let i = 2; i <= 50; i++) {
  isPrime = prime
  for (let j = 2; j <= 50; j++) {
    if (i % j === 0) {
      isPrime = notprime;
      break;
    }
  }
  if (isPrime) {
    primeNumbers.push(i);
  }
}
console.log(primeNumbers.length)