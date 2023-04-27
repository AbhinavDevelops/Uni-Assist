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

    contactSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("triggered");
        const submissionConfirmation = document.createElement("h5");
        submissionConfirmation.classList.add("submission-confirm")
        const name = nameInput.value;
        submissionConfirmation.innerHTML= `Thank you for reaching out, <span>${name}!</span> We will get back to you by email within 3 business days!`;
        contactDiv.appendChild(submissionConfirmation);
    })
})

