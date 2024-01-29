// SCOPE KAPSAM
// sinir kavrami olarak dusunebilri

// var
// let
// const

//{}

var num1 = 1; // Global scope
//let num2 = 2; // Global scope


// var num1 =34;
// let num2 =12; // hata

{
    let num2 =23;

}
//console.log(num2); Hata. burada kullanilmaz

// function myFunc(){
//     let carName = "Volvo" // function scope

// }

// console.log(carName); Hata. burada kullanilmaz


//var carName;

myFunc2()
function myFunc2() {

    carName = "Opel"

}

console.log(carName); // Kullanabiliriz


function number(){
    let num = 0

    if(num === 0){
        console.log("Burada num nesnesini kullanabilirim");

        let yeniSayi =34
    }

   // console.log(yeniSayi);
}
number()