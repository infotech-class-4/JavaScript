// OBJECTS

// property
// method

const circle = {
  radius: 5,
  location: {
    x: 1,
    y: 0,
  },
  render: function () {
    console.log("daire render edildi.");
  },
};

circle["location"] = { x: 15 };
circle.yeniProp = "yeni deger";

// Object.defineProperty(circle, "ikinciDeger");

// console.log(circle);

// factory pattern
const createCircle = function (paramRadius) {
  return {
    radius: paramRadius,
    location: {
      x: 1,
      y: 0,
    },
    render: function () {
      console.log("daire render edildi.");
    },
  };
};

const birinciObject = createCircle(13);
const ikinciObject = createCircle(100);

// constructor pattern
function Circle(paramRadius) {
  this.radius = paramRadius;
  this.location = 0;
  console.log(this);
}

const yeniCircle = new Circle(13);
const yeniCircle2 = new Circle(11); // {}
