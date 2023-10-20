// console.log('hello World');

// Get element by ID
let headerTitle = document.getElementById("header-title");
// console.log(headerTitle);

headerTitle.style.border = 'solid 2px #000'; 


// let title = document.getElementById("main");
// console.log(title);

// title.textContent = 'sssss';
// title.style.color = 'green';

// Get elements by class name
let items = document.getElementsByClassName('list-group-item')
// console.log(item);

items[2].style.backgroundColor = 'green';

for(let i=0; i<items.length; i++)[
    items[i].style.fontWeight = 'bold'
]