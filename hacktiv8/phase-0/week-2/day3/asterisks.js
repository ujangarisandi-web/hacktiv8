/* 
Looping

Soal looping - asterisk ini memiliki 3 nomor.
1. Menyusun Barisan Bintang
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.
Skeleton Code:

var rows1; // input the number of rows

// do loops to display asterisks in the console.

Output

jika rows1 = 5

*
*
*
*
*




*/


// #Menyusun Barisan Bintang

var row1 = '';
for (var i = 0; i < 5; i++) {
    row1 += '*';
    row1 += '\n';
}
console.log(row1);
// ===================================================
/* 

2. Menyusun Barisan Bintang Dengan Nested Looping
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
Skeleton Code:
var rows2; // input the number of rows

// do loops to display asterisks in the console.

Output

jika rows2 = 5

*****
*****
*****
*****
*****


*/

// #2. Menyusun Barisan Bintang Dengan Nested Looping
var row2 = '';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {

        row2 += '*';
    }
    row2 += '\n';
}
console.log(row2);

//==========================================================

/* 
3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
Skeleton Code:
var rows3; // input the number of rows

// do loops to display asterisks in the console.

Output

jika rows3 = 5

*
**
***
****
*****

*/

// #3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var row3 = '';
for (var i = 0; i < 5; i++) {
    for (var g = 0; g <= i; g++) {
        row3 += '*';
    }
    row3 += '\n';
}
console.log(row3);