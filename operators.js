/*
    OPERATORLER

    -Matematiksel
        +
        -
        *
        ** 
        /
        %
        =
        +=
        -=
        *=
        /=
        %=
        **= 
        ++
        --


    -Karsilastirma
        ==
        ===
        !=
        >
        <
        >=
        <=


    -Mantiksal
        &&
        ||
        !

*/

// -Matematiksel

var x = 5;
var y = 10;

var kare = x ** 2;
console.log(kare);
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x % y);

var text1 = "Ali";
var text2 = 4;
var text3 = "Veli";

console.log(text1 - text2);
console.log(text1 + text3);

console.clear();

var sayi1 = 3;

var u = ++sayi1;

var d = sayi1++;
var e = sayi1++;

console.log(u);
console.log(d);
console.log(e);
console.log(sayi1);

sayi1 += 5;
sayi1 = sayi1 + 5;

sayi1 -= 5;
sayi1 = sayi1 - 5;

sayi1 *= 5;
sayi1 = sayi1 + 5;

sayi1 /= 5;
sayi1 = sayi1 / 5;

sayi1 %= 5;
sayi1 = sayi1 % 5;
console.clear();

// -Karsilastirma
/*   
        ==
        ===
        !=
        >
        <
        >=
        <=
*/

console.log(5 == "5");

console.log("a" == "A");

console.log(5 === "5");

console.log(5 != "4");
console.log(5 != "5");
console.log(5 !== "5");

console.log(5 > 5);
console.log(5 >= 5);

console.log(5 < 5);
console.log(5 <= 5);

console.log("a" > "A");
console.clear();

// -Mantiksal
// &&
// ||
// !

var text4 = 5;
var text5 = 10;

console.log(text4 > 5 && text5 > 90);
console.log(text4 > 5 && text5 < 90);
console.log(text4 >= 5 && text5 < 90);

console.log(text4 > 5 || text5 > 90);
console.log(text4 > 5 || text5 < 90);
console.log(text4 >= 5 || text5 < 90);
console.clear()


var userName = "Ali";
var surName = "Veli";
var password = "12345";

console.log(userName == "Alii" || surName == "Veli" && password=="12345");
console.log(userName == "Alii" && surName == "Veli" || password=="12345");
console.log(userName == "Alii" && (surName == "Veli" || password=="12345"));

                            false && true
                            false
                            
var degil= false

console.log(!degil)
console.log(!!degil)

