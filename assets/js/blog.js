const userUsernameSpan = document.querySelector('#UserUsername');
const userTitleSpan = document.querySelector('#UserTitle');
const userContentSpan = document.querySelector('#UserContent');
const username = localStorage.getItem('Username');
const title = localStorage.getItem('Title');
const content = localStorage.getItem('Content')

userUsernameSpan.textContent = username;
userTitleSpan.textContent = title;
userContentSpan.textContent = content;
