/* Logic Challenge - Ubah Huruf
Problem

Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
Code 

function ubahHuruf(kata) {
  // you can only write your code here!
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
*/
function ubahHuruf(kata) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz'
  var hasil = ''
  for (var i = 0; i < kata.length; i++) {
    var posisiHuruf = abjad.indexOf(kata[i])
    var posisiBaru = posisiHuruf + 1
    var hurufBaru = abjad[posisiBaru]
    hasil += hurufBaru
  }
  return hasil
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu