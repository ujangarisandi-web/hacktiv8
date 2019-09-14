console.log('======Paindrome======');

function palindrome(kata) {
    var lawanKata = ''
    for (var i = kata.length - 1; i >= 0; i--) {
        lawanKata += kata[i]

    }
    if (kata === lawanKata) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

console.log('===Menghitung jumlah kata===');


function hitungJumlahKata(kalimat) {
    var str = kalimat.split(' ')
    return str.length


}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5