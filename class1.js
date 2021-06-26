// class Kalkulator {
//     constructor(a,b){
//         this.angka1 = a
//         this.angka2 = b
//     }
//     tambah(){
//         console.log(this.angka1 + this.angka2) 
//     }
//     kali(){
//         console.log(this.angka1 * this.angka2)
//     }
//     bagi(){
//         console.log(this.angka1 / this.angka2)
//     }
//     kurang(){
//         console.log(this. angka1 -this. angka2)
//     }
// }

// const kalkulator = new Kalkulator(2,3)
// kalkulator.tambah()

// kalkulator.kurang()

// kalkulator.kali()

// kalkulator.angka1 = 6
// kalkulator.angka2 = 2
// kalkulator.bagi()

  


// class hewan {
//     constructor(kaki,mamalia){
//         this.kaki = kaki;
//         this.mamalia = mamalia;
//     }
// }



// class  gajah extends hewan{
//     constructor(kaki,mamalia){
//         super(kaki,mamalia);
//     }
// }

// class jerapah extends hewan{
//     constructor(kaki,mamalia){
//         super(kaki,mamalia);
//     }
// }



class Car {
    constructor() {
      this._color = null
    
    }
  
    get color () {
      return `Warna Mobilnya adalah ${this._color}`
    }
  
    set warna (i) {
      this._color = `${i} keren`
    }
  
  }
  
  const car = new Car()
  
  car.warna = 'merah'
  
  console.log(car.color)