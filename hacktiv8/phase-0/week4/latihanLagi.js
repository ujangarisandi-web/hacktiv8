// function cariO(lintasan) {

//     var langkah = 0
//     for (var i = 0; i < lintasan.length; i++) {
//         langkah = langkah + 1
//         // console.log(langkah);
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
            total = total + 1
        }
    }

    return total
}
console.log(cariModus('ujangdanilhamn', 'n')); //3
console.log(cariModus('egaandika', 'e')); //1