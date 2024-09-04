let todoItemContainer=document.getElementById("todoItemsContainer");
let todoElement=document.createElement("li");
todoElement.classList.add("todo-items-container","d-flex","flex-row");
todoItemContainer.appendChild(todoElement);
let inputElement=document.createElement("input");
inputElement.type="checkbox";
inputElement.id="checkboxInput";
inputElement.classList.add("checkbox-input");
todoElement.classList(inputElement);