console.log('LOOPING PERTAMA');
var looping = 2;

while (looping < 21) {
    console.log(looping + ' - I love coding');
    looping++;
}
console.log('LOOPING KEDUA');
var looping2 = 20;
while (looping2 > 1) {
    console.log(looping2 + ' -I will become fullstack developer');
    looping2--;
}
// ======================================================
console.log('LOOPING PERTAMA');

for (var i = 1; i < 21; i++) {
    console.log(i + ' - I love coding');
}

console.log('LOOPING PERTAMA');

for (var h = 20; i > 1; i--) {
    console.log(i + ' - I will become fullstack developer');
}


// ======================================================
// #1.
var i = 1;
while (i < 101) {
    console.log(i);
    i++;
}

// // #2.
var i = 1;
while (i < 101) {
    if (i % 2 == 0) {
        console.log(' Genap');
    } else if (i % 2 != 0) {
        console.log(' Ganjil');
    }
    i++;
}

// #3. 
// pertambahan 2

var i = 1;
while (i < 101) {
    if (i % 3 == 0) {
        console.log(i + ' Kelipatan 3');
    } else {
        console.log('');

    }

    i = i + 2;
}

// pertambahan 5

var i = 1;
while (i < 101) {
    if (i % 6 == 0) {
        console.log(i + ' Kelipatan 6');
    } else {
        console.log('');
    }
    i = i + 5;
}

// pertambahan 9

var i = 1;
while (i < 101) {
    if (i % 10 == 0) {
        console.log(i + ' Kelipatan 10');
    } else {
        console.log('');
    }
    i = i + 9;
}