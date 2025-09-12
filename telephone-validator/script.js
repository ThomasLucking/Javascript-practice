1 // grabs each element from their ID
const input = document.getElementById("user-input")
const results = document.getElementById("results-div")
const checkbuton = document.getElementById("check-btn")
const clearbutton = document.getElementById("clear-btn")


checkbuton.addEventListener('click', () => {
    if (input.value === "") {
        alert("Please provide a phone number")
    }else{
        // Matches a valid US phone number with optional country code proper area code and optional spaces or dashes.
        const phone_number_regex_list = [/^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/]
        // the isValid list return true if atleast one regex matches in that list.
        const isValid = (msg) => phone_number_regex_list.some((regex) => regex.test(msg));
        
        // tenary operator to check if the it's a valid US number or not.
        results.textContent = isValid(input.value)
            ? `Valid US number: ${input.value} `
            : `Invalid US number: ${input.value}`; 
    }
});
// when the clear button it clicked it resets the innertext of the results div
clearbutton.addEventListener('click', () => {
    results.innerText = "";
});

