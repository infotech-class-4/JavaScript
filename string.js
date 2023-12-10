/* 
var
let
const

*/

var str = "Hello World";
var str1 = "3";
var str2 = "Dunya";

var str3 = "Merhaba 'Dunya'";
console.log(str3);

var str4 = 'Merhaba "Dunya"';
console.log(str4);

console.log(typeof str);
console.log(typeof str1);
console.log(typeof str2);

console.clear();
/* 
    STRING METHODLAR
    String length
    String slice(start, end)
    String replace()
    String toUpperCase()
    String toLowerCase()
    String concat()
    String trim()
    String trimStart()
    String trimEnd()
    String charAt()
    String split()
*/

var text = "Bugun hava cok guzel.";
console.log(text.length);

console.log(text.slice(0, 5));
console.log(text.slice(10));
console.log(text.slice(-12, -1));
console.log(text.slice(-12));
console.clear();


console.log(text.replace("guzel","yagmurlu"))

console.log(text.toUpperCase())
console.log(text.toLowerCase())

console.clear()

var strBirlestir1 = "Ali"
var strBirlestir2 = "Veli"
console.log(strBirlestir1.concat(strBirlestir2))

var strEmpty = "           Hava bugun    bugun Hava     bugun    Hava    bugun Hava bugun                    "

console.log(strEmpty.length)
console.log(strEmpty.trim().length)
console.log(strEmpty.trimStart().length);
console.log(strEmpty.trimEnd().length);

console.clear()


var text = "Bugun hava cok guzel.";
var text2="Ahmet,Ali,Veli"
console.log(text.charAt(0))
console.log(text.charAt(5))

console.log(text.split(" "))
console.log(text2.split(""))

