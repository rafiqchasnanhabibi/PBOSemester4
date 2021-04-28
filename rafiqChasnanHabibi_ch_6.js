// PROGRAM PENDAFTARAN LOMBA
let beri = require("readline-sync")

class Pendaftaran{
    penyelenggara
    kamar
    lomba
    totalBayar
    
    
    constructor(penyelenggara){
        this.penyelenggara = penyelenggara
        this.totalBayar = 0
        
        this.lomba =
    		[
        		{
            		jenisLomba: "LCC Nahwu Shorof",
            		biayaDaftar: 2_000
        		},
        		{
            		jenisLomba: "Sepak Bola",
            		biayaDaftar: 5_000
        		},
                {
            		jenisLomba: "Bola Volley",
            		biayaDaftar: 5_000
        		},
                {
            		jenisLomba: "PILDAEL",
            		biayaDaftar: 1_000
        		},
                {
            		jenisLomba: "Tenis Meja",
            		biayaDaftar: 3_000
        		}
    		
    		]
    }

    welcome(){
        console.log(`Selamat datang di Perlombaan dalam Rangka ${this.penyelenggara}`)
        console.log('Berikut Daftar Perlombaan beserta Biaya Pendaftarannya')
        this.tampilkanMenu()
    }

    tampilkanMenu(){
    	console.log("=======================================")
        for(let i = 0; i <= this.lomba.length-1; i++){
            console.log(`${i}. ${this.lomba[i].jenisLomba} - Rp. ${this.lomba[i].biayaDaftar}`)
        }

        this.berikanPilihan()
    }

    berikanPilihan(){
    	console.log("=======================================")
        let pilihan = beri.question(`Lomba apa yang akan anda ikuti? `)
		console.log("=======================================")
		
        if(this.lomba[pilihan]){
            this.totalBayar += this.lomba[pilihan].biayaDaftar
            console.log(`Terima kasih telah mendaftar ${this.lomba[pilihan].jenisLomba}`)
            console.log(`Biaya Pendaftarannya adalah Rp. ${this.lomba[pilihan].biayaDaftar}`)
            console.log("=======================================")

            let pesanLagi = beri.question(`Apakah anda ingin mendaftar lomba lainnya? (y/n) `)
            
            if(pesanLagi == "y") return this.tampilkanMenu()
            return this.total()
        }

        console.log("Mohon daftar lomba yang telah tercantum!" )
        this.berikanPilihan()
    }

    total(){
        console.log(`Terima kasih telah melakukan Pendaftaran dalam rangka ${this.penyelenggara}`)
        console.log(`Silahkan membayar Rp. ${this.totalBayar} sebagai Biaya Pendaftaran`)
        console.log("=======================================")
        console.log(`Terima kasih`)
        return
    }

}

const haulPesantrenElbayan = new Pendaftaran("Haul Pondok Pesantren El-Bayan Majenang")
haulPesantrenElbayan.welcome()

