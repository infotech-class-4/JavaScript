var myStudent = {
  name: "Ali",
  surname: "Demir",
  class: "5/C",
  school: "I.O.O",
  blueEyes: ["Ali", "Ayse", "Mehmet"],

  fullName: function () {
    return this.name + " " + this.surname;
    // return myStudent.name + " " + myStudent.surname
  },
};

console.log(myStudent);
console.log(myStudent.name);
console.log(myStudent.class);

console.log(myStudent.blueEyes[2]);

console.log(myStudent.fullName());

myStudent.name = "Mehmet";
console.log(myStudent.name);
console.log(myStudent);

console.clear();

const favoriteColors = ["Blue", "Green", "Red", "Yellow"];

const indexToReplace = favoriteColors.indexOf("Blue");

favoriteColors[0] = favoriteColors[0].replace(
  "Blue",
  "Maviiiii"
);


console.log(favoriteColors);
// console.log(indexToReplace);

// favoriteColors[indexToReplace] = favoriteColors[indexToReplace].replace(
//   "Blue",
//   "Mavi"
// );

// console.log(favoriteColors);