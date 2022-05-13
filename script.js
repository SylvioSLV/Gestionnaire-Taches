// Selectors =======> Sélecteurs
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const tache = document.querySelector(".tache");

// Event listeners =======> Auditeurs d'événements
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck)


// Functions =======> Fonctions
function addTodo(event){

    // Prevent form from submitting =======> Empêcher l'envoi du formulaire
    event.preventDefault();

    if (todoInput.value === "") {
        alert("Vous devez saisir une tâche")
    } else {
    
    tache.innerHTML = "Voici vos tâches"

    // Todo DIV =======> Création de la div avec la classe todo
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // CHECK MARK BUTTON =======> BOUTON COCHER
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Create LI =======> Créer les LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);


    // CHECK MARK BUTTON =======> BOUTON COCHER
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // APPEND TO LIST =======> AJOUTER À LA LISTE
    todoList.appendChild(todoDiv);

    // Clear Todo INPUT VALUE =======> Effacer Todo INPUT VALUE
    todoInput.value = "";
    }
}

function deleteCheck(e) {
    const item = e.target;

    // DELETE TODO =======> Supprimer la la div avec la classe todo
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;

        // Animation
        todo.classList.add('fall');
        todo.addEventListener("transitionend", function() {
            todo.remove();
        })
    }

    // CHECK MARK =======> Cocher
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}