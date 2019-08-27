// Percepatan sebuah benda akan sebanding dengan gaya 
// yang diberikan pada benda dan berbanding terbalik
// dengan massa benda. Arah percepatan benda sama 
// dengan arah gaya total yang diberikan pada benda.




// 2. Tahun Kabisat

// -Jika tahun habis di bagi 4 dan tidak habis di bagi 100, atau
// -Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400

// STORE 'tahun' with any value tahun

// IF 'tahun' MOD 4 EQUALS 0 AND 'tahun' MOD 100 EQUALS 0 AND 'tahun' MOD 400 EQUALS 0 THEN
//     DISPLAY 'Tahun kabisat'
// ELSE
//     DISPLAY 'Bukan Tahun Kabisat'
// END IF

// END

// "JAVASCRIPT"

// var tahun = 2001;

// if (tahun % 4 === 0 && tahun % 100 === 0 && tahun % 400 === 0) {
//     console.log('Tahun Kabisat');
// } else if (tahun % 4 === 0 && tahun % 100 != 0) {
//     console.log('Bukan Tahun Kabisat');

// }
// IF
// if(tampung == 5) {
//     console.log("angka yang ditampung adalah 5!");
//   }
//   else {
//     console.log("angka yang ditampung bukan 5!");
//   }

// #Branching Bertumpuk Sederhana (If-else) 1
// var tampung = 10;
// if (tampung == 5) {
//     console.log('angka yang ditampung adalah 5!');
// } else if (tampung < 5) {
//     console.log("angka yang ditampung bukan 5, tetapi lebih kecil dari 5.")
// } else {
//     console.log("angka yang ditampung bukan 5, tetapi lebih besar dari 5.")

// }
// #Branching Bertumpuk Sederhana (If-else) 2
// var tampung = 2;
// if (tampung == 5) {
//     console.log("angka yang ditampung adalah 5!");
// } else {
//     if (tampung < 5) {
//         console.log("angka yang ditampung bukan 5, tetapi lebih kecil dari 5");

//     } else {
//         console.log("angka yang ditampung bukan 5, tetapi lebih besar dari 5");

//     }
// }

// #CODECADEMY

// var moonPhase = 'solar eclipse';
// if(moonPhase === 'full'){
//   console.log('Howwwwlll!!');
// }else if(moonPhase === 'mostly full'){
//   console.log('Arms and legs are getting hairier');
// }else if(moonPhase === 'mostly new'){
//   console.log('Back on two feet');
// }else{
//   console.log('Invalid moon phase');
// }


// SWITCH
// var moonPhase = 'full';
// switch (moonPhase) {
//     case 'full':
//         console.log('Howwwwlll!!');
//         break;
//     case 'mostly full':
//         console.log('Arms and legs are getting hairier');
//         break;
//     case 'mostly new':
//         console.log('Back on two feet');
//         break;
//     default:
//         console.log('Invalid moon phase');
//         break;
// }