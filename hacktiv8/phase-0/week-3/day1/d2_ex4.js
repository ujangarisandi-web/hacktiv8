// function dataHandling2(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         return arr
//     }
// }
// console.log(dataHandling2(['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']));

var input = ['0001', 'Roman Alamsyah', 'Banda Lampung', '21/05/1989', 'Membaca'];

// var arrInput;

function dataHandling2(arrInput) {
    arrInput.splice(1, 1, 'Roman Alamsyah Elsharawy');
    arrInput.splice(2, 1, 'Provinsi Bandar Lampung');
    arrInput.splice(4, 1);
    arrInput.splice(4, 0, 'Pria', 'SMA Internasional Metro')
    console.log(arrInput);

    var tanggal = input[3];
    // console.log(tanggal);
    var tanggal2 = tanggal.split('/');
    // console.log(tanggal2);

    var bulan = tanggal2[1];
    // console.log(bulan);

    switch (Number(bulan)) { //ubah angka bulan jadi nama bulan
        case 01: {
            console.log("Januari");
            break;
        }
        case 02: {
            console.log("Februari");
            break;
        }
        case 03: {
            console.log("Maret");
            break;
        }
        case 04: {
            console.log("April");
            break;
        }
        case 05: {
            console.log("Mei");
            break;
        }
        case 06: {
            console.log("Juni");
            break;
        }
        case 07: {
            console.log("Juli");
            break;
        }
        case 08: {
            console.log(" Agustus");
            break;
        }
        case 09: {
            console.log("September");
            break;
        }
        case 10: {
            console.log("Oktober");
            break;
        }
        case 11: {
            console.log(" November");
            break;
        }
        case 12: {
            console.log("Desember");
            break;
        }
        default: {
            console.log("Masukan bulan 1-12");
        }
    }

    var tanggal3 = tanggal2.sort(function (value1, value2) {
        return value1 - value2
    });
    console.log(tanggal3);
    console.log(tanggal2.join('-'));

    var nama = input[1].slice(0, 14);
    console.log(nama);

    // console.log(tanggal2.join('-'));
}
dataHandling2(input);