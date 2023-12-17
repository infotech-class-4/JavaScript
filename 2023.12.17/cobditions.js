// if Yapisi

// if(kosul){
//     // kosul saglandiktan calisacak kod parcaciklari
// }

var x = 5;

if (x > 0) {
  console.log(x, "Pozitif bir sayidir.");
}

console.log("devam ediyor");

if ("a" < "b") {
  console.log("a b 'den kucuktur.");
}

var isPass = false;

if (isPass === true) {
  console.log("Tebrikler gectiniz");
}

if (isPass == true) {
  console.log("Tebrikler gectiniz");
}

if (isPass !== true) {
  console.log("Tebrikler kaldiniz");
}
console.clear();

if (isPass) {
  console.log("Tebrikler gectiniz");
}

if (!isPass) {
  console.log("Tebrikler kaldiniz");
}

var student = {
  firstName: "Ali",
  noteOrt: 30,
  isPass: false,
};

if (student.noteOrt >= 60 && student.isPass) {
  console.log("Tebrikler bir ust sinifa gectiniz");
}

if (student.noteOrt >= 60 || !student.isPass) {
  console.log("Tebrikler bir ust sinifa gectiniz");
}

// 2. if else

var number = -5;

if (number > 0) {
  console.log(number, "Pozitif sayidir");
} else {
  console.log(number, "Negatif Sayidir.");
}

var student = {
  firstName: "Ali",
  noteOrt: 30,
  isPass: false,
};

if (student.noteOrt >= 60) {
  console.log("Tebrikler...");
} else {
  console.log("Uzgunuz...");
}

console.clear();

var students = [
  { name: "Ali", not: 50 },
  { name: "Ahmet", not: 20 },
  { name: "Mehmet", not: 80 },
  { name: "Hasan", not: 90 },
  { name: "Cemil", not: 40 },
];

for (var i = 0; i < students.length; i++) {
  if (students[i].not >= 60) {
    console.log(students[i].name, "Tebrikler Gectiniz.");
  } else {
    console.log(students[i].name, "Uzgunuz Kaldiniz.");
  }
}

console.clear();

// 3. if elseif

// if(kosul1){
//     // kod parcaciklari
// }else if(kosul2){

// }else if(kosul3){

// }else{

// }

var number = 2;

if (number > 0) {
  console.log("Sayi Pozitiftir");
} else if (number < 0) {
  console.log("Sayi Nrgatifitr");
} else {
  console.log("Sayi sifirdir");
}

var days = [
  "Pazartesi",
  "Sali",
  "Carsamba",
  "Persembe",
  "Cuma",
  "C.tesi",
  "Pazar",
];

for (var i = 0; i < days.length; i++) {
  if (i < 5) {
    console.log(days[i], "Calisma Gunleri");
  } else {
    console.log(days[i], "Tatil Gunleri");
  }
}



var number = 3
var students = [
  { name: "Ali", not: 50 },
  { name: "Ahmet", not: 20 },
  { name: "Mehmet", not: 80 },
  { name: "Hasan", not: 90 },
  { name: "Cemil", not: 40 },
];


var students = [
    { name: "Ali", not: [30,40] },
    { name: "Ahmet", not: 20 },
    { name: "Hasan", not: 90 },
    { name: "kemil", not: 40 },
  ];

  var indisNumber =0

  var students = [
    { name: "Ali", not: [30,40] },
    { name: "Ahmet", not: 20 },
    { name: "Hasan", not: 90 },
    { name: "Cemil", not: 40 },
  ];