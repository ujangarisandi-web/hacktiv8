// Function/Method

// 1.
function tampilkan() {
    console.log("hallo!");
}
tampilkan();

// 2.
function munculkanAngkaDua() {
    return 2
}
var tampung = munculkanAngkaDua();
console.log(tampung);

// 3.
function kaliDua(angka) {
    return angka * 2
}
var tampung = kaliDua(2);
console.log(tampung);

// 4.

function tampilkanAngka(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua
}
console.log(tampilkanAngka(5, 3));

// 5.
function tampilkanAngka(angka = 1) {
    return angka
}

console.log(tampilkanAngka(5));
console.log(tampilkanAngka());

// 6.
var funsiPerkalian = function (angkaPertama, angkaKedua) {
    return angkaPertama * angkaKedua
}
console.log(funsiPerkalian(2, 4));


// =========================================================
// SCOPE

var example = "Global";

function testExample() {
    // local scope
    var example = "Local";
    return example;
}
console.log(example); //GLobal
console.log(testExample()); //Local