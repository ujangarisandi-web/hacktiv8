/* Logic Challenge - Angka Prima
Problem

Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.
Code 


function angkaPrima(angka) {
  // you can only write your code here!
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

*/

function angkaPrima(angka) {
    if (angka % 2 === 0 && angka !== 2) {
        return false
    }
    return true
}
console.log(angkaPrima(3));
console.log(angkaPrima(7));
console.log(angkaPrima(6));
console.log(angkaPrima(23));
console.log(angkaPrima(33));