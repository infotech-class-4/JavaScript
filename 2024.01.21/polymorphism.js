// POLYMORPHISM

class Bildirim {
  yap = (gelenClass) => {
    // { mesaj: 'asdasd, gonder: ()=>{} }
    console.log("mesaj hazirlaniyor");

    console.log(gelenClass);

    gelenClass.gonder();

    console.log("mesajlar kaydedildi.");
  };
}

class Mesaj {
  constructor(pMesaj) {
    this.mesaj = pMesaj;
  }

  gonder = function () {
    console.log(`${this.mesaj} gönderildi.`);
  };
}

class Eposta extends Mesaj {}

class SMS extends Mesaj {}

class Telefon extends Mesaj {}

const onButtonClick = () => {
  const bildirim = new Bildirim();

  const eposta = new Eposta("Eposta mesaji");
  const sms = new SMS("SMS mesaji");
  const telefon = new Telefon("Telefon mesaji");

  bildirim.yap(sms);

  // const sms = new SMS("Sms mesaji");
};

onButtonClick();
