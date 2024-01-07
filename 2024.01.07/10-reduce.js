const students = [
  {
    id: 1,
    adi: "Murat",
    cinsiyeti: "e",
    bolum: "mimarlik",
    yasi: 21,
    baslamaTarihi: 2010,
    bitirmeTarihi: 2014,
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
  {
    id: 3,
    adi: "Mahmut",
    cinsiyeti: "e",
    bolum: "mimarlik",
    yasi: 18,
    baslamaTarihi: 1999,
    bitirmeTarihi: 2008,
  },
  {
    id: 4,
    adi: "Senem",
    cinsiyeti: "k",
    bolum: "tip",
    yasi: 45,
    baslamaTarihi: 1993,
    bitirmeTarihi: 1997,
  },
  {
    id: 5,
    adi: "Osman",
    cinsiyeti: "e",
    bolum: "informatik",
    yasi: 61,
    baslamaTarihi: 1980,
    bitirmeTarihi: 1988,
  },
  {
    id: 6,
    adi: "Emine",
    cinsiyeti: "k",
    bolum: "iibf",
    yasi: 17,
    baslamaTarihi: 2017,
    bitirmeTarihi: 2021,
  },
];

const sayilar = [1, 3, 5, 6, 7, 8, 8, 9, 20];

const sayilarToplami = sayilar.reduce((acc, item) => {
  return acc.concat(item * 2);
}, []);

// console.log(sayilarToplami);

const ogrenciYaslarininToplami = students.reduce((acc, item) => {
  return (acc = acc + item.yasi);
}, 0);

// console.log(ogrenciYaslarininToplami / students.length);

const bolumOgrenciSayiObjeleri = students.reduce((bolumler, ogrenci) => {
  const ogrenciBolumu = ogrenci.bolum;

  if (bolumler[ogrenciBolumu]) {
    bolumler[ogrenciBolumu]++;
  } else {
    bolumler[ogrenciBolumu] = 1;
  }

  return bolumler;
}, {});

console.log(bolumOgrenciSayiObjeleri);

// expectedResult = { mimarlik: 2, muhendislik: 3 }

// const bolumler = {};

// for (let i = 0; i < students.length; i++) {
//   if (bolumler[students[i].bolum]) {
//     bolumler[students[i].bolum]++;
//   } else {
//     bolumler[students[i].bolum] = 1;
//   }
// }

// console.log(bolumler);
