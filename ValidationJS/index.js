document.addEventListener("DOMContentLoaded", function () {

    var form = document.querySelector("form");

    var fullName = document.getElementById("fullName").value;
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;

    var fullNameError = document.getElementById("fullNameError");
    var emailFeedback = document.getElementById("emailFeedback");
    var passwordFeedback = document.getElementById("passwordFeedback");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var dobError = document.getElementById("dobError");

    form.addEventListener("submit", function (event) {
        var email = emailInput.value;
        var password = passwordInput.value;

        var isValid = true;

        if (fullName.length === 0) {
            fullNameError.innerText = "Name required";
            isValid = false;
        } else if (fullName.length < 3) {
            fullNameError.innerText = "Must be at least 3 characters long"
            isValid = false;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailFeedback.innerText = "Email required";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailFeedback.innerText = "Invalid email format"
            isValid = false;
        } 

        var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        
        if(password === "") {
            passwordFeedback.innerText = "password required";
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            passwordFeedback.innerText = "Password must be 8+ characters, including an uppercase letter, number, and special character.";
            isValid = false;
        }

        
        if (confirmPassword === "") {
            confirmPasswordError.innerText = "confirm your password";
            isValid = false;
        } else if (password !== confirmPassword) {
            confirmPasswordError.innerText = "Passwords do not match";
            isValid = false;
        }

        var dobDate = new Date(dob);
        var today = new Date();
        var age = today.getFullYear() - dobDate.getFullYear();
        if (age < 18) {
            dobError.innerText = "You must be at least 18 years old";
            isValid = false;
        }

        // prevent submission if any validation fails
        if(!isValid) {
            event.preventDefault();
        }
    });



    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // listening for email input in real time

    emailInput.addEventListener("input", function () {

        const emailValue = emailInput.value;
        if (emailValue === "") {
            emailFeedback.innerText = "";

        } else if (!emailRegex.test(emailValue)) {
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

    // listening for password input in real time
    passwordInput.addEventListener("input", function () {
        const passwordValue = passwordInput.value;

        if (passwordValue === "") {
            passwordFeedback.innerText = "";
        } else if (!passwordRegex.test(passwordValue)) {
            passwordFeedback.innerText = "Password must be 8+ characters, including an uppercase letter, number, and special character.";
            passwordFeedback.classList.remove('valid');
            passwordFeedback.classList.add('error');
        } else {
            passwordFeedback.innerText = "valid password";
            passwordFeedback.classList.remove('error');
            passwordFeedback.classList.add('valid');
        }

    });

});

