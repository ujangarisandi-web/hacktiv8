/* Logic Challenge - Pasangan Angka Terbesar
Problem

Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

CODE :

function pasanganTerbesar(num) {
  // you can only write your code here!
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

*/

function pasanganTerbesar(angka) {
  var strAngka = angka.toString();

  //pengulangan untuk mengambil tiap pasangan angka untuk dimasukan ke array (arrStrAngka)
  var arrStrAngka = [];
  for (var i = 0; i < strAngka.length - 1; i++) {
    arrStrAngka.push(Number(strAngka[i] + strAngka[i + 1]));

  }
  // return arrStrAngka;
  //buat array baru yang sama dengan arrStrAngka menggunakan methode slice, lalu diurutkan dari yang terbesar.
  var urutan = arrStrAngka.slice();
  urutan.sort(function (a, b) {
    return b - a
  })
  //mengembalikan nilai index terakhir dari array urutan
  return urutan[0];

}
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99