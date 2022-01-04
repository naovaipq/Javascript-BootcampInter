function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    btn.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"
    
    if(btn.classList.contains('dark-mode')) {
        h1.innerHTML = darkMode + " ON";
        btn.innerHTML = lightMode;
        return
    }

    h1.innerHTML = lightMode + " ON";
    btn.innerHTML = darkMode;
    
}

const darkModeClass = 'dark-mode'
const btn = document.getElementById('btn-color-selector');
const h1 = document.getElementById('title');
const body = document.getElementsByTagName('body')[0];

btn.addEventListener('click', changeMode);