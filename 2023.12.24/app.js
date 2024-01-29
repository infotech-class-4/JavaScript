// Switch case

// switch (value1) {
//   case value1:

//   case value2:

//   case value4:

//     break;
//   case value:
//     break;
//   case value:
//     break;

//   default:
//     break;
// }

var fruit = "Apple";

switch (fruit) {
  case "Apple":
    console.log("Gelen deger Apple");
    break;

  case "Kiwi":
    console.log("gelen dger Kiwi");
    break;

  case "Muz":
    console.log("Girilen deger muz");
    break;

  default:
    console.log("Deger bulunamadi");
    break;
}

var days = [
  "Pazartesi",
  "Sali",
  "Carsamba",
  "Persembe",
  "Cuma",
  "C.tesi",
  "Pazar",
];

switch (days[1]) {
  case "Pazartesi":
  case "Sali":
    console.log("sali gunu");

  case "Carsamba":
   
  case "Persembe":
  case "Cuma":
    console.log(days[4],"Calisma gununudur");
    break;


  case "C.tesi":
  case "Pazar":
    console.log(days[0],"Tatil gunudur");
    break

  default:
    console.log("Gecersiz deger.");
    break;
}
