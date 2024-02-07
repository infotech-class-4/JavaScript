const select = document.querySelector("#users");
const tableBody = document.querySelector("tbody");

const search = document.querySelector("#search");

let userTodos = [];
let findTodo = "";

const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

window.addEventListener("load", async () => {
  const { data } = await getUsers();

  data.forEach(async (user, index) => {
    // console.log(user);

    const option = document.createElement("option");
    option.value = user.id;
    option.textContent = user.name;

    select.appendChild(option);

    if (index == 0) {
      const { data } = await getTodos(user.id);
       userTodos = data
       makeList(data)
    }
  });
});

select.addEventListener("click", async (e) => {
  const { data } = await getTodos(e.target.value);

  userTodos = data;
  makeList(data);
});

const getTodos = (userId) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
};

const makeList = (todos) => {
  tableBody.innerHTML = "";

  todos.forEach((todo, index) => {
    const tr = document.createElement("tr");
    const tdTodo = document.createElement("td");

    tdTodo.innerHTML = todo.completed
      ? `<del><b> ${todo.title}</b></del>`
      : `<b>${todo.title}</b>`;
    tdTodo.className = todo.completed ? "none" : "text-danger";

    const tdButtons = document.createElement("td");
    tdButtons.className = "d-flex justify-content-between gap-2";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-sm btn-danger";

    deleteBtn.addEventListener("click", (e) => {
      console.log(e.target.parentElement.parentElement);
      e.target.parentElement.parentElement.remove();
      // deleteTodo() // bunu siz yapabilrisiniz...
    });

    const compeletedBtn = document.createElement("button");
    compeletedBtn.textContent = todo.completed ? "Done" : "Un-Done";
    compeletedBtn.className = todo.completed
      ? "btn btn-sm btn-success"
      : "btn btn-sm btn-warning";
    compeletedBtn.id = todo.id;

    compeletedBtn.addEventListener("click", (e) => {
      // console.log(e.target.id);

      // changeStatus(e.target.id);
      changeStatus(index);
    });

    tdButtons.append(deleteBtn, compeletedBtn);

    tr.append(tdTodo, tdButtons);
    tableBody.appendChild(tr);
  });
};

const changeStatus = (index) => {
  // const index = userTodos.findIndex((todo) => todo.id == id);

  // if (userTodos[index].completed) {
  //   userTodos[index].completed = false;
  // } else {
  //   userTodos[index].completed = true;
  // }

  userTodos[index].completed = !userTodos[index].completed;

  // makeList(userTodos);

  if (findTodo == "") {
    makeList(userTodos);
  } else {
    searchTodos(findTodo);
  }
};

search.addEventListener("input", (e) => {
  findTodo = e.target.value;

  searchTodos(findTodo);
});

const searchTodos = (findTodo) => {
  const tempTodos = userTodos.filter((todo) => todo.title.includes(findTodo));

  makeList(tempTodos);
};
