
const signUp = document.getElementById('#signupForm');

signUp.onsubmit = async function(event) {
    
    event.preventDefault();
    
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    const response = await fetch('/signUp', {
    
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    });

    const data = await response.json();
    
    if (data.success) {

        alert('Signup Successful. You can now log in.');
        window.location.href = '/login.html';
    } 
    
    else {

        alert(data.message || 'Signup Failed');
    }
};
