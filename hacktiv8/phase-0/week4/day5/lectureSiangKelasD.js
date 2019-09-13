/* 
Studi kasus

Jika

INPUT
[
  ['Iphone 11', 999],
  ['Iphone 11 Pro', 1199],
  ['Iphone 11', 2999]
]


OUTPUT
{
  'Iphone 11': 2999,
  'Iphone 11 Pro': 1199
}

Buatlah  bentuk objek dari data diatas!
CODE:

function convertObject(items){
    
}


console.log(convertObject([
    ['Iphone 11', 999],
    ['Iphone 11 Pro', 1199],
    ['Iphone 11', 2999]
]));

*/
function convertObject(items) {
    var result = {}
    for (var i = 0; i < items.length; i++) {
        var keyName = items[i][0]
        // console.log(keyName);melihat isi Keyname
        if (!result[keyName]) {
            result[keyName] = items[i][1]
            // console.log(items[i][1])untuk meliahat isi dari index ke satu yakni 999,1199
        } else {
            if (result[keyName] < items[i][1]) {
                result[keyName] = items[i][1]
            }
        }
    }
    return result
}


console.log(convertObject([
    ['Iphone 11', 999],
    ['Iphone 11 Pro', 1199],
    ['Iphone 11', 2999]
]));

console.log('====array====');

function panggil(nama) {
    var objek = {} //{2, 'novi', 3, 'abi'}
    for (var i = 0; i < nama.length; i++) {
        var heyNama = nama[i][0]
        // console.log(heyNama); //melihat isi heyNama
        if (!objek[heyNama]) {
            objek[heyNama] = nama[i][1]
            // console.log(objek[heyNama]); //melihat isi objek[heyNama]
        } else {
            if (objek[heyNama] < nama[i][1]) {
                objek[heyNama] = nama[i][1]
            }
        }
    }
    return objek
}
console.log(panggil([
    ['ujang', 30],
    ['novi', 23],
    ['abi', 31]
]));

// var array = [
//     [1, 'ujang'],//gak gw panggil
//     [2, 'novi'],
//     [3, 'abi']
// ]
// var lihat = array[1][0]
// console.log(lihat);