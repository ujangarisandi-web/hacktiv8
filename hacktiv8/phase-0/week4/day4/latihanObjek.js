function shopingTime(memberId, money) {

    var Shoping = {}
    var barang = [
        ['sepatu', 200000],
        ['Baju', 50000]
    ]
    Shoping.money = money
    Shoping.memberId = memberId
    for (var i = 0; i < barang.length; i++) {

    }

    return Shoping
}


console.log(shopingTime('1234567', 500000));