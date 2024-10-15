//document (DOM) elements
const usernameInput = document.getElementById('username');
const saveButton = document.getElementById('save-btn');
const clearButton = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

//load saved on page load
window.onload = function () {
    const savedName = localStorage.getItem('name');
    if (savedName) {
        displayName.textContent = timedGreeting(savedName);
    }
};

//save to localStorage
function saveName() {
    const username = usernameInput.value;
    if (username) {
        localStorage.setItem('name', username);
        displayName.textContent = timedGreeting(username);
        usernameInput.value = ''; //clear after saving
    }
}

saveButton.addEventListener('click', saveName);

//clear from localStorage
clearButton.addEventListener('click', function() {
    localStorage.removeItem('name');
    displayName.textContent = '';
    usernameInput.value = '';
});

//greeting based on time of day
function timedGreeting(name) {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return `${greeting}, ${name}!`;
}

//enter key to trigger 'Save Name' button
usernameInput/addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        saveName(); //call the saveName function
    }
});