var nama = 'Zero';

var peran = 'Tabib';

if (nama == 'Mikael') {
    console.log('Halo Ksatria ' + nama + ', Pilih peranmu untuk memulai game!');
} else if (nama == 'Nina') {
    console.log('Selamat datang di Dunia Proxytia,' + nama + '\n' + 'Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama == 'Danu') {
    console.log('Selamat datang di Dunia Proxytia,' + nama + '\n' + ' Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if (nama == 'Zero') {
    console.log('Selamat datang di Dunia Proxytia,' + nama + '\n' + ' Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
    console.log('nama harus di isi!');
}