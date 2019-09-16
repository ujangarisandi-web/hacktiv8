/*  
Logic Challenge - Check AB
Problem

Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.


CODE: 
function checkAB(num) {
  // you can only write your code here!
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

*/

function checkAB(num) {
    // you can only write your code here!
    var strA = ''
    var strB = ''
    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            strA = i
        } else if (num[i] === 'b') {
            strB = i
        }
    }
    return strA - strB === 4 || strB - strA === 4
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false