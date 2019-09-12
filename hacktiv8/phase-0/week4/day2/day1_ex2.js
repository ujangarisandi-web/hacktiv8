/* Logic Challenge - Faktor Persekutuan Terbesar
Problem

Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
 
CODE:

function fpb(angka1, angka2) {
  // you can only write your code here!
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

*/
var angka1;

function fpb(angka1, angka2) {
  // var  check = angka1< angka2? angka1:angka2
  var check = 0
  if (angka1 < angka2) {
    check = angka1
  } else {
    check = angka2
  }
  for (var i = check; i >= 0; i--) {
    if (angka1 % i === 0 && angka2 % i === 0) { // akan terus mengulang hingga ditemukan angka yang dapat membagi kedua angka tersebut
      return i
    }
  }


}
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1