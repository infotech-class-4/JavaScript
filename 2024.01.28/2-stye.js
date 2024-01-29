const todoTitle1 = document.getElementsByClassName("card-body");
const todoTitle2 = document.querySelector(".card-body");

// todoTitle1[0].style.color = "red"

todoTitle2.style.color = "red";
todoTitle2.style.borderLeft = "1px solid red";
todoTitle2.style.cursor = "zoom-in";
todoTitle2.style.fontSize = "30px";
// todoTitle2.style.backgroundColor = "blue";
todoTitle2.style.borderRadius = "50px"


const myTodo = Array.from(todoTitle2.classList)
console.log(myTodo);

myTodo[myTodo.length] = "deneme"

console.log(todoTitle2.classList.length);

// console.log(todoTitle1);
console.log(todoTitle2);
