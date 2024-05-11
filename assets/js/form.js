const usernameInput = document.querySelector('#Username');
const titleInput = document.querySelector('#Title');
const submitButton = document.querySelector('#Submit');
const contentInput = document.querySelector('#Content');
const msgDiv = document.querySelector('#Message');


function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}



submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    if (username === '' || title === '' || content === '') {
        displayMessage('error', 'Please fill out all areas');
    } else {
        window.location.href = 'blog.html'
        localStorage.setItem('Username', username);
        localStorage.setItem('Title', title);
        localStorage.setItem('Content', content);
    }
});
