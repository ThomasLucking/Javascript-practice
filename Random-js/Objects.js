
let number = 569;
let result = ""

romannumerals = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1,
}
const arrayroman = Object.entries(romannumerals) // this turns the object into an array

arrayroman.forEach(([key, value]) => { // this loops through the array finding the keys and values
    while(number >= value){ // this checks while the value is bigger than number
        result += key // Add the roman numeral
        number -= value // subtract the value 
    }
});

console.log(result)