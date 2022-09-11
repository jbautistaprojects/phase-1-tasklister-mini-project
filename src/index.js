document.addEventListener("DOMContentLoaded", () => {
  const taskItem = document.getElementById('create-task-form');
  let todoList = [];
  taskItem.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskValueFromForm = document.getElementById("new-task-description").value;
    
    createListItem(taskValueFromForm, todoList);
    

})
//Create Delete all Programming
let deleteAll = document.createElement('button');
deleteAll.textContent = 'Delete All'
deleteAll.addEventListener('click', deleteAllItems);
document.getElementById("list").appendChild(deleteAll);

//create the div sections
const selectDiv = document.createElement('div')
selectDiv.id = 'select'
document.getElementById('create-task-form').appendChild(selectDiv);




//create select down button and change font color to priority 
//(high=red, medium = yellow, low = green)



//create the drop down menu elements
const priorityDropdown = document.createElement('select');
priorityDropdown.id = 'prioritySelect'
const priorityDropdown1 = document.createElement('option');
const priorityDropdown2 = document.createElement('option');
const priorityDropdown3 = document.createElement('option');

//attach values and text
priorityDropdown1.text = "High";
priorityDropdown1.value = "high";
priorityDropdown2.text = "Medium";
priorityDropdown2.value = "medium";
priorityDropdown3.text = "Low";
priorityDropdown3.value = "low";

//add label


//add to form selection
document.getElementById('select').appendChild(priorityDropdown)
document.querySelector("select").appendChild(priorityDropdown1)
document.querySelector("select").appendChild(priorityDropdown2)
document.querySelector("select").appendChild(priorityDropdown3)

//console.log("priority html",priorityDropdown)

//create button for sorting by priority
let sortItemsByhighestPriority = document.createElement('button');
sortItemsByhighestPriority.textContent = 'Sort By Highest Priority'
sortItemsByhighestPriority.addEventListener('click', () => filterByHighPriority(todoList));
document.getElementById("list").appendChild(sortItemsByhighestPriority);

let sortItemsBylowestPriority = document.createElement('button');
sortItemsBylowestPriority.textContent = 'Sort By Lowest Priority'
sortItemsBylowestPriority.addEventListener('click', () => filterByLowPriority(todoList));
document.getElementById("list").appendChild(sortItemsBylowestPriority);
})

//functions that run the page and are called from above

function createListItem(itemInput, array, dateFromForm) {
  
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteItem)
  btn.textContent = 'x';
  p.textContent = `${itemInput}`;
  p.appendChild(btn);
  //console.log(p);
  let newItem = document.getElementById("tasks");
  //console.log(newItem);

   // coding for priority font change
  let priority = document.querySelector("select").value;
  fontColor = assignFontColor(priority);
  p.style.color = fontColor
 

  newItem.appendChild(p);
 // create object with each todo
 
 let todoItem = {};
 todoItem.task = itemInput;
 todoItem.priority = priority;

 array.push(todoItem);
 //console.log(array);


}

function deleteItem(e) {
  e.target.parentNode.remove();
}

function deleteAllItems(e) {
  parentNodeDelete = document.getElementById("tasks");
  while (parentNodeDelete.lastChild) {
    parentNodeDelete.removeChild(parentNodeDelete.lastChild);
  }
}

function assignFontColor(priorityClassification) {
  if (priorityClassification === "high") {
    return "red"
  }
  else if (priorityClassification === "medium") {
    return "yellow"
  }
  else if (priorityClassification === "low") {
    return "green"
  }
}

function filterByHighPriority(listArray) {
  //returns array of said priority items
  let highPriorityTaskArray2 = createHighPriorityArray(listArray);
  let mediumPriorityTaskArray2 = createMediumPriorityArray(listArray);
  let lowPriorityTaskArray2 = createLowPriorityArray(listArray);
  //delete current displayed list
 deleteAllItems()
  //pop and append new list using create list item
  createListItemByPriority(highPriorityTaskArray2, "red")
  createListItemByPriority(mediumPriorityTaskArray2, "yellow")
  createListItemByPriority(lowPriorityTaskArray2, "green")
}

function createHighPriorityArray(listArray) {
  const filterPriorityArray = listArray;
  //console.log(filterPriorityArray);
  const highPriorityArray = filterPriorityArray.filter(filterPriorityArray => {
    return filterPriorityArray.priority === 'high'})
    
  let highPriorityTaskArray = highPriorityArray.map(highPriorityArray => highPriorityArray.task);
  console.log(highPriorityTaskArray);
  return highPriorityTaskArray
}

function createListItemByPriority(organizedArray, fontColor) {
  for (i = 0; i < organizedArray.length; i = i++){
    let pp = organizedArray.pop();
    console.log("pp", pp);
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.addEventListener('click', deleteItem)
    btn.textContent = 'x';
    p.textContent = pp;
    p.appendChild(btn);
    let newItem = document.getElementById("tasks");
    p.style.color = fontColor
    newItem.appendChild(p);;
  }
}

function createMediumPriorityArray(listArray) {
  const filterPriorityArray = listArray;
  //console.log(filterPriorityArray);
  const mediumPriorityArray = filterPriorityArray.filter(filterPriorityArray => {
    return filterPriorityArray.priority === 'medium'})
    
  let mediumPriorityTaskArray = mediumPriorityArray.map(mediumPriorityArray => mediumPriorityArray.task);
  console.log(mediumPriorityTaskArray);
  return mediumPriorityTaskArray
}

function createLowPriorityArray(listArray) {
  const filterPriorityArray = listArray;
  //console.log(filterPriorityArray);
  const lowPriorityArray = filterPriorityArray.filter(filterPriorityArray => {
    return filterPriorityArray.priority === 'low'})
    
  let lowPriorityTaskArray = lowPriorityArray.map(lowPriorityArray => lowPriorityArray.task);
  console.log(lowPriorityTaskArray);
  return lowPriorityTaskArray
}

function filterByLowPriority(listArray) {
  //returns array of said priority items
  let highPriorityTaskArray2 = createHighPriorityArray(listArray);
  let mediumPriorityTaskArray2 = createMediumPriorityArray(listArray);
  let lowPriorityTaskArray2 = createLowPriorityArray(listArray);
  //delete current displayed list
 deleteAllItems()
  //pop and append new list using create list item
  createListItemByPriority(lowPriorityTaskArray2, "green");
  createListItemByPriority(mediumPriorityTaskArray2, "yellow");
  createListItemByPriority(highPriorityTaskArray2, "red");
}