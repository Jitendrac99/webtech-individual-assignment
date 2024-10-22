document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        // Clear previous error messages
        clearErrors();

        // Simple validation check
        let hasError = false;
        if (usernameInput.value.trim() === '') {
            displayError(usernameInput, 'Username is required');
            hasError = true;
        }
        if (passwordInput.value.trim() === '') {
            displayError(passwordInput, 'Password is required');
            hasError = true;
        }

        // Prevent form submission if there are validation errors
        if (hasError) {
            event.preventDefault();
        }
    });

    function displayError(inputElement, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.style.color = 'red';
        errorElement.textContent = message;
        inputElement.parentNode.appendChild(errorElement);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(function(error) {
            error.remove();
        });
    }
});
