var arr = []

// []
arr[arr.length] = 'Yusuf'
// ['Yusuf']

arr[arr.length] = 20
// ['Yusuf', 20]

arr[arr.length] = true
// ['Yusuf', 20, true]

arr[7] = [75, 80, 85]

// ['Yusuf', 20, true, undefined, undefined, undefined, undefined, [75, 80, 85]]


// 0        1   2     3           4           5        6          7
// console.log(arr)

// for(var i = 0; i < arr.length; i++) {
//   for(var j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j])
//   }
// }

var joyful = [
    ['andika', 'danang', 'ulfa', 'gilang'],
    ['royhan', 'ega', 'adrian', 'amalya', 'fadhilah'],
    ['syiril', 'joddy', 'bram', 'syahril', 'hengki'],
    ['aron', 'iqbal', 'sinung', 'ulul', 'cakra']
]
var namaA = []
var namaI = []
// ngelist nama-nama yang ada hufur i-nya
for (var i = 0; i < joyful.length; i++) {
    for (var j = 0; j < joyful[i].length; j++) {
        // for(var k = 0; k < joyful[i][j].length; k++) {
        //   if(joyful[i][j][k] === 'i') {
        //     namaI.push(joyful[i][j])
        //     break
        //   } else if(joyful[i][j][k] === 'a') {
        //     namaA.push(joyful[i][j])
        //     break
        //   }
        //   else {
        //     console.log(joyful[i][j][k])
        //   }
        // }
        if (joyful[i][j].indexOf('a') !== -1) {
            namaA.push(joyful[i][j])
        }
        if (joyful[i][j].indexOf('i') !== -1) {
            namaI.push(joyful[i][j])
        }
    }
}
console.log(namaA)
console.log(namaI)

var gabungan = [namaA, namaI]
console.log(gabungan)

var barisDepan = [
    ['andika', 'male'],
    ['danang', 'male'],
    ['ulfa', 'female'],
    ['gilang', 'male']
]

for (var i = 0; i < barisDepan.length; i++) {
    // if(barisDepan[i][1] === 'male') {
    //   console.log(barisDepan[i][0])
    // } else if (barisDepan[i][1] === 'female') {
    //   console.log(barisDepan[i][0], 'perempuan')
    // }
}

/*
  i = 0
    j = 0
    j = 1
    j = 2
  i = 1
    j = 0
    j = 1
    j = 2
  i = 2
    j = 0
    j = 1
    j = 2


 */