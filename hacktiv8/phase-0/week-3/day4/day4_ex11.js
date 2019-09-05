/* 

Logic Challenge - Tentukan Deret Aritmatika
Problem

Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.

CODE

function tentukanDeretAritmatika(arr) {
// you can only write your code here!
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

*/


function tentukanDeretAritmatika(arr) {

  var deretPertambahan = [];

  // code untuk mengecek pertambahan tiap deret dan memasukkannya ke array deretPertambahan
  for (var i = 0; i < arr.length - 1; i++) {
    var pertambahan = arr[i + 1] - arr[i];

    deretPertambahan.push(pertambahan);
  }
  // return pertambahan; //cek hasil pertambahan
  // return deretPertambahan; //cek hasil pertambahan dan ubah kedalam bentuk array


  // code untuk mengecek apakah elemen pada array deretPertambahan memiliki elemen yang sama semua
  for (var j = 0; j <= deretPertambahan.length - 1; j++) {
    if (deretPertambahan[j] !== deretPertambahan[0]) {
      return false;
    }
  }
  return true
}
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false