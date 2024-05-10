// Access toggle switch HTML element
// const themeSwitcher = document.querySelector ('#theme-switcher');

const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

let  themeMode = 'dark'; 

const toggleTheme = () => {
themeMode = themeMode === 'dark' ? 'light' : 'dark'
container.setAttribute("class", `container ${themeMode}`)
}

themeSwitcher.addEventListener("click", toggleTheme)

