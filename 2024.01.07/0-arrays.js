// ARRAYS

const students = [
  {
    id: 1,
    adi: "Murat",
    cinsiyeti: "e",
    bolum: "mimarlik",
    yasi: 21,
    baslamaTarihi: 2010,
    bitirmeTarihi: 2014,
    adress: {
      "sehir-ismi": "Izmir",
      ilce: "Bornova",
    },
  },
  {
    id: 2,
    adi: "Ahmet",
    cinsiyeti: "e",
    bolum: "mühendislik",
    yasi: 32,
    baslamaTarihi: 2000,
    bitirmeTarihi: 2006,
  },
];

console.log(students[0].adress["sehir-ismi"]);

// 1 - forEach;
// 2 - filter;
// 3 - find;
// 4 - findIndex;
// 5 - every;
// 6 - some;
// 7 - sort;
// 8 - includes;
// 9 - map;
// 10 - reduce;
