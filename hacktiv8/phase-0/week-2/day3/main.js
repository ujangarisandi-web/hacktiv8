// console.log('i am a string'.charAt(2));

// var string1 = 'good';
// var string2 = 'luck';
// console.log(string1.concat(string2));

// var text = 'dung dung ces!';
// console.log(text.indexOf('dung'));
// console.log(text.indexOf('u'));
// console.log(text.indexOf('jreng'));

// #String([angka/array])
// var int = 12;
// var real = 3.45;
// var arr = [6, 7, 8];

// var strInt = String(int);
// var strReal = String(real);
// var strArr = String(arr);

// console.log(strInt);
// console.log(strReal);
// console.log(strArr);

// #.toString()

// var number = 21;
// console.log(number.toString());
// var array = [1, 2];
// console.log(array.toString());


// #Number([String])

// var number1 = Number("90");
// var number2 = Number("1.23");
// var number3 = Number("4 5");

// #parseInt([String]) dan parseFloat([String])

// var int = '89';
// var real = '56.7';

// var strInt_1 = parseInt(int);
// var strInt_2 = parseInt(real);

// var strReal_1 = parseFloat(int);
// var strReal_2 = parseFloat(int);


// #Contoh Looping While-loop 1 Looping Angka 1-9 Sederhana
// var flag = 1;
// while (flag < 10) {
//     console.log('Interasi ke-' + flag);
//     flag++;
// }

// #Contoh Looping For-loop 1 Looping Angka 1-9 Sederhana
// for (var angka = 0; angka < 10; angka++) {
//     console.log('Iterasi ke-' + angka);
// }

// #Contoh Looping For-loop 2 Looping Mengembalikan Angka Total
// var jumlah = 0;
// for (var deret = 5; deret > 0; deret--) {
//     jumlah += deret;
//     console.log('Jumlah saat ini:' + jumlah);
// }
// console.log('Jumlah terakhir:' + jumlah);

// #Contoh Looping For-loop 3 Looping Dengan Increment dan Decrement Lebih dari 1
// for (var deret = 0; deret < 10; deret += 2) {
//     console.log('Iterasi dengan Increment counter 2:' + deret);
// }
// console.log(-- -- -- -- -- -- -- -- -- -- -- -- -- -- - );
// for (var deret = 15; deret > 0; deret -= 3) {
//     console.log('Iterasi dengan Decrement counter:' + deret);
// }

// #Waspadai Forever Looping!
// var flag = 1;
// while (flag < 10) {
//     console.log('Iterasi ke-' + flag);
// }

// #Contoh Function 1: Function sederhana tanpa return
// function tampilkan() {
//     console.log("hallo");
// }
// tampilkan();

// #Contoh Function 2: Function sederhana dengan return
// function memunculkanAngkaDua() {
//     return 2
// }
// var tampung = memunculkanAngkaDua();
// console.log(tampung);

// #Contoh Function 3: Function dengan parameter
// function kaliDua(angka) {
//     return angka * 2
// }
// var tampung = kaliDua(2);
// console.log(tampung);

// #Contoh Function 4: Pengiriman parameter lebih dari satu
// function tampilkanAngka(angkaPertama, angkaKedua) {
//     return angkaPertama + angkaKedua
// }
// console.log(tampilkanAngka(2, 3));



function tampilkanAngka(angka = 1) {
    return angka
}
console.log(tampilkanAngka(5));
console.log(tampilkanAngka());