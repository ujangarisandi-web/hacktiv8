var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];


function dataHandling(input) {
    var read = ''
    for (var i = 0; i <= input.length - 1; i++) {
        var id = 'Nomor ID :' + input[i][0]
        var nama = 'Nama Lengkap : ' + input[i][1]
        var ttl = 'TTL : ' + input[i][2]
        var hobi = 'Hobi : ' + input[i][3]
        if (i < input.length) {
            read += id + '\n' + nama + '\n' + ttl + '\n' + hobi + '\n \n'
        }
    }
    return read
}
console.log(dataHandling(input));