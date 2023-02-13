const appElement = document.getElementById("app");

const h1Element = document.createElement("h1");
h1Element.textContent = "🕒 Todo list";

//localStorage.clear()
// form elements:
const formContainer = document.createElement("main");

const formElements = document.createElement("form");
const formInput = document.createElement("input");
formInput.placeholder = "Add a todo";
const formSubmitButton = document.createElement("button");
formSubmitButton.textContent = "Add todo";
// todo list item container:
const todoListItemContainer = document.createElement("div");
todoListItemContainer.id = "todos";

// append form components to the form container
formElements.append(formInput, formSubmitButton);
formContainer.append(formElements, todoListItemContainer);

// append the elements to the page:
appElement.append(h1Element, formContainer);

// add events:
formSubmitButton.addEventListener("click", addTodo);

// local storage key:
const localStorageKey = "todoListProject";
// get local storage data:
let localStorageData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
// the line above does the same thing as the if else statement belowP
// if (JSON.parse(localStorage.getItem(localStorageKey))) localStorageData = JSON.parse(localStorage.getItem(localStorageKey))
// else localStorageData = []

//console.log(JSON.parse(`{"test": 1}`))
// add todo function:
function addTodo(event) {
  event.preventDefault();

  const todoItemElement = document.createElement("li");
  todoItemElement.textContent = formInput.value;

  // Why you shouldn't use innerHTML with user-inputs:
  // todoItemElement.innerHTML = formInput.value
  // <img onerror="appElement = null" src="lol">"

  const removeItemButton = document.createElement("button");
  removeItemButton.textContent = "Remove";
  todoItemElement.append(removeItemButton);
  todoListItemContainer.append(todoItemElement);

  removeItemButton.addEventListener("click", removeTodo);

  // add item to localStorage:

  // [1,2,3,4,]
  //console.log(localStorageData)
  // Date.now()
  localStorageData.push({ name: formInput.value });
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
}

// remove todo function:
function removeTodo(event) {
  //console.log(event.target.parentElement.textContent)
  //localStorageData.filter(itemName => itemName != event.target.parentElement.textContent)
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
  event.target.parentElement.remove();
}

// render todo list items from localstorage:

localStorageData.forEach((todoItem) => {
  console.log(todoItem);
  const todoItemElement = document.createElement("li");
  todoItemElement.textContent = todoItem.name;

  const removeItemButton = document.createElement("button");
  removeItemButton.textContent = "Remove";
  todoItemElement.append(removeItemButton);
  todoListItemContainer.append(todoItemElement);

  removeItemButton.addEventListener("click", removeTodo);
});
