document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication check (replace with secure logic in production)
    if (username === 'admin' && password === 'password123') {
        // Redirect to admin vocab management page on successful login
        window.location.href = 'admin_vocab_management.html';
    } else {
        document.getElementById('login-feedback').textContent = 'Incorrect username or password';
    }
});
