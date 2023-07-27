document.getElementById('title'); // It will print the element which  is having id title.
document.getElementById('title').id; // It will return the id
document.getElementById('title').class; // It will return undefined.
document.getElementById('title').className; // It will return the class name.
document.getElementById('title').getAttribute('id'); // It will return the element which  is having id title
document.getElementById('title').getAttribute('class'); // It will return the class name.
document.getElementById('title').setAttribute('class', 'test'); // It will override the class name to test, of the element which id is title
document.getElementById('title').setAttribute('class', 'test heading');// It will override the class name to test heading, of the element which id is title