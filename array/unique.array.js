// var array=[2,3,3,2,4,1,1,5,6,5,4]
// var b=[]
// for(var i=0; i<array.length; i++){
//     if(b.indexOf(array[i])== -1){
//         b.push(array[i]);
//     }
// }
// console.log(b)


var array = [4, 7, 1, 1, 7, 8, 9, 5, 6, 11, 13, 15, 17, 19];
var uniqueNumbers = [];
var i = 0;
while (i < array.length) {
    var j = i + 1;
    var isDuplicate = false;

    while (j < array.length) {
        if (array[i] === array[j]) {
            console.log(array[i])
            console.log(array[j])
            isDuplicate = true;
            break;
        }
        j++;
    }

    if (!isDuplicate) {
        uniqueNumbers.push(array[i]);
    }

    i++;
}

// console.log(uniqueNumbers);



// var number=[4,1,1,2,99,8,3,3,4,5,6,7,8,9,5,7,8,9,99];
// var dublecateNumbers =[];
// for(var i=0; i<number.length; i++){
//     if(dublecateNumbers.indexOf(number[i])== -1){
//         dublecateNumbers.push(number[i]);
//     }
// }
// console.log(dublecateNumbers)



// var number=[1,2,3,4,5,6,7,8,1,2,3];
// var uniqueNumbers=[];
// var i=0;
// for(var i=0; i<number.length; i++){
//     if(uniqueNumbers.indexOf(number[i])== -1){
//         uniqueNumbers.push(number[i])
//     }
// }
// console.log(uniqueNumbers)

// var elements = [99, 100, 29, 46, 77, 88, 98, 99, 29, 46];
// var uniqueNumbers = [];
// var i = 0;
// for (var i = 0; i < elements.length; i++) {
//     if (uniqueNumbers.indexOf(elements[i]) == -1) {
//         uniqueNumbers.push(elements[i])
//     }
// }
// console.log(uniqueNumbers)

// var array=[11,12,16,19,21,33,66,11,12,86,98];
// var uniqueNumbers=[];
// var i=0
// for(var i=0; i<array.length; i++){
//     if(uniqueNumbers.indexOf(array[i])  == -1){
//         uniqueNumbers.push(array[i])
//     }
// }
// console.log(uniqueNumbers)


// var number=[1,3,5,1,7,8,9,5,3];
// var uniqueNumbers=[];
// var i=0;
// for(var i=0; i<number.length; i++){
//     if(uniqueNumbers.indexOf(number[i]) == -1){
//         uniqueNumbers.push(number[i])
//     }
// }
// console.log(uniqueNumbers)

// var numbers=[1,2,3,4,5,6,7,1,3,2];
// var uniqueNumbers=[];
// var i=0;
// for(var i=0; i<numbers.length; i++){
//     if(uniqueNumbers.indexOf(numbers[i]) == -1){
//         uniqueNumbers.push(numbers[i])
//     }
// }
// console.log(uniqueNumbers)