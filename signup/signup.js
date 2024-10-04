document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageElement = document.getElementById('message');

    if (password !== confirmPassword) {
        messageElement.textContent = "Passwords do not match!";
    } else {
        messageElement.textContent = "";
        // Further processing like sending data to the server can be done here.
        alert('Sign-up successful!');
        // You can reset the form or redirect the user to another page
        // document.getElementById('signupForm').reset();
    }
});
