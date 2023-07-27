// document.getElementById('title'); // It will print the element which  is having id title.
// document.getElementById('title').id; // It will return the id
// document.getElementById('title').class; // It will return undefined.
// document.getElementById('title').className; // It will return the class name.
// document.getElementById('title').getAttribute('id'); // It will return the element which  is having id title
// document.getElementById('title').getAttribute('class'); // It will return the class name.
// document.getElementById('title').setAttribute('class', 'test'); // It will override the class name to test, of the element which id is title
// document.getElementById('title').setAttribute('class', 'test heading');// It will override the class name to test heading, of the element which id is title

// const title = document.getElementById('title');
// title.style.backgroundColor = 'green';
// title.style.padding = "15px";
// title.style.borderRadius = "15px";

// title.textContent; // It will print the text which is visible on web page under that particular id. (DOM learning)
// title.innerText; // It will print the text which is present inside the element which is having id as title, no matter whether text is hidden or not. (DOM learning Test Text)
// title.innerHTML; // It will print the HTML nested code if there is any. (DOM learning <span style="display: none;">Test Text</span>)

// document.querySelector('h1') // It will select the first h1 element present in HTML code.
// document.querySelector('#title'); // It will select the first element whose id is title.
// document.querySelector('.heading'); // It will select the first element whose class name is heading.

// const myUnorderedList = document.querySelector('ul');

// const listSelector = document.querySelectorAll('li'); // It will return a NodeList, it will return all the list elements.
//listSelector.style.color = 'green' // this will not work, because it is NodeList not array.
// listSelector[0].style.color = 'green' ; // this will work 

// listSelector.forEach( (listElements) => {
//     listElements.style.color = 'green';
// });

const listSelectorByClass = document.getElementsByClassName('list-item'); // It will return HTMLCollection
const listSelectorByClassArray = Array.from(listSelectorByClass);
listSelectorByClassArray.forEach(function (listItem) {
    listItem.style.color = 'orange';
});