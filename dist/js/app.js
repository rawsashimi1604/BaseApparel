function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const email = document.querySelector("#email");
const button = document.querySelector("#button");
const emailDiv = email.parentElement;


const error = document.querySelector("#error-div");
const errorImg = document.querySelector("#error-img");

email.addEventListener('click', () => {
    email.innerText = "";
});

button.addEventListener('click', () => {
    let emailInput = email.innerText;

    if (!validateEmail(emailInput)) {
        error.classList.remove("none");
        errorImg.classList.remove("none");
        emailDiv.classList.add("error-border");
    } else {
        error.classList.add("none");
        errorImg.classList.add("none");
        emailDiv.classList.remove("error-border");
    }
});
