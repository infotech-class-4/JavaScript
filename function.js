// f(x)= x**2 + xy + y

function myFunction() {
  console.log("Hello World!");
}

myFunction();

function myToplaveEkranaYazdir(x, y) {
  console.log(x + y);
}

myToplaveEkranaYazdir(5,4)
myToplaveEkranaYazdir("as",4)

console.clear()

function myTopla(x,y){
    var result = x + y

    return result
}

var islem = myTopla(4,6)

console.log(islem)


function str(ad, soyad){
    var adSoyad = ad + " " + soyad
   //var adSoyad= ad.concat(soyad)

   return adSoyad
}

var islem1 =str("Ali","Veli")
console.log(islem1);

