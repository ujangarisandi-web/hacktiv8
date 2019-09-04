// var array = [];

// array.push(1)

// array.push(2)

//console.log(array);

//[1]

//console.log(array.pop());

//console.log(array);

​

// var array2 = [
//     [1, 2],
//     [1, 2, 3]
// ];

//console.log(array2[0]); //[1,2]

// console.log(array2.pop());

// console.log(array2);

​

// var student = [

//     ['Budi', 10],

//     ['Arif', 20],

//     ['Ilham', 30],

//     ['Capung', 25],

//     ['Hanif', 30]
// ];

// console.log(student[1][0]);

// console.log(student[1][1]);

​

//ngambil student <30 tahun

// for (var i = 0; i < student.length; i++) {

//     if (student[i][1] < 30) {

//         // console.log(student[i]);

//     }

// }

​

//nambahin student baru ke dalam

// student.push(['nama', 10])

// console.log(student);

​

// var angka = [
//     [1, 2, 3, 4, 5, 6, 7, 8],
//     [9, 10, 11, 12, 13, 14, 15]
// ];

//mengambil angka genap dari array angka

// var result = [];

// for (var i = 0; i < angka.length; i++) {

//     for (var j = 0; j < angka[i].length; j++) {

//         if (angka[i][j] % 2 === 0) {

//             console.log(angka[i][j]);

//             result.push(angka[i][j]);

//         }

//     }

// }

// console.log(result);

​

/*
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
}
 */

​

// var kursi = [
//     ['', '', ''],

//     ['', 'a', ''],

//     ['', '', '']
// ];

// for (var i = 0; i < kursi.length; i++) {

//     for (var j = 0; j < kursi[i].length; j++) {

//         if (kursi[i][j] === 'a') {

//             console.log("Row :" + i);

//             console.log("Column :" + j);

//         }

//     }

// }

​

// 0    1    2    3    4

/*
var kursi2 = [
    ['#', '#', ' ', '#', '#'], //0

    ['#', '#', ' ', '#', '#'], //1

    [' ', '#', ' ', '#', '#']
]; //2

​

var tangga = Math.floor(kursi2[0].length / 2);

for (var i = 0; i < kursi2.length; i++) {

    for (var j = 0; j < kursi2[i].length; j++) {

        if (j !== tangga) {

            if (kursi2[i][j] === ' ') {

                console.log('row ' + i);

                console.log('column ' + j);

            }

        }

    }

}
*/


/* var jualan = [
    ['gold', 10],
    ['silver', 5]
];

//print harga-harga batu:

for (var i = 0; i < jualan.length; i++) {

    console.log('harga ' + jualan[i][0] + " " + jualan[i][1]);

}

​

for (var i = 0; i < jualan.length; i++) {

    if (jualan[i][0] === 'gold') {

        jualan[i].push('20');

    }

}

console.log(jualan);

jualan[1].push(30);

console.log(jualan);

​ */



/* 
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

​

​

console.log(result);

var temp = [];

temp.push('a');

temp.push(12)

temp.push([1, 2, 3])

console.log(temp); */

​
/* 
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
 */
​
/* 
function palindromeAngka(angka) {



    if (angka < 9) {

        return angka + 1;

    } else {

        do {

            angka++;

            var angkaString = angka.toString();

        }

        //100

        // 1 0 0

        // 0 0 1

        //001 != 100

        ​

        //101

        // 1 0 1

        // 1 0 1

        // 101

        while (!palindromeKata(angkaString));

        return angka;

    }

}

​ */

// function palindromeKata(asd) {

//     //

// }



// var str = '100'

// var array = str.split(""); // ['1','0','0']

// array.reverse(); // ['0','0','1'];

// array.join(""); //'001'

​

// console.log(palindromeAngka(8)) //palindromeAngka(8) //9 

// console.log(palindromeAngka(10)) //palindromeAngka(10) //11

// console.log(palindromeAngka(12)) //palindromeAngka(12) //22 

// console.log(palindromeAngka(100)) //palindromeAngka(100) //101

// console.log(palindromeAngka(120)) //palindromeAngka(120) //121