
function sayName(firstName, lastName) {
  return firstName, lastName;
}

sayName("Camper", "Cat");
// this outputs cat because when you add the , it basically ignores the first parameter and outputs cat only, to fix this 
// I need to concat the firstname, last name.

function sayName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

sayName("Camper", "Cat"); // "Camper Cat"



const numbers = [1, 2, 3];
const shifted = numbers.shift() // this removes the first element and pop removes the last element of an array
console.log(shifted)

const unshifted = numbers.unshift(5); 
console.log(unshifted);
console.log(numbers);