const checkbutton = document.getElementById("check-btn")
const inputvalue = document.getElementById("text-input")
const answer = document.getElementById("result")


const cleanedinputvalue = (str) => {
    const regex = /[^a-zA-Z0-9]/g
    return str.replace(regex, "").toLowerCase();
}


const reversestring = (str) => {
    return [...str].reverse().join("");
}

checkbutton.addEventListener("click", () => {
    if (inputvalue.value === "") {
        alert("Please input a value");
    } else {
        const cleaned = cleanedinputvalue(inputvalue.value);
        const reversed = reversestring(cleaned);
        if (reversed !== cleaned) {
            result.style.display = "block";
            result.innerText = `${inputvalue.value} is not a palindrome`;
        } else {
            result.style.display = "block";
            result.innerText = `${inputvalue.value} is a palindrome`;
        }
    }
});
