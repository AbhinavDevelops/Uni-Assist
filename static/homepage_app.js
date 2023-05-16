// Boolean function - returns true if the contact form is
function isFormFilled(contactForm) {
    // Iterate over each form field
    for (let i = 0; i < contactForm.elements.length; i++) {
        const field = contactForm.elements[i];
        // Check if the field is required and has no value
        if (field.required && !field.value) {
            return false;
        }
    }
    // All fields have values
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    const intObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("Intersecting")
                entry.target.classList.add("show");
            }
            else {
                entry.target.classList.remove("show");
            }
        })
    })

    const hiddenImages = document.querySelectorAll(".hidden");
    hiddenImages.forEach((element) => intObserver.observe(element))

    const contactSubmit = document.querySelector("#contact-submit-button");
    const contactDiv = document.querySelector("#contact-form-container");
    const nameInput = document.querySelector("#name");
    const contactForm = document.querySelector("#contact-form");
    const descriptionInput = document.querySelector("#description")

    const contactSubmitMessage = document.createElement("h4");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        let formIsFilled = true;


        if (!descriptionInput.value) {
            formIsFilled = false;
        }

        for (const inputField of contactForm.querySelectorAll("input")) {
            if (!inputField.value) {
                formIsFilled = false;
            }
        }
        if (!formIsFilled) {
            contactSubmitMessage.innerHTML = '<br>' + `Please fill out the form fully.` + '<br>';
            contactSubmitMessage.style.color = "#ff0000";
        }
        else if (emailRegex.test(document.getElementById('email').value) === false) {
            contactSubmitMessage.innerHTML = '<br>' + `Please enter a valid email.` + '<br>';
            contactSubmitMessage.style.color = "#ff0000";
        }
        else {
            contactSubmitMessage.innerHTML = '<br>' + `Thank you for reaching out, ${nameInput.value}!` + '<br>';
            contactSubmitMessage.style.color = "#0006ff";
            for (const inputField of contactForm.querySelectorAll("input")) {
                inputField.value = "";
            }
            descriptionInput.value = "";
        }
        contactForm.appendChild(contactSubmitMessage);
    })
})