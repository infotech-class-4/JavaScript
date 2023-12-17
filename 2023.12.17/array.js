//length
var fruits = ["Apple", "Banane", "Orange", "Mango"];

console.log(fruits);
console.log(fruits.length);
console.clear();

// toString

var fruits = ["Apple", "Banane", "Orange", "Mango"];
console.log(fruits);

console.log(fruits.toString());

// Join()

console.log(fruits.join(" * "));

// pop()

var result = fruits.pop();
console.log(fruits);
console.log(result);

// push()
var resultPush = fruits.push("Kiwi");

// function push(parametre){
//     ...
//     return fruits.length
// }
console.log(fruits);
console.log(resultPush);

// shift()

var fruits = ["Apple", "Banane", "Orange", "Mango"];
var resultShift = fruits.shift();
console.log(resultShift);
console.clear();

// unShift()

var fruits = ["Apple", "Banane", "Orange", "Mango"];

var resultUnshift1 = fruits.unshift("Lemon");
var resultUnshift2 = fruits.unshift("Lemon", "Kiwi", "Melon");

console.log(resultUnshift2);
console.log(fruits);

// concat()

var myGrils = ["Ayse", "Fatma"];
var myBoys = ["Ahmet", "Mehmet"];
var myFamily = ["Hasan", "Zeynep"];

console.log(myGrils.concat("Cansu"));
console.log(myGrils.concat(myBoys));
console.log(myGrils.concat(myBoys, myFamily));

console.clear();

// splice()

var fruits = ["Apple", "Banane", "Orange", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

fruits.splice(1, 2, "Melon", "Avacado");

console.log(fruits);

//fruits.splice(1)

console.log(fruits);

fruits.splice(1, 3);
console.log(fruits);
console.clear();

// slice()
var fruits = ["Apple", "Banane", "Orange", "Mango"];

var resultSlice = fruits.slice(1);

console.log(resultSlice);
console.log(fruits);

var resultSlice2 = fruits.slice(1, 3);
console.log(resultSlice2);
console.log(fruits);

// function slice(startParametre, finishParametre){

// ...arguments

//     tempArray=[]

//     return tempArray
// }

