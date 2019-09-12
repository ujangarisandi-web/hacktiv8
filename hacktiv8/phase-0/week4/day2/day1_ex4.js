/* 
Logic Challenge - Mencari Modus
Problem

Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
Code

function cariModus(arr) {
  // you can only write your code here!
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
*/



function cariModus(arr) {
    var kelompok = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j <= kelompok.length; j++) {
            if (kelompok[j] === undefined) {
                kelompok.push([arr[i], 1])
                break
            } else if (kelompok[j][0] === arr[i]) {
                kelompok[j][1] += 1
                break
            }
        }
    }
    /* mencari nilai modus */
    var dataModus = 0
    var muncul = 0
    for (var k = 0; k < kelompok.length; k++) {
        if (kelompok[k][1] > muncul) {
            dataModus = kelompok[k][0]
            muncul += kelompok[k][1]

        }

    }
    /* menghandle nilai yang sama */

    return dataModus


}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1