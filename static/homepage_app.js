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

    contactSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if(isFormFilled(contactForm)) {
            const name = nameInput.value;
            const submissionConfirmation = document.createElement("h5");
            submissionConfirmation.classList.add("submission-confirm")
            submissionConfirmation.innerHTML= `Thank you for reaching out, <span>${name}!</span> We will get back to you by email within 3 business days!`;
            contactDiv.appendChild(submissionConfirmation);
        }
    })
})

