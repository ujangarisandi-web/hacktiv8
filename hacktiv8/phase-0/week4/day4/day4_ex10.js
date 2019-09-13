/* 
Logic Challenge - Change Me!
Problem

Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

    Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
    John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }

Code:

function changeMe(arr) {
  // you can only write your code here!
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""

*/

function changeMe(arr) {
    for (var i = 0; i < arr.length; i++) {
        var arrObj = {}
        arrObj.firstname = arr[i][0]
        arrObj.lastname = arr[i][1]
        arrObj.gender = arr[i][2]
        arrObj.age = arr[i][3]
        if (arr[i][3] === undefined) { // jika usianya tidak ada
            arrObj.age = 'invalid Birt year'
        } else {
            arrObj.age = 2019 - arr[i][3]
            console.log(arrObj.age); //melihat hasil dari umur
        }
        console.log(arrObj)
    }
    if (arr.length === 0) { // mengecek kalo datanya kosong
        console.log('""');
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""