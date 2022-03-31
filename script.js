var tanya = true;
while( tanya ) {
	// menangkap pilihan player 

	var player = prompt('pilih: gunting, batu, kertas');


	// menangkap pilihan computer 

	var computer = Math.random();

	if( computer < 0.34 ) {
		computer = 'gunting';
	} else if ( computer >= 0.34 && computer < 0.67 ) {
		computer = 'batu';
	} else {
		computer = 'kertas';
	}
	var hasil = '';
	// rulesnya 

	if( player == computer ) {
		hasil = 'Seri!'
	} else if ( player == 'gunting' ) {
		// if( computer == batu ) {
		// 	hasil = 'Kalah'

		// } else {
		// 	hasil = 'menang'
		// }

		hasil = ( computer == 'batu') ? 'Kalah' : 'Menang';
	} else if ( player == 'batu') {
		hasil = ( computer == 'gunting') ? 'Menang' : 'Kalah';
	} else if ( player == 'kertas') {
		hasil = ( computer == 'batu') ? 'Menang' : 'Kalah';
	} else {
		hasil = 'Memasukan pilihan yang salah!'
	}

	// tampilkan hasilnya	

	alert('Kamu memilih : ' + player + ' dan komputer memilih : ' + computer + '\nMaka hasilnya: Kamu ' + hasil);

	tanya = confirm('Mau lagi?');
}

alert('Terimakasih sudah bermain.');