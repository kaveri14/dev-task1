document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here, you can implement your logic for storing the username and password
        // For this basic example, we'll just log them to the console
        console.log('Username:', username);
        console.log('Password:', password);

        // You can redirect the user to another page or perform other actions here
    });
});
