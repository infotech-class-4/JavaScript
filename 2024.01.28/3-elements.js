
// // const divForm = document.querySelector(".input-group")

// // console.log(divForm);

// let value


// // value = divForm.firstElementChild
// // value = divForm.lastElementChild




// // console.log(value);


//  // PArent dan child da ulasma 
// // const todoList = document.querySelector(".list-group")

// // value =todoList.firstElementChild
// // value =todoList.lastElementChild

// // value = todoList.children
// // value = todoList.children[4]


// // console.log(value);

// //Chil dan Parent ta ulasma

// const deleteBtn = document.querySelector(".text-danger")

// value = deleteBtn
// // value = deleteBtn.parentElement.parentElement
// // // value = deleteBtn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
// // value=deleteBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

// value = deleteBtn.nextElementSibling
// // value = deleteBtn.nextElementSibling.nextElementSibling

// value.style.color = "red"


// console.log(value);


// Create Dynamic Element

const containerDiv = document.querySelector("#container-div")
const link = document.createElement("a")

link.href = "about.html"
link.className="btn btn-sm btn-primary mt-3"
link.textContent = "Hakkimizda sayfasina git.."

containerDiv.appendChild(link)



console.log(link);

{/* <li class="list-group-item list-group-item-action d-flex justify-content-between">And a fifth one
<a href="#" class="delete-item">
    <i class="fa fa-remove text-danger"></i>
    <i class="fa fa-solid fa-check"></i>
</a>
</li> */}

const ul = document.querySelector(".list-group")

const li = document.createElement("li")
li.className="list-group-item list-group-item-action d-flex justify-content-between"
li.textContent= "Benim Todo'm"

const a = document.createElement("a")
a.href="#"
a.className = "delete-item"

const iDelete = document.createElement("i")
iDelete.className="fa fa-remove text-danger"

const iSuccess = document.createElement("i")
iSuccess.className="fa fa-solid fa-check"

a.append(iDelete,iSuccess)

li.appendChild(a)

ul.appendChild(li)



// delete Element

li.remove()

console.log(ul.children);
ul.children[2].remove()



