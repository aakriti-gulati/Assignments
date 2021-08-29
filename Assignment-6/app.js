const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
var todos = [];

todoButton.addEventListener('click', ()=>checkInput());
todoInput.addEventListener('keydown',(e)=>{
    if(e.key === "Enter")
        checkInput();
})

function checkInput() {
	event.preventDefault();
	console.log("checkInput");
	if (todoInput.value != "")
	todos.push(todoInput.value);
	else
	{alert("Enter a valid ToDo!");}
	todoInput.value = "";
	addToDo();
}

function addToDo() {
	let list = "";
	todos.forEach((todo,id)=>{
		list += `
		<div class="todo">
	<li class="itemBox">
	<input class="todoItem" value="${todo}" disabled>
	<button class="edit-btn" onclick="edit(${id})"> <i class='fas fa-edit'> </i> </button>
	<button class="complete-btn" onclick="done(${id})"> <i class='fas fa-check'> </i> </button>
	<button class="up-btn" onclick="moveUp(${id})"> <i class="fas fa-chevron-up"> </i> </button>
	<button class="down-btn" onclick="moveDown(${id})"> <i class="fas fa-chevron-down"> </i> </button>
	<button class="trash-btn" onclick="remove(${id})"> <i class='fas fa-trash'> </i> </button>
	</li>
	</div>
	`
	todoList.innerHTML = list;
	});
}

function edit(id) {
	console.log("edit");
	var sinput = document.querySelector(`[value="${todos[id]}"]`);
	console.log(sinput);
	if (sinput.disabled == true)
	sinput.disabled = !sinput.disabled;
	else{
		sinput.disabled = !sinput.disabled;
		todos[id] = sinput.value;
	}
}

function done(id) {
	var sinput = document.querySelector(`input[value="${todos[id]}"]`);
	sinput.classList.toggle("completed");
}

function remove(id) {
	todos.splice(id, 1);
	addToDo();
}

function moveUp(id) {
	if (id>0) {
		[todos[id],todos[id-1]] = [todos[id-1],todos[id]];
	}
	addToDo();
}

function moveDown(id){
    if(id<todos.length-1)
        [todos[id],todos[id+1]] = [todos[id+1],todos[id]];
    addToDo();
}