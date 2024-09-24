
function validateForm() {
    console.log("Enter name")

    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var fullNameError = document.getElementById("fullNameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    if(fullName.length < 3) {
        fullNameError.innerText = "Must be at least 3 characters long"
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
        emailError.innerText = "Please enter a valid email address";

        return false;
    }

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if(!passwordRegex.test(password)) {
        passwordError.innerText = "Password must be at least 8 characters long, with an uppercase letter, a number, and a special character";
        return false;
    }

    if(password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match"; 

        return false;
    }

    return true;
}