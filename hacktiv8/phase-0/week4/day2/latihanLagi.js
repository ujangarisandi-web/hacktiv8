// function cariO(lintasan) {

//     var langkah = 0;
//     for (var i = 0; i < lintasan.length; i++) {
//         langkah += 1
//         if (lintasan[i] === 'o') {
//             return langkah
//         }
//     }
//     return 0

// }
// console.log(cariO(['', '', 'o', '', ''])); //3
// console.log(cariO(['', '', '', '', 'o'])); //5
// console.log(cariO(['', ''])); //0

console.log('====Modus===');

function cariModus(nama1, nama2) {
    var total = 0
    for (var i = 0; i < nama1.length; i++) {
        if (nama1[i] === nama2) {
            total += 1
        }
    }
    return total
}
console.log(cariModus('ujangdanilhamn', 'n')); //3
console.log(cariModus('egaandika', 'e')); //1

// console.log('============baru==============');


// function cariNilai(lintasan) {
//     var langkah = 0
//     for (var i = 0; i < lintasan.length; i++) {
//         // console.log(langkah);
//         langkah = langkah + 1
//         if (lintasan[i] === 'o') {
//             return langkah - 1
//         }
//     }
//     return -1
// }
// console.log(cariNilai(['o', '', '', '', ''])); //0
// console.log(cariNilai(['', '', '', '', 'o'])); //4
// console.log(cariNilai(['', ''])); //-1