/*
Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

Pertama : merubah angka menjadi String.
Kedua : mengurutkan string satu per satu
Ketiga : 

 function pasanganTerbesar(num) {
    // 1.siapkan sebuah variable array kosong untuk menampung pasangan angka.
    var angkaPasangan = [];
    // 2.konversi angka menjadi string untuk dapat di lopping
    var keString = num.toString();
    // 3.looping nilai dalam string , lalu akses nilai dan nilai setelahnya.blue-backgroundfar
    for (var i = 0; i < keString.length - 1; i++) {
        // 4.buat sebuah varible pair untuk menampung nilai dan sebelahnya
        var pair = keString[i] + keString[i + 1];
        // 5.ubah pair yang merupakan string menjadi number
        var pairNumber = Number(pair);
        // 6.masukan nilai paiNumber td keadalam array angkaPasangan.
        angkaPasangan.push(pairNumber);
    }
    // ==========mencari angka terbesar dari pasangan angka========
    angkaPasangan.sort();
    var max = angkaPasangan[angkaPasangan.length - 1];
    return max;
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
 */




/* http://www.jstips.co/en/javascript/looping-over-arrays/ */

/* // while
var index = 0;
var array = [1, 2, 3, 4, 5, 6];

while (index < array.length) {
    console.log(array[index]);
    index++;
} */

/* //for
var array = [1, 2, 3, 4, 5, 6];
for (var index = 0; index < array.length; index++) {
    console.log(array[index]);
} */




/* https://www.w3schools.com/js/js_loop_for.asp */
/* 
BMW 
BMW Volvo 
BMW Volvo Saab 
BMW Volvo Saab Ford 
BMW Volvo Saab Ford Fiat 
BMW Volvo Saab Ford Fiat Audi 
*/
/* var text = ''
// var cars = [1, 2, 3, 4, 5, 6];
var cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];
for (var i = 0; i < cars.length; i++) {
    text += cars[i] + ' ';
    console.log(text);
} */



/* var text = '';
for (var i = 0; i < 5; i++) {
    text += 'The number is ' + i + ' \n'
}
console.log(text); */


/* 
   4
  444
 44444
4444444*/



// SKELETON CODE 2 (Code Sample)
var angka = 4; // isi dengan nilai tinggi piramid
var text = ''
// Buat code disini untuk part 2.
function piramid() {
    for (var i = 0; i < angka; i++) {
        for (var j = 0; j < angka - i - 1; j++) {
            text += ' '
        }
        for (var k = 0; k < ((i * 2) + 1); k++) {
            text += angka
        }
        text += '\n'
    }
    return text
}
console.log(piramid())