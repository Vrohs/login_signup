
const login = document.getElementById('#loginForm')


login.onsubmit = async function(event) {
    
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    });

    const data = await response.json();
    if (data.success) {
        alert('Login Successful');
       
    } else {
        alert('Login Failed');
    }
};
