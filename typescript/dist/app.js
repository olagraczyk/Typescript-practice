const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
  {
    title: "Wyrzucić śmieci",
    done: false,
    category: "general",
  },
  {
    title: "Pójść na siłkę",
    done: true,
    category: "gym",
  },
  {
    title: "Nakarmić grzankę",
    done: false,
    category: "general",
  },
];
const renderCategories = () => {
  /*
  <li>
    <input
      type="radio"
      name="category"
      value="general"
      id="category-general"
    />
    <label for="category-general">general</label>
    </li>
    */
  categories.forEach((category) => {
    const categoryElement = document.createElement("li");
    const radioInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    categoryElement.appendChild(radioInputElement);
    categoriesContainerElement.appendChild(categoryElement);
  });
};
const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    const id = `task-${index}`;
    const labelElement = document.createElement("label");
    labelElement.innerText = task.title;
    labelElement.setAttribute("for", id);
    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.title;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });
    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);
    tasksContainerElement.appendChild(taskElement);
  });
};
const addTask = (task) => {
  tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
  addTask({
    title: taskNameInputElement.value,
    done: false,
    // category: selectedCategory,
  });
  render();
});
addTask({ title: "zrobić klatę", category: "gym", done: false });
renderCategories();
render();
