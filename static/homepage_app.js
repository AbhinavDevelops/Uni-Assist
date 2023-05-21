// Boolean function - returns true if the contact form is filled
function formIsFilled(contactForm) {
    // Iterate over each form field
    for (let i = 0; i < contactForm.elements.length; i++) {
        const field = contactForm.elements[i];
        // Check if the field is required and has no value
        if (field.required && !field.value) {
            return false;
        }
    }
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    // Add observer so features are only animated into view when that section of the page is in the viewport
    const intObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else {
                entry.target.classList.remove("show");
            }
        })
    })
    const hiddenImages = document.querySelectorAll(".hidden");
    hiddenImages.forEach((element) => intObserver.observe(element))

    // Contact form implementation
    const contactSubmit = document.querySelector("#contact-submit-button");
    const contactDiv = document.querySelector("#contact-form-container");
    const nameInput = document.querySelector("#name");
    const contactForm = document.querySelector("#contact-form");
    const descriptionInput = document.querySelector("#description")
    const contactSubmitMessage = document.createElement("h4");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        // If form is not filled out fully, print corresponding error
        if (!formIsFilled(contactForm)) {
            contactSubmitMessage.innerHTML = '<br>' + `Please fill out the form fully.` + '<br>';
            contactSubmitMessage.style.color = "#ff0000";
        }
        // If email is invalid via regex test, print corresponding error
        else if (emailRegex.test(document.getElementById('email').value) === false) {
            contactSubmitMessage.innerHTML = '<br>' + `Please enter a valid email.` + '<br>';
            contactSubmitMessage.style.color = "#ff0000";
        }
        // If no errors encountered display confirmation message
        else {
            contactSubmitMessage.innerHTML = '<br>' + `Thank you for reaching out, ${nameInput.value}!` + '<br>';
            contactSubmitMessage.style.color = "#0006ff";
            for (const inputField of contactForm.querySelectorAll("input")) {
                inputField.value = "";
            }
            descriptionInput.value = "";
        }
        // Display response message
        contactForm.appendChild(contactSubmitMessage);
    })
})