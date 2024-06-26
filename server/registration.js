// REGISTRATION //
const passwordField = document.getElementById('passwordInput');
function submitUserRegistration() {
    const username = document.getElementById('usernameInput').value;
    const password = passwordField.value;
    const email = document.getElementById('emailInput').value;
    fetch('/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password, email: email }),
    })
    .then(response => response.json())
    .then (data => {
        if (data['redirect']) {
            window.location.href = data['redirect'];
        } else {
            alert('User already exists');
        }
    })
    .catch(error => {
        console.error('Error: ', error);
    })
}