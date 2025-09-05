const checkbutton = document.getElementById("check-btn")
const inputvalue = document.getElementById("text-input")


// this reverses a string.
/*let s = "GeeksforGeeks";
const ans = [...s].reverse().join("");
console.log(ans);*/




const reversestring = (inputvalue) =>{
    return str.split("").reverse().join("");
}

checkbutton.addEventListener("click", () => {
    if (inputvalue.value === "") {
        alert("Please input a value");
    }else{
        let value = inputvalue
        const cleanedinputvalue = str.replace(/[^a-zA-Z0-9]/g, "");
    }
});
