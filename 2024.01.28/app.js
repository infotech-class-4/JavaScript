const image = document.querySelector("#image");

image.style.width = "50%";
image.style.cursor = "pointer";

console.log(image.src);

console.log(image.getAttribute("src"));

let imgSrc = image.getAttribute("src");

// image.addEventListener("click", () => {
//   // image.src = "winter.jpg"

//   if (imgSrc == "summer.jpg") {
//     image.src = "winter.jpg";
//     imgSrc = image.getAttribute("src");
//   } else {
//     image.src = "summer.jpg";
//     imgSrc = image.getAttribute("src");
//   }
// });

// image.addEventListener("click", () => {
//   // image.src = "winter.jpg"

//   if (imgSrc == "summer.jpg") {
//     image.src = "winter.jpg";
//     imgSrc = image.getAttribute("src");
//     console.log("if icerisi");
//     return
//   }

//   console.log("if disarisi");

//   image.src = "summer.jpg";
//   imgSrc = image.getAttribute("src");
// });

image.addEventListener("click", () => {
  if (image.src.includes("summer.jpg")) {
    image.src = "winter.jpg";
    return;
  }

  image.src = "summer.jpg";
});

const containerDiv = document.querySelector("#container-div");

const boyutlandirici = document.createElement("input");

boyutlandirici.type = "range";
boyutlandirici.min = "0";
boyutlandirici.max = "100";
boyutlandirici.value = "50";
boyutlandirici.style.width = "300px";

boyutlandirici.addEventListener("input", (e) => {
  console.log(e.target.value);

  image.style.width = `${e.target.value}%`;
});

containerDiv.appendChild(boyutlandirici);
console.log(boyutlandirici);

console.clear();

// Delete todo
const deleteBtn = document.querySelectorAll(".text-danger");

console.log(deleteBtn);

deleteBtn.forEach((todo) => {
  // console.log(todo);

  todo.addEventListener("click", () => {
    todo.parentElement.parentElement.remove();
  });
});

const okIcon = document.querySelectorAll(".fa-check");

console.log(okIcon);

{
  /* <li class="list-group-item list-group-item-action d-flex justify-content-between" aria-disabled="true">A
disabled item
<a href="#" class="delete-item">
    <i class="fa fa-remove text-danger"></i>
    <i class="fa fa-solid fa-check"></i>
</a>
</li> */
}

okIcon.forEach((todo) => {
  todo.addEventListener("click", () => {
    if (
      todo.parentElement.parentElement.style.textDecoration == "line-through"
    ) {
      todo.parentElement.parentElement.style.textDecoration = "none";
      todo.parentElement.parentElement.style.color = "";
      todo.style.color = "";
      //todo.style.removeProperty("color")
    } else {
      console.log(todo);
      todo.parentElement.parentElement.style.textDecoration = "line-through";
      todo.parentElement.parentElement.style.color = "green";
      todo.style.color = "green";
    }
  });
});


