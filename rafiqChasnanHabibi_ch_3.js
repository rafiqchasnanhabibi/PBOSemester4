//PROGRAM MENGANALISIS JENIS ASAL MASALAH DALAM WARISAN

class OperasiAsalMasalah {
	//property dari object
	constructor(angka1,angka2){
		this.asal1 = angka1
		this.asal2 = angka2
	}

	//method dari object
	asalMasalah(angka1,angka2){
		if(this.asal1 == this.asal2){
			return "Jenis Asal Masalahnya adalah Tamatsul, karena kedua bilangan sama"
		} else if (this.asal1 % this.asal2 == 0 ){
			return "Jenis Asal Masalahnya adalah Tadakhul atau Tawafuq, karena kedua bilangan tersebut ada kesamaan faktor baik satu atau lebih"
		} return "Jenis asal Masalahnya Tabayun"
	} 

}

const masalah1 = new OperasiAsalMasalah(2,2)

console.log("Asal Masalah yang dicoba analisis adalah "+masalah1.asal1+" dan "+masalah1.asal2)
console.log(masalah1.asalMasalah())
console.log("=======================================")

const masalah2 = new OperasiAsalMasalah(3,2)

console.log("Asal Masalah yang dicoba analisis adalah "+masalah2.asal1+" dan "+masalah2.asal2)
console.log(masalah2.asalMasalah())
console.log("=======================================")

const masalah3 = new OperasiAsalMasalah(4,2)

console.log("Asal Masalah yang dicoba analisis adalah "+masalah3.asal1+" dan "+masalah3.asal2)
console.log(masalah3.asalMasalah())