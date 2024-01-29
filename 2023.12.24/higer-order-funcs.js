var number = [2, 1, 3, 4, 6, 7, 8, 45];

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

console.log("-----------------------");

// foreach()

number.forEach((item) => {
  console.log(item * 2);
});

console.log("-----------------------");

number.forEach(function (item) {
  console.log(item * 2);
});

console.clear();

// map()

var newNumbers = number.map((item) => {
  return item * 2;
});

console.log(newNumbers);

// filter()

var number = [2, 1, 3, 4, 6, 7, 8, 45];

var eventNumbers = number.filter((item) => {
  return item % 2 === 0;
});

console.log(eventNumbers);

var names = ["ali", "veli", "kemal", "canan"];

var filteredName = names.filter((item) => {
  return item === "veli";
});

console.log(filteredName);

console.clear();

// find()

var number = [1, 3, 55, 4, 2, 3, 4, 6, 7, 8, 45];

var evenNumber = number.find((item) => {
  return item % 2 === 0;
});

console.log(`indis iceirindeki deger : ${evenNumber}`);

// findIndex()

var eventNumberIndis = number.findIndex((item) => {
  return item % 2 === 0;
});

console.log(`dizi icerisindeki indis numarasi: ${eventNumberIndis}`);

console.clear();

var numbers = [1, 3, 55, 4, 2, 3, 4, 6, 7, 8, 45];

// some()
var isEventNumber = numbers.some((number) => {
  return number % 2 === 0;
});

console.log(isEventNumber);

// every()

var areAllEventNumber = numbers.every((number) => {
  return number % 2 === 0;
});

console.log(areAllEventNumber);

// reduce()
var numbers = [1, 3, 5];

const avg = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
console.log(avg);

var acc = 2;

for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i]; //val
}
console.log(acc);

const total = numbers.reduce((acc, val) => acc + val, 0);

console.log(total);

const total1 = numbers.reduce((acc, val) => acc + val, 2);

console.log(total1);

function topla(...sayilar) {
  return (
    sayilar.reduce(
      (baslangicSayisi, gelenSayilar) => baslangicSayisi + gelenSayilar,
      0
    ) / sayilar.length
  );
}

var resultTotal = topla(2, 3, 4, 5, 6, 787, 34, 23, 123, 453);
console.log(resultTotal);

console.clear();

var myArray = ["ali"];
console.log(myArray);

//myArray.push("Kemal")

// push(), pop()

function myPush(...arg) {

  for (let i = 0; i < arg.length; i++) {
    myArray[myArray.length] = arg[i];
  }

}

myPush("Kemal", "Ahmet","Veli",34,54,12);

console.log(myArray);

// pop() 
