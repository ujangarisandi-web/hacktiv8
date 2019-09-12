/* 
buatlah sebuah fungsi perulangan, untuk mengitung jumlah total index dari kalimat/nama
contoh:
n+o+v+i+a+n+t+i
1+2+3+4+5+6+7+8 = 36
*/
console.log('=======satu=========');
nilai = 0

function jumlahIndexNama(nama) {
    for (var i = 0; i < nama.length; i++) {
        nilai += i + 1
    }
    return nilai
}
console.log(jumlahIndexNama('novianti'));
console.log(jumlahIndexNama('ujang arisandi'));
console.log('=======dua=========');

str = ''
nilai2 = 0
abjad = 'abcdefghijklmnopqrstuvwxyz '

function jumlahIndexNama2(nama) {
    for (var i = 0; i < nama.length; i++) {
        for (var j = 0; j < abjad.length; j++) {
            if (nama[i] === abjad[j]) {
                nilai2 += j + 1


            }
        }
    }
    return nilai2
}
console.log(jumlahIndexNama2('ujang arisandi'));