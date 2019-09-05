/* Logic Challenge - Tentukan Deret Geometri
Problem

Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret geometri. Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian. Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3, dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!). 


CODE

function tentukanDeretGeometri(arr) {
  // you can only write your code here!
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

*/

function tentukanDeretGeometri(arr) {
    var deretPertambahan = [];

    // code untuk mengecek perkalian tiap deret dan memasukkannya ke array deretPertambahan
    for (var i = 0; i < arr.length - 1; i++) {

        var pertambahan = arr[i + 1] / arr[i];

        deretPertambahan.push(pertambahan);
    }
    // return deretPertambahan; //hasil perkalian


    for (var j = 0; j <= deretPertambahan.length - 1; j++) {
        if (deretPertambahan[j] !== deretPertambahan[0]) { // code untuk mengecek apakah elemen pada array deretPertambahan memiliki elemen yang sama semua
            return false;
        }
    }
    return true
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false