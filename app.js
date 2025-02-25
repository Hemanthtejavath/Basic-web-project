document.querySelector("button").addEventListener("click", () => {
    //This listens for a "click" event on the button. When the button is clicked,
    //  the function inside () => { ... } is executed.
    const email = document.querySelector("#email").value//  value of inpute e mail <to get  internal value >
    const password = document.querySelector("#password").value // value of inpute password <to get internal value>
    console.log(email);
    console.log(password);

    if (email === "") {
        return alert("Invalid Email");
    }
    if (password === "") {
        return alert("Invalid Password");
    }
    if (password.length < 8) {
        return alert("Password Length is Incorrect");
    }

    return alert("Welcome, user!");
});
document.querySelector("#reset").addEventListener("click",()=>{
    //reset  the box 
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
}
)
