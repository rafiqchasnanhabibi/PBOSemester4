//Bismillah

//PROGRAM MENGHITUNG LUAS LINGKARAN

let Lingkaran = {
	phi: 22/7,
	jariJari:7,
	tampilkanLuas(phiInput = this.phi , jariJariInput = this.jariJari){
		//jariInput adlah variable dinamis (parameter), isinya sesuai input dari user
		//jariInput = this.jariJari digunakan untuk mengisi default dengan nilai jari pada parameter jariInput, ketika user tidak memasukan jariJriInput (tidak mengisi argumen dalam parameter)
		this.phi = phiInput
		this.jariJari = jariJariInput

		//Definisi rumus
		let rumus = this.phi * this.jariJari * this.jariJari

		//Tampilkan rumus
		console.log('Luas Lingkaran dengan nilai jari-jari '+ this.jariJari +' adalah', rumus)

		return
	}
}

console.log(Lingkaran.tampilkanLuas())