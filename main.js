const toDoListInput = document.querySelector (".toDoListInput");
const toDoListList = document.querySelector (".toDoListListHolder");

function addToDo() {
    const toDoItemLi = document.createElement('div');
    toDoItemLi.classList.add('toDoItemDiv');
    const todoItemText = document.createElement('p');
    todoItemText.classList.add('toDoItem');
    todoItemText.innerText = toDoListInput.value;
    toDoItemLi.appendChild(todoItemText);

    addButton('Done', toDoItemLi, 'completeItem', 'buttonClick');
    addButton('Delete', toDoItemLi, 'deleteItem', 'buttonClick');
    toDoListList.appendChild(toDoItemLi)
    toDoListInput.value = '';
}

function addButton(text, target, classes) {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add(classes);
    buttonElement.innerText = text;
    buttonElement.onclick = function () { buttonBeenClicked(target, buttonElement) };
    target.appendChild(buttonElement);
}

function buttonBeenClicked (element, buttonClick) {
    if (buttonClick.classList[0] === 'completeItem') {
        return element.style.background = '#008000';
    } else {
        return element.remove();
    }
}
