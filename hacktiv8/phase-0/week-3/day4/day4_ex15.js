/* Logic Challenge - Mengelompokkan Hewan
Problem

Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

Code:

function groupAnimals(animals) {
  // you can only write your code here!
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

*/


function groupAnimals(animals) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz';
    var arr = [];

    // code pengurutann abjad
    for (var i = 0; i <= kamus.length - 1; i++) {
        var tampung = [];

        // code pengumpulan hewan berdasarkan abjad alpha
        for (var j = 0; j <= animals.length - 1; j++) {
            if (animals[j][0] === kamus[i]) {
                tampung.push(animals[j])
            }
        }
        //code untuk pengumpulan hewan setelah abjad alpha
        if (tampung.length > 0) {
            arr.push(tampung);
        }

    }
    return arr;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]