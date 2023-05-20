const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");

type Category = "general" | "work" | "hobby" | "gym";

interface Task {
  title: string;
  done: boolean;
  category?: Category;
}

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
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
    const categoryElement: HTMLElement = document.createElement("li");

    const radioInputElement: HTMLInputElement = document.createElement("input");
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
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    const id: string = `task-${index}`;

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.title;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
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

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const selectedRadioElement: HTMLInputElement = document.querySelector(
    "input[type='radio']:checked"
  );
  const selectedCategory: Category = selectedRadioElement.value as Category;
  addTask({
    title: taskNameInputElement.value,
    done: false,
    category: selectedCategory,
  });
  render();
});

addTask({ title: "zrobić klatę", category: "gym", done: false });

renderCategories();
render();
