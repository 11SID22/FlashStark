// console.log('hello World');

// Get element by ID
// let headerTitle = document.getElementById("header-title");
// // console.log(headerTitle);

// headerTitle.style.border = 'solid 2px #000'; 


// let title = document.getElementById("main");
// console.log(title);

// title.textContent = 'sssss';
// title.style.color = 'green';




// Get elements by class name
// let items = document.getElementsByClassName('list-group-item')
// console.log(item);

// items[2].style.backgroundColor = 'green';

// for(let i=0; i<items.length; i++)[
//     items[i].style.fontWeight = 'bold'
// ]




// Get elements by tag name
// let li = document.getElementsByTagName('li');
// console.log(li);

// li[1].style.backgroundColor = 'red';

// // items[4].style.backgroundColor = 'Yellow'; // Failed by class name which is not assigned to item 5.
// li[4].style.backgroundColor = 'Yellow'; // Success by tagname





// QUERYSELECTEOR //
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// console.log(secondItem);
// secondItem.style.backgroundColor = 'green';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.textContent = "";


// QUERYSELECTORALL //
// let secondItem = document.querySelectorAll('.list-group-item');
// console.log(secondItem);

// secondItem[1].style.color = 'green';

// let odd = document.querySelectorAll('li:nth-child(odd)');

// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

// TRAVERSING THE DOM //

// Parent node 
// let itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// Parent element
// let itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#000000';

// Last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = '#999fff'

// First element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello World';

// Last child
// console.log(itemList.lastChild);

// First child
// console.log(itemList.firstChild);

// Next sibling
// console.log(itemList.nextSibling);

// Previous sibling
// console.log(itemList.previousSibling);

// Next element sibling
// console.log(itemList.nextElementSibling);

// Previous element sibling 
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// Create element

// Create a div
// let newDiv = document.createElement('div');


// // Add class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Set attribute
// newDiv.setAttribute('title', 'hello div');

// // Create a text node
// let newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// console.log(newDiv);

// // Add this newDiv to the dom
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);


// let itemList = document.getElementById('items');
// itemList.innerHTML = '<li>Hello WORLD</li>' + itemList.innerHTML



//Add and Delete Items
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e){ 
    e.preventDefault();
}

// Get input value 
let newItem = document.getElementById('item').value;

// create new li element
let li = document.createElement('li');

// Add class (same as other li class)
li.className = 'list-group-item';

// Add text node with input value
li.appendChild(document.createTextNode(newItem));

itemList.appendChild(li);