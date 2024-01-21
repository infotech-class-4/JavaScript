// Abstraction

function DvdPlayer(paramMarka) {
  this.marka = paramMarka;
  this.rengi = "gri";

  const powerSupply = {
    input: "220V",
    output: "5V",
  };

  this.powerInfo = function () {
    console.log(`Bu dvd nin giris voltaji = ${powerSupply.input}`);
  };

  this.play = function () {
    console.log(
      `${this.marka} markali dvd calisiyor. Icerisinde 2024'un populer sarkilari caliyor.`
    );
  };
}

const dvd1 = new DvdPlayer("sony");
dvd1.powerSupply = { input: "100000V" };

// const dvd2 = new DvdPlayer("samsung");

// dvd1.play();
// dvd2.play();
