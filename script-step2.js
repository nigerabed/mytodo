// setup
let todoList = [];

todoList.push("Pay El Bill");
todoList.push("Contact for dantist insurance");
todoList.push("Kids vaccine");
todoList.push("Buy Nigers winter jakket ;) ");

//connect with HTML ul element
let listBox = document.getElementById("listBox");

// using loop
for (let i = 0; i < todoList.length; i++) {
  // now create a new li element
  let taskLi = document.createElement("li");
  taskLi.innerText = todoList[i];

  // add the li element as a child to the ul element
  listBox.appendChild(taskLi);
}
