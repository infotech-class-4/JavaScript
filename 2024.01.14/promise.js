// Promise nedir

// const sonuc = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// console.log(sonuc);

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

// ------------------- FRONTEND TARAFI ----------------------
// Promislerin kullanilmasi

loginPromise()
  .then((loginSonucu) => {
    console.log(loginSonucu);

    makalePromise()
      .then((sonuc) => {
        console.log("makaleler geldi");
        console.log(sonuc);
      })
      .catch((hata) => {
        console.log(hata);
      });
  })
  .catch((hataMesaji) => {
    console.log(hataMesaji);
  })
  .finally(() => {
    console.log("tüm islemler bitti.. (basarili/basarisiz)");
  });
