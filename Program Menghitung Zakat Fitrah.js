//PROGRAM MENGHITUNG ZAKAT FITRAH
let hitung = require("readline-sync")

class Keluarga{
    nama
    layanan
    totalZakat

    constructor(nama){
        this.nama = nama
        this.totalZakat = this.totalZakat

        //membuat tampilan Layanan
        // "", program ini menginginkan array yang terbaca langsung array[1]
        //jadi array[0] kosong
        this.layanan = ["","Mengitung Zakat Fitrah","Konsultasi Zakat Fitrah","Batal"]

    }
    
    //tampilan awal masuk program
    ahlanWasahlan(){
        console.log("========================================")
        console.log('Ahlan wa Sahlan dalam Layanan Menghitung Zakat Fitrah');
        console.log('Berikut Daftar layanan yang kami berikan:');
        
        this.tampilkanLayanan()
    }

    tampilkanLayanan(){
        console.log("========================================")
        // let i = 1 digunakan untuk opsi tampilan dimulain angka satu
        for(let i = 1; i <= this.layanan.length-1; i++){
            console.log(`${i}.${this.layanan[i]}`)
        }

        this.beriPilihan()
    }

    beriPilihan(){
        console.log("========================================")
        let pilihan = hitung.question(`Layanan mana yang anda pilih..?`)
        console.log("========================================")

        if(pilihan == "1"){
         return this.hitungZakat()
        } else if(pilihan == "2"){
         return   this.infoLayanan()
        } else if(pilihan == "3"){
         return this.tutup()
        }
        console.log("Mohon pilihlah layanan yang tersedia..!!")
        this.tampilkanLayanan()
            
    }

    //method menghitung zakat dengan angka masukan dari user
    hitungZakat(){
        let tulisAnggota = hitung.question(`Berapa banyak orang yang akan anda zakat fitrah..??masukan angka:`)
        console.log("               ")
        console.log("Dengan akumulasi harga zakat per jiwa Rp 25.000, maka")

        //Number(tulisAnggota) digunakan untuk mengubah masukan user yang ber-type string menjadi number
        this.totalZakat = 25_000 * Number(tulisAnggota)
        console.log(`Total Zakat Fitrah keluarga ${this.nama} adalah Rp ${this.totalZakat}`)
        console.log("               ")
        let respon = hitung.question("Ada yang bisa kami bantu lagi..? (y/n)")
        if(respon == "y") return this.tampilkanLayanan()
        console.log("========================================")
        return this.tutup()
    }

    infoLayanan(){
        console.log("Zakat Fitrah merupakan kewajiban dari setiap muslim, khususnya bagi mereka yang mampu")
        console.log("Kewajiban zakat sebenarnya menggunakan makanan pokok di daerah setempat.")
        console.log("Namun, dewasa ini biasanya zakat dikeluarkan dalam bentuk uang")
        console.log("Sehingga para ulama menentukan berapa banyak rupiah sebagai konversi dari makanan pokok")
        console.log("               ")
        let respon = hitung.question("Ada yang bisa kami bantu lagi..? (y/n)")
        if(respon == "y") return this.tampilkanLayanan()
        console.log("========================================")
        return this.tutup()
    }

    tutup(){
    console.log("Terimakasih telah berkunjung ke layanan kami..")
    }
}

const rafiqChasnanHabibi = new Keluarga ("Rafiq Chasnan Habibi")
rafiqChasnanHabibi.ahlanWasahlan()
