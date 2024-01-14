/////

const loginIslemiBasarili = false;

const loginOl = (ikinciIslemFonksiyonu, yonlendirmeFonksiyonu) => {
  setTimeout(() => {
    if (loginIslemiBasarili) {
      console.log("login oldu");
      ikinciIslemFonksiyonu();
    } else {
      console.log("login basarisiz");
      yonlendirmeFonksiyonu();
    }
  }, 1000);
};

// setTimeout(() => {
//   console.log("makalelerin yorumlari yüklendi");
// }, 1000);

const makaleleriYukle = () => {
  setTimeout(() => {
    console.log("makaleler yüklendi");
  }, 2000);
};

const adminPaneliniYukle = () => {
  setTimeout(() => {
    console.log("panel yüklendi");
  }, 2000);
};

const anaSayfayiYukle = () => {
  setTimeout(() => {
    console.log("ana sayfaya yonlendiriliyorsunuz");
  }, 2000);
};

loginOl(makaleleriYukle, anaSayfayiYukle);

// normal kullanici
// 1- login
// 2- makaleleriYukle

// admin kullanicisi
// 1- login
// 2- admin paneline git
