/*  
Logic Challenge - Password Generator
Problem

Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

    Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

    Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

    Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

    Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

CODE:

function changeVocals (str) {
  //code di sini
}

function reverseWord (str) {
  //code di sini
}

function setLowerUpperCase (str) {
  //code di sini
}

function removeSpaces (str) {
  //code di sini
}

function passwordGenerator (name) {
  //code di sini
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

*/


function changeVocals(str) {
    //code di sini
    var newStr = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'A') {
            if (str[i] += 'A') {
                newStr += 'B'
            } else {
                newStr += 'b'
            }
        } else if (str[i] == 'i' || str[i] == 'I') {
            if (str[i] = 'I') {
                newStr += 'J'
            } else {
                newStr += 'j'
            }
        } else if (str[i] == 'u' || str[i] == 'U') {
            if (str[i] == 'U') {
                newStr += 'V'
            } else {
                newStr += 'v'
            }
        } else if (str[i] == 'e' || str[i] == 'E') {
            if (str[i] == 'E') {
                newStr += 'F'
            } else {
                newStr += 'f'
            }
        } else if (str[i] == 'o' || str[i] == 'O') {
            if (str[i] == 'O') {
                newStr += 'P'
            } else {
                newStr += 'p'
            }
        } else {
            newStr += str[i]
        }
    }
    return newStr

}
console.log('===ubah huruf===');
console.log(changeVocals('Sergei Dragunov'));

function reverseWord(str) {

    var newStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }

    return newStr
}

console.log('====ini balik huruf===');
console.log(reverseWord('Sergei Dragunov'));

function setLowerUpperCase(str) {
    //code di sini
    //ubah kalimat ke dalam array
    var ubahStr = str.split('')
    // return ubahStr

    //ubah huruf besar dan kecil
    for (var i = 0; i < ubahStr.length; i++) {
        if (ubahStr[i].toUpperCase() === ubahStr[i]) {
            ubahStr[i] = ubahStr[i].toLowerCase()
        } else {
            ubahStr[i] = ubahStr[i].toUpperCase()
        }
    }
    //gabungkan kembali menjadi string
    return ubahStr.join('')
}
console.log('====ini balik huruf besar-kecil===');
console.log(setLowerUpperCase('Sergei Dragunov'));

function removeSpaces(str) {
    //code di sini
    var newStr = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            newStr += str[i]
        }
    }
    return newStr

}
console.log('====ini hapus spasil===');
console.log(removeSpaces('Sergei Dragunov'));

// function passwordGenerator(name) {
//     //code di sini
// }

// console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'