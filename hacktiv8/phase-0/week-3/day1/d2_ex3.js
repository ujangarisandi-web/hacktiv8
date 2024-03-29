/* 
Melakukan Looping Data Array

Sering kali data yang diterima dari database adalah array yang multidimensi (array di dalam array). Sebagai developer, tugas kita adalah mengolah data tersebut agar dapat menampilkan informasi yang diinginkan.
Objectives

    Mengenal Array Multidimensi
    Mengerti Cara Mengakses Nilai Array Multidimensi

Directions

Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. Contoh input dapat dilihat dibawah:
//contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:

Nomor ID : 0001
Nama Lengkap : Roman Alamsyah
Ttl : Bandar Lampung 21/05/1989
Hobi : Membaca


Nomor ID : 0002
Nama Lengkap : Dika Sembiring
Ttl : Medan 10/10/1992
Hobi : Bermain Gitar


Nomor ID : 0003
Nama Lengkap : Winona
Ttl : Ambon 25/12/1965
Hobi : Memasak


Nomor ID : 0004
Nama Lengkap : Bintang Senjaya
Ttl : Martapura 6/4/1970
Hobi : Berkebun

*/


var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];


function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
        console.log('Nomor ID : ' + input[i][0]);
        console.log('Nama Lengkap : ' + input[i][1]);
        console.log('Ttl : ' + input[i][2] + ' ' + input[i][3]);
        console.log('Hobi : ' + input[i][4]);
        console.log('\n');
    }
}
dataHandling(input);