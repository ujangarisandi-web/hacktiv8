// var arr = ['a', 1, true];
// console.log(arr[1]);
// ===========================================
// var nama = 'Hello World!'
// var arr = [''];

// function balikString(name) {
//     var namaLength = name.length;
//     for (namaLength; namaLength > 0; namaLength--) {
//         // namaReverse = namaReverse + nama[namaLength-1];
//         arr += nama[namaLength - 1];
//     }

//     return arr;
// }

// console.log(balikString(nama));
// =================================================

var nilai = 'isi variable global';

function cobain() {
    var nilai = 'isi variable lokal';
    var nilaiLokal = 'hacktiv8';
    tanpaVar = 'no scope';
    console.log(nilai);
}
console.log(cobain());