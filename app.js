document.addEventListener("DOMContentLoaded", function () {


    let todoForm = document.getElementById("newtodoForm");
    let todoList = document.getElementById("todoList");


    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let removeButton = document.createElement("button");
        removeButton.innerText = "DONE";

        let newtodo = document.createElement("li");
        newtodo.innerText = document.getElementById("task").value;

        todoList.appendChild(newtodo)
        newtodo.appendChild(removeButton);






        todoForm.reset()

    });

    todoList.addEventListener("click", function (event) {
        const targetTagToLowerCase = event.target.tagName.toLowerCase();
        if (targetTagToLowerCase === "li") {
            event.target.style.textDecoration = "line-through";
        } else if (targetTagToLowerCase === "button") {
            event.target.parentNode.remove();
        }
    });
});
