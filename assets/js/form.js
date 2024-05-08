const usernameInput = document.querySelector('#Username');
const titleInput = document.querySelector('#Title');
const submitButton = document.querySelector('#Submit');
const contentInput = document.querySelector('#Content');

renderLastRegistered();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
    const Username = localStorage.getItem('Username');
    const Title = localStorage.getItem('Title');
    const Content = localStorage.getItem('Content')

    if (!Username || !Title || !Content ) {
    return;
    }

    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const usernameInput = usernameInput.value;
    const titleInput = titleInput.value;
    const contentInput = contentInput.value;

    if (Username || Title || Content === '') {
    displayMessage('error', 'Please fill out all areas');
    } else {
    window.location.href = 'blog.html'

    localStorage.setItem('Username', Username);
    localStorage.setItem('Title', Title);
    localStorage.setItem('Content', Content);
    renderLastRegistered();
    }
});