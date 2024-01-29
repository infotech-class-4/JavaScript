// ES6

// let , const

let num = 12;
console.log(num);
num = 32;
console.log(num);

const numConst = 10;

//numConst = 12; Hata

const userName = "Ali";
console.log(userName);

// userName = "Fatih" hata

console.clear();

// Literal Template   ``

const firstName = "Ali";
const surName = "Demir";

console.log("Ogrencinin adi: " + firstName + " " + surName + "Notlari da 90");

console.log(`Ogrencinin adi: ${firstName}
${surName} notlari bunmlari`);

console.log(`denem deneme
denem denem denm
denemden demden
`);

let text = `Yeni bir metin`;

console.log(text);

console.clear();

/// Funtion parametre default value

function funcName(parametre, name = "Fuat", surname = "Korkmaz") {
  console.log(`${parametre} ${name} ${surname}`);
}

funcName("deneme", "Demir");

// Arrow function

function name() {}

var arrowFunc = () => {};

const carName = "Opel";
const carModel = "Astra";

var carMergeName = () => {
  console.log(`${carName} ${carModel}`);
};

var carMergeName2 = (param1, param2) => {
  console.log(`${param1} ${param2}`);
};

carMergeName2("Volvo", "C90");

var carMergeName3 = (param1 = "Mercedes", param2 = "C180") => {
  console.log(`${param1} ${param2}`);
};

carMergeName3("Opel");

console.clear();

normalFun();

function normalFun() {
  console.log("Normal func cagrildi");
}

var arrowFunc = () => {
  console.log("Arrow func cagrildi");
};

arrowFunc();

/// Spread Operator  ...

const orijinalArray = [1, 2, 3];
const copyArrya = [...orijinalArray];

console.log(copyArrya);

const array1 = [2, 14, 5, 5, 3, "Kemal"];
const array2 = [5, 7, 8, 4, 2];

const mergeArray = [...array1, ...array2];

console.log(mergeArray);

const ojinalObje = {
  firstName: "Kemal",
  surname: "Demir",
};

const copyObje = { ...ojinalObje, age: 34 };
console.log(copyObje);

const sayi1 = [2, 3, 4];

const kopyaSayi = [...sayi1, 90000, "String"];
console.log(kopyaSayi);

function normalfunc(...arg) {
  let sum1 = 0;

  for (var i = 0; i < arg.length; i++) {
    sum1 += arg[i];
  }
  return sum1;
}

var result = normalfunc(2, 4, 5, 56, 54, 23, 432, 23, 21);
console.log(`Girilen sayilarin toplam degeri : ${result}`);

console.clear();

/// for in & for of

var arrayBasic = [2, 3, 4, 5, 6, 4, { ad: "asdad", soyad: "asd" }];

for (let i = 0; i < arrayBasic.length; i++) {
  console.log(arrayBasic[i]);
}

console.log("-------------------------");

for (const iterator of arrayBasic) {
  console.log(iterator);
}

console.log("----------------------------");

for (const key in arrayBasic) {
    console.log(key);
}
