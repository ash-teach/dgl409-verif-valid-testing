// Unit tests in vanilla JavaScript
function runTests() {
    console.log("Running tests...");

    // Test 1: Both username and password are valid
    let result = validateForm("user123", "password123");
    console.assert(result === true, "Test 1 Failed: Valid username and password should pass");

    // Test 2: Username is empty
    result = validateForm("", "password123");
    console.assert(result === false, "Test 2 Failed: Empty username should fail");

    // Test 3: Password is empty
    result = validateForm("user123", "");
    console.assert(result === false, "Test 3 Failed: Empty password should fail");

    // Test 4: Both username and password are empty
    result = validateForm("", "");
    console.assert(result === false, "Test 4 Failed: Empty username and password should fail");

    console.log("All tests completed.");
}

// Run the tests when the page loads
window.onload = runTests;