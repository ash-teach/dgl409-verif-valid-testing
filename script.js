// Form validation logic extracted to a function
function validateForm(username, password) {
    let isValid = true;

    if (username.trim() === "") {
        isValid = false;
        console.log("Error: Username is required");
    }

    if (password.trim() === "") {
        isValid = false;
        console.log("Error: Password is required");
    }

    return isValid;
}

// Handling form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginResult = document.getElementById("loginResult");

    // Call the validation function
    const isValid = validateForm(username, password);

    // Update the UI based on the validation result
    if (isValid) {
        loginResult.textContent = "Login successful!";
        loginResult.style.color = "green";
    } else {
        loginResult.textContent = "Login failed. Please check your input.";
        loginResult.style.color = "red";
    }
});
