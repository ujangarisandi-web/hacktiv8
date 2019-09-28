/* 

Logic Challenge - X dan O
Problem

Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
Code:

function xo(str) {
  // you can only write your code here!
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
*/


function xo(str) {

    var o = 0;
    var x = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'o') {
            o++;
        } else {
            x++;
        }
    }

    return (o === x);
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true