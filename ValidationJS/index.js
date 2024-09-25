
function validateForm() {

    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email");
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;

    var fullNameError = document.getElementById("fullNameError");
    var emailFeedback = document.getElementById("emailFeedback");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var dobError = document.getElementById("dobError");

    if(fullName.length < 3) {
        fullNameError.innerText = "Must be at least 3 characters long"
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // listening for email input in real time
    email.addEventListener("input", function() {

        const emailValue = email.value;
        if(emailValue === "") {
            emailFeedback.innerText = "";

        } else if(!emailRegex.test(emailValue)) {
            emailFeedback.innerText = "Invalid email format";
            emailFeedback.classList.remove('valid');
            emailFeedback.classList.add('error');
        } else {
            emailFeedback.innerText = "valid email";
            emailFeedback.classList.remove('error');
            emailFeedback.classList.add('valid');
        }

    });


    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if(!passwordRegex.test(password)) {
        passwordError.innerText = "Password must be at least 8 characters long, with an uppercase letter, a number, and a special character";
        return false;
    }

    if(password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match"; 

        return false;
    }

    var dobDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    if(age < 18) {
        dobError.innerText = "You must be at least 18 years old";
        return false;
    }

    form.reset();

    return true;
}