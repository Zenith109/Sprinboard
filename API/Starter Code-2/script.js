// Task 1: Analyze the API
const apiUrl = 'https://reqres.in/api';

// Task 2: Infiltrate the System
const loginForm = document.getElementById('login-form');
const systemMessage = document.getElementById('system-message');
let token = null;

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;

    try {
        const response = await axios.post(`${apiUrl}/login`, {
            email: 'eve.holt@reqres.in', // Correct email from API docs
            password: 'cityslicka' // Correct password from API docs
        });
        token = response.data.token;
        systemMessage.textContent = `Token: ${token}`;
    } catch (error) {
        systemMessage.textContent = `Error: ${error.response.data.error}`;
    }
});

// Task 3: Sneak Away from the System
const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', () => {
    token = null;
    systemMessage.textContent = 'Logged out successfully.';
});

// Task 4: Gather Intelligence
const intelligenceForm = document.getElementById('intelligence-form');
const hackersContainer = document.getElementById('hackers');

intelligenceForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const pageNumber = document.getElementById('page-number-input').value;

    if (!token) {
        systemMessage.textContent = 'You must be logged in to gather intelligence.';
        return;
    }

    try {
        const response = await axios.get(`${apiUrl}/users`, {
            params: {
                page: pageNumber,
                delay: 2 // Adding delay parameter
            }
        });
        const hackers = response.data.data;
        hackersContainer.innerHTML = ''; // Clear previous results

        hackers.forEach(hacker => {
            const hackerDiv = document.createElement('div');
            hackerDiv.className = 'hacker';
            hackerDiv.innerHTML = `
                <img src="${hacker.avatar}" alt="${hacker.first_name} ${hacker.last_name}">
                <p>Name: ${hacker.first_name} ${hacker.last_name}</p>
                <p>Email: ${hacker.email}</p>
            `;
            hackersContainer.appendChild(hackerDiv);
        });
    } catch (error) {
        systemMessage.textContent = `Error: ${error.response.data.error}`;
    }
});