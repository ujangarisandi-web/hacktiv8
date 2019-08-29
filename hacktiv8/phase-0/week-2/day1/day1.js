var tahun = 2000;

if (tahun % 4 === 0 && tahun % 100 === 0 && tahun % 400 === 0 && tahun % 500 === 0) {
    console.log("ini Tahun kabisat");
} else if (tahun % 4 === 0 && tahun % 100 != 0) {
    console.log("Ini tahun kabisat");
} else {
    console.log("Bukan tahun kabisat");
};