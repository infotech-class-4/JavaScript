// inheritance - kalitim

// class

class Tasit {
  constructor(pMarka, pModel, pRenk) {
    this.marka = pMarka;
    this.model = pModel;
    this.renk = pRenk;
  }

  calistir = function () {
    console.log(`${this.marka} tasiti calistirildi.`);
  };

  bilgiVer = function () {
    console.log(`Bu aracin modeli ${this.model} dir`);
  };
}

class Nokta {
  constructor(pX, pY) {
    this.x = pX;
    this.y = pY;
  }
}

// const tasit1 = new Tasit("audi", "a3");
// const tasit2 = new Tasit("bmw", "z4");

// class Motosiklet extends Tasit {
//   constructor(pMarka, pModel) {
//     super(pMarka, pModel);
//     this.guvenlikOnlemi = "abs";
//   }

//   tekTekerSur = function () {
//     console.log("cok tehlikeli ama tamam yapiyorum");
//   };
// }

// class InsaatMakinesi extends Tasit {}

// const motor1 = new Motosiklet("honda", "100");

class InsaatMakinesi extends Tasit {
  constructor(pMarka, pModel, pRenk) {
    super(pMarka, pModel, pRenk);
    this.kepceTonaji = "40t";
  }
}

const insaatMakinesi1 = new InsaatMakinesi("cat", "kepce");
