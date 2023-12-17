// Function

// f(x) = 2x+1

function myFunc(x) {
  return 2 * x + 1;
}

var result = myFunc(3);
console.log(result);

function myFunc1(name, surname) {
  return name + " " + surname;
}
var result1 = myFunc1("Ali", "Demir");
console.log(result1);

// object

var myObject = {
  fisrtName: "Hasan",
  surname: "Yol",
  age: 30,

  splice: function(parametre){

  }
};


console.log(myObject);
console.log(myObject.surname);
console.log(myObject["fisrtName"]);

var resultObje = myFunc1(myObject.fisrtName, myObject.surname);

console.log(resultObje);

// Array

var myArray = [
  "Fenerbahce",
  "Galatasaray",
  "Besiktas",
  "Tuzlaspor",
  [
    { lig1: "1.Lig", lig2: "2.Lig" },
    { basketLig1: "basketLig1", basketLig2: "basketLig2" },
  ],
];

console.log(myArray[4][0].lig1 + " Sapmpiyonu " + myArray[0]);
console.log(myArray[4]);
console.log(myArray[4][1]);
console.log(myArray[4][1].basketLig1);
console.log(myArray[4][0]["lig2"]);
console.clear();

var num = 5;

console.log(num);
var num2 = num;
num = 6;

console.log(num2);
console.log(num);

var myArray = [
  "Fenerbahce",
  "Galatasaray",
  "Besiktas",
  "Tuzlaspor",
  [
    { lig1: "1.Lig", lig2: "2.Lig" },
    { basketLig1: "basketLig1", basketLig2: "basketLig2" },
  ],
];

var myArray2 = myArray
console.log(myArray);
console.log(myArray2);

myArray[0]= "Sivasspor"
console.log(myArray);
console.log(myArray2);
myArray2[1]="Trabzonspor"
console.log(myArray);
console.log(myArray2);
