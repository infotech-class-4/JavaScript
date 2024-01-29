/**
 *
 * getElementById
 *
 * GetElementByClassName
 *
 * getElementByTagName
 * getElementByName
 * 
 * querySelector
 * querySelectorAll
 *
 */

//! id, classname, tag name

// ! getElementById

// const containerDiv = document.getElementById("container-div");

// console.log(containerDiv.id);
// console.log(containerDiv.className);
// console.log(containerDiv.className= "Deneme");
// console.log(containerDiv.classList);
// console.log(containerDiv.classList[2]= "mt-3"); // bu bir array degildir.
// console.log(containerDiv.getAttribute("name"));

// const aLink = document.getElementById("aLink");

// console.log(aLink.getAttribute("href"));


// const deger = aLink.setAttribute("class", "about")


// const titleTodo = document.getElementById("titleTodo")

// console.log(titleTodo);

// console.log(titleTodo.textContent = "<i> Todo List Yeni </i>");
// console.log(titleTodo.innerHTML= "<i> Todo List Yeni </i>");

// console.log(titleTodo.innerText);


//__________________________________________________________

// getElementClassName

// const todoLI = document.getElementsByClassName("list-group-item")

// console.log(todoLI);
// console.log(todoLI[2]);
// console.log(todoLI[0].id);

// todoLI.forEach(element => {
//     console.log(element);
// });

// for (let index = 0; index < todoLI.length; index++) {
//     const element = todoLI[index];
//     console.log(element);
    
// }


//__________________________________________________________


// const userInput = document.getElementsByName("user")

// console.log(userInput);
// console.log(userInput[0]);

//__________________________________________________________



// const aLink = document.getElementsByTagName("a")

// console.log(aLink);
// console.log(aLink[1].className);


//__________________________________________________________


// const todoListID = document.querySelector("#list") // id ile ulasma
// const todoListClass = document.querySelector(".list-group") // class ile ulasma

// const todoListTagName = document.querySelector("ul") // tag name ile ulasma


// const todoListClassAll = document.querySelectorAll(".list-group-item") // classAll ile ulasma

// console.log(todoListClassAll);

// todoListClassAll.forEach((todo)=>{
//     console.log(todo);
// })



// console.log(todoListID);
// console.log(todoListClass);
// console.log(todoListTagName);