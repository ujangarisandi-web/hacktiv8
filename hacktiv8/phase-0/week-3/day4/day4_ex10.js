/* Problem

Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.

CODE

function perkalianUnik(arr) {
  // you can only write your code here!
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
*/


function perkalianUnik(arr) {
    // contoh yang dicetak pertama = 2,4,6
    var hasilKali = 1 //berubah jd 48 karena looping for pertama
    var hasilAkhir;
    var hasilUnik = [];
    for (var i = 0; i < arr.length; i++) {
        hasilKali *= arr[i]; // 2*4*6 = 48
    }
    for (var j = 0; j < arr.length; j++) {
        hasilAkhir = hasilKali / arr[j] // 48/2 = 24, 48/4 = 12, 48/ 6 = 8
        hasilUnik.push(hasilAkhir) // push hasil 48 di bagian arr ke hasil unik
    }
    // return hasilKali; //mencetak for pertama
    // return hasilAkhir; // mencetak for ke
    return hasilUnik;
}
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]