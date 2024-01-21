// Encapsulation

const maas = 4000;
const fazlaMesai = 20;
const fazlaMesaiUcreti = 14;

function standartMaasHesapla(p1, p2, p3) {
  console.log({ p1, p2, p3 });
  return p1 + p2 * p3;
}

const maas_2 = 4500;
const fazlaMesai_2 = 2;
const fazlaMesaiUcreti_2 = 15;

// const calisanMaasi = standartMaasHesapla(maas, fazlaMesai, fazlaMesaiUcreti);

// console.log(calisanMaasi);

// oop

const calisan_1 = {
  maas: 4000,
  fazlaMesai: 2,
  fazlaMesaiUcreti: 25,
  maasHesapla: function () {
    return this.maas + this.fazlaMesai * this.fazlaMesaiUcreti + 1000;
  },
};

const calisan_2 = {
  maas: 4500,
  fazlaMesai: 20,
  fazlaMesaiUcreti: 25,
  maasHesapla: function () {
    return this.maas + this.fazlaMesai * this.fazlaMesaiUcreti;
  },
};

console.log(calisan_2.maasHesapla());
