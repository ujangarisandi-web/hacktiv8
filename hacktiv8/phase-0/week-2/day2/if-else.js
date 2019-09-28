/* 
Menggunakan If Else
Objectives

    Mengerti Cara Menggunakan If-Else
    Mengerti Logika If-Else
    Mengerti Cara Menggunakan Operator Evaluasi ===, !==

Directions

Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.
Hints

    Variabel tetap di-input secara manual.
    Variabel nama dan peran dapat diisi apa saja.
    Nama tidak perlu dicek sama persis seperti contoh input/output
    Buat If-Else berbeda masing-masing untuk mengecek peran

    Input:
    //Contoh input
    var nama = 'Mikael';
    var peran = '';

    Silakan ganti nilai nama dan peran untuk mengetes kondisi!
Output:

// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"

// var namaD = 'ujang'
// var namaB = 'arisandi'
// var nama = namaD + namaB
// console.log(nama);
*/
var nama = 'Michael'
var peran = 'Penyihir'
var pesan = ''
if (nama !== '') {
    if (peran === '') {
        console.log('Halo ' + nama + ', pilih peranmu untuk memulai game!');
    } else {
        if (peran === 'Kesatria') {
            pesan = 'Halo Kesatria ' + nama + ', kamu dapat menyerang dengan senjatamu '
        } else if (peran === 'Tabib') {
            pesan = 'Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka '
        } else if (peran === 'Penyihir') {
            pesan = 'Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu '

        }
        console.log('Selamat datang di Dunia Proxitya, ' + nama);
        console.log(pesan);
    }
} else {
    console.log('Nama harus diisi!');
}