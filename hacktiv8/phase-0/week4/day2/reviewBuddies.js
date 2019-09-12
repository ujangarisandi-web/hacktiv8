/* 
buatlah sebuah fungsi perulangan, untuk mengitung jumlah total index dari kalimat/nama
contoh:
n+o+v+i+a+n+t+i
1+2+3+4+5+6+7+8 = 36

PESUDO CODE
START
    FUNCTION jumlahNamaIndex dengan parameter nama
    inisialisasi nilai dengan nol
        FOR seluruh isi dari panjang nama
            nilai ditambah idex i ditambah satu
        END FOR
        DISPLAY nilai

END
*/
console.log('=======satu=========');

function jumlahIndexNama(nama) {
    var nilai = 0
    for (var i = 0; i < nama.length; i++) {
        nilai += (i + 1)
    }
    return nilai
}
console.log(jumlahIndexNama('novianti')); //36
console.log(jumlahIndexNama('ujang arisandi')); //105
console.log('=======dua=========');
/* 
diketahui nama/kalimat , jumlahkan nama/kalimat sesuao abjad dari huruf tiap nama/kalimat sesuai urutan bajadnya
cth: aris = 1+18+9+19 = 47
PSEUDOCODE

START
    FUNCTION jumlahNamaIndex2 dengan parameter `nama`
    inisialisasi `nilai` dengan  nilai nol
    inisialisasi `abjad` dengan huruf a-z dan spasi
    FOR isi dari seluruh panjang `nana`
        FOR isi dari seluruh panjang `abjad`
            IF `nama` index ke-i sama dengan `abjad` index ke j THEN
                `nilai` ditambah `nilai` ditambah j plus satu
            END IF
        END IF
    END FOR
    DISPLAY `nilai`    
END

*/

function jumlahNamaIndex2(nama) {
    nilai = 0
    abjad = 'abcdefghijklmnopqrstuvwxyz '
    for (var i = 0; i < nama.length; i++) {
        for (var j = 0; j < abjad.length; j++) {
            if (nama[i] === abjad[j]) {
                nilai = nilai + j + 1
            }
        }
    }
    return nilai
}
console.log(jumlahNamaIndex2('ujang arisandi'));