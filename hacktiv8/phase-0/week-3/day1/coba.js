// var arr = ['a', 1, true];
// console.log(arr[1]);
// ===========================================
// var nama = 'Hello World!'
// var arr = [''];

// function balikString(name) {
//     var namaLength = name.length;
//     for (namaLength; namaLength > 0; namaLength--) {
//         // namaReverse = namaReverse + nama[namaLength-1];
//         arr += nama[namaLength - 1];
//     }

//     return arr;
// }

// console.log(balikString(nama));
// =================================================
var input = ['0001', 'Roman Alamsyah', 'Banda Lampung', '21/05/1989', 'Membaca'];

function dataHandling2(input) {
    input.splice([1], [1], 'Roman Alamsyah Elsharawy');
    input.splice([2], [1], 'Provinsi Bandar Lampung');
    input.splice([4], [1]);
    input.splice([4], [0], 'Pria', 'SMA Internasional Metro');
    console.log(input);
    var tanggal = input[3];
    // console.log(tanggal);
    var tanggal2 = tanggal.split('/');
    // console.log(tanggal2);
    var bulan = tanggal2[1]
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
            console.log("Masukan bulan 1-12!");
        }

    }
    var tanggal3 = tanggal2.sort(function (a, b) {
        return b - a
    });
    console.log(tanggal3);

    // var tanggal4 = tanggal3.splice([0], [2], '21', '05', '1998');
    // var tanggal5 = tanggal4.join('-');
    // console.log(tanggal5);

    var nama = input[1].slice(0, 14);
    console.log(nama);

}
dataHandling2(input);