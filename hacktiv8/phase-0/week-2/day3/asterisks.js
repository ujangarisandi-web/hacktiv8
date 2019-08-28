// #Menyusun Barisan Bintang

var row1 = '';
for (var i = 0; i < 5; i++) {
    row1 += '*';
    row1 += '\n';
}
console.log(row1);

// #2. Menyusun Barisan Bintang Dengan Nested Looping
var row2 = '';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {

        row2 += '*';
    }
    row2 += '\n';
}
console.log(row2);

// #3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var row3 = '';
for (var i = 0; i < 5; i++) {
    for (var g = 0; g <= i; g++) {
        row3 += '*';
    }
    row3 += '\n';
}
console.log(row3);