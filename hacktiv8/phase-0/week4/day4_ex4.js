function cariModus(arr) {
    var kelompok = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j <= kelompok.length; j++) {
            if (kelompok[j] === undefined) {
                kelompok.push([arr[i], 1])
                break
            } else if (kelompok[j][0] === arr[i]) {
                kelompok[j][1] += 1
                break
            }
        }
    }
    return kelompok

}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1