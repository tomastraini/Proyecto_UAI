const form = document.getElementById("subscription-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");

const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorComments = document.getElementById("error-comments");

// Validaciones en "blur"
nameInput.addEventListener("blur", () => {
    if (nameInput.value.trim() === "") {
        errorName.style.display = "block";
    }
});

emailInput.addEventListener("blur", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        errorEmail.style.display = "block";
    }
});

commentsInput.addEventListener("blur", () => {
    if (commentsInput.value.trim() === "") {
        errorComments.style.display = "block";
    }
});

// Ocultar errores en "focus"
[nameInput, emailInput, commentsInput].forEach(input => {
    input.addEventListener("focus", () => {
        const errorSpan = document.getElementById("error-" + input.id);
        errorSpan.style.display = "none";
    });
});

// Mensaje al enviar
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    if (nameInput.value.trim() === "") {
        errorName.style.display = "block";
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        errorEmail.style.display = "block";
        valid = false;
    }

    if (commentsInput.value.trim() === "") {
        errorComments.style.display = "block";
        valid = false;
    }

    if (valid) {
        alert("¡Gracias por suscribirte!");
        form.reset();
    }
});

// Editar título en tiempo real
const formTitle = document.getElementById("form-title");
formTitle.addEventListener("input", () => {
    console.log("Título actualizado:", formTitle.innerText);
});