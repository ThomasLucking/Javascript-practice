const checkbutton = document.getElementById("check-btn")
const inputvalue = document.getElementById("text-input")


// this reverses a string.
/*let s = "GeeksforGeeks";
const ans = [...s].reverse().join("");
console.log(ans);*/


const cleanedinputvalue = (str) =>{
    const regex = /[^a-zA-Z0-9]/
    return str.replace(regex, "");
}


const reversestring = (inputvalue) =>{
    return reversedstring = [...currVal].reverse().join("");
}

checkbutton.addEventListener("click", () => {
    if (inputvalue.value === "") {
        alert("Please input a value");
    }else{
        let item = inputvalue.value
        const currVal = cleanInputString(item.value);
        const reversedstring = [...currVal].reverse().join("");
        console.log(reversedstring);

    }
});
