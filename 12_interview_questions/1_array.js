// You have given an array which is having some extra added properties
// You have to print the original properties of the array

Array.prototype.extraProperty = "Extra Property";

const myArray = [1, 2, 3, 4, 5];

for (let v in myArray) {
      if (myArray.hasOwnProperty(v)) {
            console.log(v);
      }
}

// myArray.forEach(element => {
//       console.log(element);
// });
//Q. Display the original properties of an array.
// A. Concept -> By using prototype we can insert new properties in an array, but those will not be considered as original properties. 
// So, to get original properties just add a check to array elements using hasOwnProperty method.