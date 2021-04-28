//PROGRAM MENGHITUNG GAJI KARYAWAN

class Karyawan {
    nama;
    gaji;
    lamaKerja;
    tingkahLaku;

    constructor(nama, lamaKerja, tingkahLaku){
        this.nama = nama
        this.lamaKerja = lamaKerja
        this.tingkahLaku = tingkahLaku
    }

    gajian(){
        let gajiPokok = 3000000
        let rumusGaji = gajiPokok + (this.lamaKerja * 100000)
        
        let gajiAkhir = rumusGaji

        if(this.tingkahLaku) {
            gajiAkhir += 250000
        }else{
             gajiAkhir -= 100000
        }

        let selamat = `Selamat! ${this.nama}, sekarang adalah hari gajianmu! XD :D`
        
        console.log(selamat)
        console.log('====================================')
        console.log(`Karena kamu telah bekerja selama ${this.lamaKerja} bulan`)
        console.log(`Dan berperilaku ${this.tingkahLaku}`)
        console.log("Maka gajimu adalah Rp. "+ gajiAkhir +' rupiah')
        console.log('====================================')
        console.log(' ')
    }

}

const namaDepan = new Karyawan("Rafiq", 12, true)
const namaBelakang = new Karyawan("Chasnan Habibi", 5, false)

namaDepan.gajian()
namaBelakang.gajian()
