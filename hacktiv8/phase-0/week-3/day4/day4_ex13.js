/* Logic Challenge - Target Terdekat
Problem

Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0. 


CODE

function targetTerdekat(arr) {
  // you can only write your code here!
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

*/

function targetTerdekat(arr) {
    var indexO = [];
    var indexX = [];
    var arrBanding = [];


    // code untuk mencari index dari x dan o
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] == "o") {
            indexO.push(i)
        } else if (arr[i] == "x") {
            indexX.push(i)
        }
    }

    // apabila tdk ada x sama sekali, return 0
    if (indexX.length == 0) {
        return 0;
    }

    // menghitung perbandingan jarak antar x, kemudian di push ke array arrBanding
    var jarak;
    for (var j = 0; j <= indexX.length - 1; j++) {
        jarak = Math.abs(indexO[0] - indexX[j])
        arrBanding.push(jarak)
    }

    arrBanding.sort(function (a, b) {
        return a - b
    })

    return arrBanding[0];

    // return indexX;

}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2