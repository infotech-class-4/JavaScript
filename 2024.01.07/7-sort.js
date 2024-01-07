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
    bolum: "mühendislik",
    yasi: 45,
    baslamaTarihi: 1993,
    bitirmeTarihi: 1997,
  },
  {
    id: 5,
    adi: "Osman",
    cinsiyeti: "e",
    bolum: "mühendislik",
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

const sonuc = students.sort((a, b) => {
  const ilk = a.adi.toUpperCase();
  const ikinci = b.adi.toUpperCase();

  if (ilk < ikinci) {
    return -1;
  }
  if (ilk > ikinci) {
    return 1;
  }
  return 0;
});

console.log(sonuc);
