// async - await

// ------------------- BACKEND TARAFI ----------------------
// Promislerin yazilmasi

const makaleler = [
  { id: 1, post: "asdasdasdasd asdasd" },
  { id: 2, post: "asdasdasdasd asdasd" },
];

const loginOlduMu = true; /// burada gercek login parametreleri kontrol edildi. sonucu bize verdi
const makalesiVarMi = true; /// burada makeleler kontrol edildi. sonucu bize verdi

const loginPromise = () => {
  return new Promise((resolve, reject) => {
    // 3000
    setTimeout(() => {
      if (loginOlduMu == true) {
        resolve("login islemi basarili");
      } else {
        reject("login BASARISIZ..");
      }
    }, 3000);
  });
};

const makalePromise = () => {
  return new Promise((resolve, reject) => {
    // 1000
    setTimeout(() => {
      if (makalesiVarMi == true) {
        resolve(makaleler);
      } else {
        reject("makaleleri BULUNAMADI");
      }
    }, 1000);
  });
};

// console.log(makalePromise());

// ------------------- FRONTEND TARAFI ----------------------
// async await kullanilmasi

const islem = async () => {
  await loginPromise().then((sonuc) => {
    console.log(sonuc);
  });

  makalePromise().then((sonuc) => {
    console.log("makaleleri geldi");
    console.log(sonuc);
  });
};

islem();
