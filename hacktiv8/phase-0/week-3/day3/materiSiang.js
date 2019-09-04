/* // mencetak aray
var array = [];

array.push(1)

array.push(2)

console.log(array);//1
console.log(array.pop());//[2]
console.log(array); */


/* 
Methode POP
var array2 = [
    [1, 2],
    [1, 2, 3]
];

console.log(array2[0]); //[1,2]
console.log(array2.pop()); //[1,2,3]
console.log(array2); //[[1,2]] 
*/
/* 
Multidimensi Array dan methode push
var student = [
    ['Budi', '10'],
    ['Arif', 20],
    ['Ilham', 30],
    ['Capung', 25],
    ['Hanif', 30]
];

console.log(student[1][0]); // Arif 
console.log(student[1][1]); // Arif 20


//mengambil student usia < 30th

for (var i = 0; i < student.length; i++) {
    if (student[i][1] < 30) {
        console.log(student[i]);
    }
}

//nambahin student baru ke dalam array
student.push(['nama', 10])
console.log(student);

*/



/* var angka = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15]
];

//mengambil angka genap dari array angka

var result = [];
for (var i = 0; i < angka.length; i++) {
    for (var j = 0; j < angka[i].length; j++) {
        if (angka[i][j] % 2 === 0) {
            console.log(angka[i][j]);
            result.push(angka[i][j])
        }
    }
}
console.log(result); */


/*Bermasalah 
var angka = [
    [
        [99, 100]
    ],
    [
        [9, 10, 11],
        [121, 13, 141, 15]
    ]
];

​

for (var i = 0; i < angka.length; i++) {

    for (var j = 0; j < angka[i].length; j++) {

        for (var k = 0; k < angka[i][j].length; k++) {

            if (angka[i][j][k] > 100) {

                console.log(angka[i][j][k]);

            }

        }

    }
} */



/* mencari posisi kursi
var kursi = [
    ['', '', ''],
    ['', 'a', ''],
    ['', '', '']
];

for (var i = 0; i < kursi.length; i++) {
    for (var j = 0; j < kursi[i].length; j++) {
        if (kursi[i][j] === 'a') {
            console.log('Row :' + i);
            console.log('Colum :' + j);
        }
    }
} 
*/



/*Bermasalah 
var kursi2 = [
    ['#', '#', ' ', '#', '#'], //0

    ['#', '#', ' ', '#', '#'], //1

    [' ', '#', ' ', '#', '#']
]; //2

​
var tangga = Math.floor(kursi2[0].length / 2);
for (var i = 0; i < kursi2.length; i++) {
    for (var j = 0; j < kursi2[i].length; j++) {
        if (j! == tangga) {
            if (kursi2[i][j] == ' ') {
                console.log('Row : ' + i);
            }
        }
    }
} */


/* Jualan Batu-batuan
var jualan = [
    ['gold', 10],
    ['silver', 5]
]

// print harga-harga batu:
for (var i = 0; i < jualan.length; i++) {
    console.log('Harga : ' + jualan[i][0] + ' ' + jualan[i][1]);
}
// tambah data array gold
for (var i = 0; i < jualan.length; i++) {
    if (jualan[i][0] === 'gold') {
        jualan[i].push('20', '40', '50');
    }
}
console.log(jualan);
// menambahkan  array pada silver
jualan[1].push(30);
console.log(jualan);
 */


/* Bermasalah
//1

//1 2

//1 2 3

//1 2 3 4

​

var num = 4

var result = [];

for (var i = 1; i <= num; i++) {

    str = []

    for (var j = 1; j <= i; j++) {

        str.push(j);

    }

    console.log(str);

    result.push(str);

}

​


console.log(result);

var temp = [];

temp.push('a');

temp.push(12)

temp.push([1, 2, 3])

console.log(temp); */



/* Masih beramasalah
//1          1: 1*1

//2 4        2: 2*1 2*2

//3 6 9      3: 3*1 3*2 3*3

//4 8 12 16  4: 4*1 4*2 4*3 4*4

var num = 4;

var result = [];

for (var i = 1; i <= num; i++) {

    str = []

    for (var j = 1; j <= i; j++) {

        str.push(i * j);

    }

    console.log(str);

    result.push(str);

}

console.log(result);

​

​




​

​

​