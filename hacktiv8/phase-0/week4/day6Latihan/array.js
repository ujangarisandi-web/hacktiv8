var input = [
    ["0001", "Badai", "Surabaya", "21/05/1989", "Nonton youtube", "perumahan citramas"],
    ["0002", "Maenggar", "Medan", "10/10/2000", "Bermain Biola", "Nongsa"],
    ["0003", "Maria", "Ambon", "25/12/2006", "Memasak", "Bungaraya "],
    ["0004", "Hendri", "Jakarta", "6/4/1998", "Berkebun", "Botania"]
];

function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
        console.log('Nomor ID : ' + input[i][0]);
        console.log('Nama : ' + input[i][1]);
        console.log('TTL : ' + input[i][2] + '' + input[i][3]);
        console.log('Hobi : ' + input[i][4]);
        console.log('\n');
    }
}
dataHandling(input)

console.log('===== Balik String====');

function balikString(string) {
    var str = ''
    for (var i = string.length - 1; i >= 0; i--) {

        str += string[i]

    }
    return str
}
console.log(balikString('hello world!'));

console.log('====Mengakses data array====');
//contoh output

function dataHandling2(input) {
    var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
    input.splice(4, 2, 'Pria', 'SMA Internasional Metro')
    console.log(input);
    tanggal = input[3]
    // console.log(tanggal);
    tanggal2 = tanggal.split('/')
    // console.log(tanggal2);
    tanggal3 = tanggal2[1]
    // console.log(tanggal3);
    bulan = tanggal3

    switch (Number(bulan)) {
        case 01: {
            console.log('Januari');
            break;
        }
        case 02: {
            console.log('Februari');
            break;
        }
        case 03: {
            console.log('Maret');
            break;
        }
        case 04: {
            console.log('April');
            break;
        }
        case 05: {
            console.log('Mei');
            break;
        }
        case 06: {
            console.log('Juni');
            break;
        }
        case 07: {
            console.log('Juli');
            break;
        }
        case 08: {
            console.log('Agustus');
            break;
        }
        case 09: {
            console.log('September');
            break;
        }
        case 10: {
            console.log('Oktober');
            break;
        }
        case 11: {
            console.log('November');
            break;
        }
        case 12: {
            console.log('Desember');
            break;
        }

    }
    tanggal5 = tanggal2.join('-')
    tanggal4 = tanggal2.sort(function (a, b) {
        return b - a
    })

    console.log(tanggal4);
    console.log(tanggal5);
    var namaBaru = input[1]
    console.log(namaBaru.slice(0, 15));
    // return input
}
console.log(dataHandling2(input));