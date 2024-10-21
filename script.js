document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginResult = document.getElementById("loginResult");

    // Reset error messages
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    let isValid = true;

    // Check if username is empty
    if (usernameInput.value.trim() === "") {
        document.getElementById("usernameError").style.display = "block";
        isValid = false;
    }

    // Check if password is empty
    if (passwordInput.value.trim() === "") {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    // Simulate a successful login if form is valid
    if (isValid) {
        loginResult.textContent = "Login successful!";
        loginResult.style.color = "green";
    } else {
        loginResult.textContent = "Login failed. Please check your input.";
        loginResult.style.color = "red";
    }
});
