// setup
let todoList = [];

todoList.push("Pay El Bill");
todoList.push("Contact for dantist insurance");
todoList.push("Kids vaccine");

//connect with HTML ul element
let listBox = document.getElementById("listBox");

// now create a new li element
let taskLi1 = document.createElement("li");
taskLi1.innerText = todoList[0];

// add the li element as a child to the ul element
listBox.appendChild(taskLi1);

// create another li element
let taskLi2 = document.createElement("li");
taskLi2.innerText = todoList[1];

// add the second li element to the ul element
listBox.appendChild(taskLi2);

// create another li element
let taskLi3 = document.createElement("li");
taskLi3.innerText = todoList[2];

// add the second li element to the ul element
listBox.appendChild(taskLi3);
