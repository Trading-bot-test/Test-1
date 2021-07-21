const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

loginButton.addEventListener("click", (e) => {
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        alert("You have successfully logged in.");
        alert("Redirecting to Dashboard");
        window.location.href = "./Dashboard.html";
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
        window.location.href = "./login.html";
        return false;
    }
})

  

