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