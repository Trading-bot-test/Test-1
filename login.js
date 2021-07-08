const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        alert("You have successfully logged in.");
        alert("Redirecting to Dashboard");
        window.location = "./Dashboard.html"
    }
    else if (username == null || username == "") {
        alert("Please enter the username.");
        return false;
    }
    else if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }
    else {
        alert("Wrong password entered.");
        loginErrorMsg.style.opacity = 1;
    }
})
{/* <script defer src="login.js"></script> */}