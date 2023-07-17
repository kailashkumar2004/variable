
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