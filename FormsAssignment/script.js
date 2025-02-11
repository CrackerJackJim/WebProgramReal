document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Get form fields
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    // Get error message elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let ageError = document.getElementById("ageError");
    let successMessage = document.getElementById("successMessage");

    name.classList.add("input-error");
    email.classList.add("input-error");
    age.classList.add("input-error");

    // Clear previous error messages and remove error classes
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
    successMessage.textContent = "";

    name.classList.remove("input-error");
    email.classList.remove("input-error");
    age.classList.remove("input-error");

    // Validate name
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        name.classList.add("input-error");
        isValid = false;
    }

    // Validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email address.";
        email.classList.add("input-error");
        isValid = false;
    }

    // Validate age
    let ageValue = parseInt(age.value);
    if (isNaN(ageValue) || ageValue < 18 || ageValue > 100) {
        ageError.textContent = "Age must be between 18 and 100.";
        age.classList.add("input-error");
        isValid = false;
    }

    // If form is valid, show success message and clear inputs
    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
        successMessage.style.color = "green";

        // Reset form fields
        name.value = "";
        email.value = "";
        age.value = "";
    }
});
