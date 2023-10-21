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
let secondItem = document.querySelectorAll('.list-group-item');
console.log(secondItem);

secondItem[1].style.color = 'green';

let odd = document.querySelectorAll('li:nth-child(odd)');

for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}