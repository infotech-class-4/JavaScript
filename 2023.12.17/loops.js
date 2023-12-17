// 1. for dongusu

// for(baslangic; kosul; artis/degisim){
//     // dongu kodlarimizi yaziyor.
// }

for (var i = 0; i < 5; i++) {
  console.log(i);
}

// var i=0
// for(i<5){
//     console.log(i);

//     .
//     .
//     .
//     .
//     .

//     i++

// }

for (var i = 0; i < 100; i++) {
  console.log(i);
}

console.clear();

for (var i = 100; i >= 0; i--) {
  console.log(i);
}

console.clear();

for (var i = 0; i < 50; i++) {
  console.log("Bir daha yuksek sesle konumayacagim");
}

var myNumber = [2, 3, 4, 6, 7, 8, 9, 6, 4, 3, 21, 12, 5, 6, 7, 8];

for (var i = 0; i < myNumber.length; i++) {
  console.log(myNumber[i]);
}

console.clear();

var myString = ["Mavi", "Sari", "Yesil", "Kirmizi", "Siyah"];

for (var i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}

console.log("Devam Ediyor");
console.clear();

// 2.While Dongusu

// while(kosul){
//     // Kodlaimizi buraya yaziyoruz
// }

var i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

var myNumber = [2, 3, 4, 6, 7, 8, 9, 6, 4, 3, 21, 12, 5, 6, 7, 8];

var i = 0;

while (i < myNumber.length) {
  console.log(myNumber[i]);
  i++;
}

console.log("Devam ediyor");
console.clear();

// 3. do-While Dongusu

// do{
//     // buraya bziim kodlarimiz geliyor
// } while(kosul)

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

console.log("-----------------------");

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 0);

while (i < 0) {
  console.log(i);
  i++;
}

console.clear();

var i = 0;
while (i < 5) {
  console.log("Bir daha yuksek sesle konumayacagim");
  i++;
}

// i=5

while (i < 0) {
  console.log("Bir daha yuksek sesle konumayacagim");
  i++;
}

console.log(i);
 i = 0
 console.log(i);

do {
  console.log("Bir daha yuksek sesle konumayacagim", i);
  i++;
} while (i < 5);

console.log(i);




