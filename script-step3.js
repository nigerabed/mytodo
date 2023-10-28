// setup
let todoList = [];

todoList.push("Pay El Bill");
todoList.push("Contact for dantist insurance");
todoList.push("Kids vaccine");
todoList.push("Buy Nigers winter jakket ;) ");

// using loop
for (let i = 0; i < todoList.length; i++) {
  addTasktoListBox(todoList[i]);
}

//using function
function addTasktoListBox(todo) {
  //connect with HTML ul element
  let listBox = document.getElementById("listBox");

  // now create a new li element
  let taskLi = document.createElement("li");
  taskLi.innerText = todo;

  // add the li element as a child to the ul element
  listBox.appendChild(taskLi);
}
