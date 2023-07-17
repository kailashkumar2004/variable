
var array = [18, 90, 36, 78, 40, 50, 70, 100];
var max = array[0];
var i = 0
while (i < array.length) {
    if (array[i] > max) {
        max=array[i]
    }
    i=i+1
}
console.log(max)
for (var i in array) {
    if (array[i] > max) {
        max=array[i]
    }
}
console.log(max)

for (var i of array) {
    if (i > max) {
        max=i
    }
}
console.log(max)


for (var i = 0; i < array.length; i++){
    if (array[i] > max) {
        max=array[i]
    }
}
console.log(max)