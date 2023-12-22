function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple email validation
    if (!isValidEmail(username)) {
        alert('Invalid email format');
        return;
    }

    // Password validation
    if (!isValidPassword(password)) {
        alert('Invalid password, Password should not contain any special character other than @.\nIt should contain atleast 1 UpperCase and 1 Number.');
        return;
    }

    // Successful login
    if (password === 'SmartServTest@123') {
        
        window.location.href = 'dashboard.html';
    } else {
        alert('Incorrect password');
    }
}

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function isValidPassword(password) {

    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]+$/;
    return passwordRegex.test(password);
}
