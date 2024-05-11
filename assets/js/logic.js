// Access toggle switch HTML element
// const themeSwitcher = document.querySelector ('#theme-switcher');

const themeSwitcher = document.querySelector('#theme-switcher');
// const container = document.querySelector('.container');

let themeMode = 'dark';

const toggleTheme = () => {
    document.body.classList.toggle("light")
    document.body.classList.toggle("dark")
}

themeSwitcher.addEventListener("click", toggleTheme)

