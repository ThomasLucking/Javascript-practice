const input = document.getElementById("number")
const button = document.getElementById("convert-btn")
const output = document.getElementById("output")




const numeralConversion = () => {

    let number = parseInt(input.value);
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
        while (number >= value) { // this checks while the value is bigger than number
            result += key // Add the roman numeral
            number -= value // subtract the value 
        }
    });
    output.style.display = "block";
    output.innerText = result;    
    
}


button.addEventListener('click', () => {
    if (input.value === "") {
        output.style.display = "block";
        output.innerText = "Please enter a valid number";
    } else if (input.value <= 0) {
        output.style.display = "block";
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if (input.value >= 3999) {
        output.style.display = "block";
        output.innerText = "Please enter a number less than or equal to 3999";
    }else{
        numeralConversion()
    }
});