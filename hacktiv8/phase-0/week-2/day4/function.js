// Tugas 1
function shoutOut() {
    console.log("Halo Function");
}
shoutOut();

// Tugas 2
function calculateMultiply(num1, num2) {
    return num1 * num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);



// Tugas 3

function processSentence(name, age, address, hobby) {
    return 'Nama saya ' + name + ', umur saya ' + age + 'alamat saya ' + address + ' dan hobby saya ' + hobby + '!';
}
var name = "Agus";
var age = 30;
var address = "jln. Malioboro, Yogjakarta";
var hobby = "gaming";
var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);