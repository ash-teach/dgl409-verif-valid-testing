# Verification and validation testing
The code in this repository is a simple web-based simulation of a login system. The purpose of the repository is to demonstrate critical areas of consideration for both verification and validation testing in a stripped down and easy to understand project. The repository contains a `main` branch, which presents a naive example of  a simple login script; and a `testing` branch, which demonstrates improvements to code and adds a series of `console.assert` based tests. Familiarize yourself with the `main` branch first, and try the activities below before consulting the `testing` branch.

# How to use this repository

## Validation Testing: Usability Testing (15 min)
- Paired Activity:
    - Students pair up, where one acts as the user and the other as the tester.
    - The “user” will attempt to interact with the app without instruction, while the “tester” records any points of confusion or difficulty (e.g., unclear error messages, awkward form submission).
    - After 5 minutes of testing, switch roles.
- Group Debrief:
    - Come together and discuss findings. Were there usability issues? What changes could improve the user experience?
    - Discuss how validation testing ensures the product meets user needs, beyond functional correctness.
    - Write out a list of possible improvements to the login flow, based on each students' findings.

## Verification Testing: Unit Tests (15 min)
- Consider how the code (especially the JavaScript) could be rewritten in a more portable and scalable style. Consider the list of improvments identified above and the steps that might be necessary if to test the code via unit tests.
- Refactor the JavaScript the verification code so that it is wrapped in an atomic function (i.e. a function that has a single, clear use).
- Learn how to use the `console.assert` method by [reading the entry on the MDN](https://developer.mozilla.org/en-US/docs/Web/API/console/assert_static).
- Use `console.assert` to write a simple set of unit tests (in a `tests.js` file) verifying that usernames and passwords are correctly input to the form.

## Check progress against `testing` branch 
Checkout the `testing` branch if you get stuck, or if you'd just like to take a look at one viable solution.


