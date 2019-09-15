/* 
mencari kelipatan dua dari array
*/





function kelipatanDua() {
    var arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8],
        [9, 10, 11, 12]
    ]
    var tamp = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 === 0) {
                tamp.push(arr[i][j])
            }
        }

    }
    return tamp
}
console.log(kelipatanDua());


console.log('===menjumlah isi dalam array====');

function sumTotal() {
    var arr = [
        [
            [1, 2],
            [3, 4]
        ],
        [
            [5, 6]
        ]
    ]
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            for (var k = 0; k < arr[i][j].length; k++) {
                total += arr[i][j][k]
            }
        }
    }
    return total
}
console.log(sumTotal());