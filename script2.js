// Form validation function
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const formResponse = document.getElementById("form-response");

    // Basic validation
    if (name === "" || address === "" || email === "") {
        formResponse.style.color = "red";
        formResponse.innerHTML = "All fields are required.";
        return false;
    }

    // Email validation using regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        formResponse.style.color = "red";
        formResponse.innerHTML = "Please enter a valid email address.";
        return false;
    }

    // Display success message
    formResponse.style.color = "green";
    formResponse.innerHTML = "Thank you for contacting us! We'll get back to you soon.";

    // Clear form fields
    document.getElementById("contact-form").reset();

    return false; // Prevent actual form submission (for demo purposes)
}