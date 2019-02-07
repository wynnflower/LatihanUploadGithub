var w = [0,1,2,3,4,5]
var a=['Andi','Seto','Seno']

var x = w.filter((val) => val != 2);
var y = w.filter((val) => val % 2 == 0);
var z = w.filter((val) => val % 2 !== 0);
console.log(x);
console.log(y);
console.log(z);

var filterNama=a.filter(function(a){
    return a.includes('S')
})

var newArr=[]
for(i=0;i<w.length;i++){
    if(w[i]!==2){
        newArr.push(w[i])
    }
}

console.log(newArr)
console.log('-------------------------')
var mapNama=a.map(function(val){
    return val+' Saya'
})
console.log(mapNama)

var mapAngka=w.map((val)=> val+5)
console.log(mapAngka)
console.log(...mapAngka)

console.log('-------------------------')
var orang = [
    {nama : "Andi", marga: "Hasibuan"},
    {nama : "Budi", marga: "Sinaga"},
    {nama : "Caca", marga: "Pasaribu"}
    ];
function namaLengkap(item, index) {
    var fullname = [item.nama,item.marga].join(" ");
    return fullname;
}
function tesMap() {
    console.log(orang.map(namaLengkap));
    console.log(orang.map(namaLengkap)[0]);
    console.log(orang.map(namaLengkap)[1]);
    console.log(orang.map(namaLengkap)[2]);
}
tesMap()

var a=orang.map(function(item){
    var fullname=[item.nama,item.marga].join(' ')
    return fullname
})

console.log(a)
console.log('---------------')
let merk = 'Yamaha';
let tahun = 2015;
let mio = {
merk: merk,
prod: tahun
}
let vixion = {
merk, tahun
}
console.log(mio);
console.log(vixion);

console.log('---------------')
// let nama=new Set()
// nama.add('Adi').add('Budi').add('Adi')
// console.log(nama)
// console.log(nama.size)
// console.log('---------------')

var nama=['Andi','Seto']
var [a,b]=nama
console.log(a)