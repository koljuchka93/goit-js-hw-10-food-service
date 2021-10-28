import menuCardTempl from '/templates/menu-cards.hbs';
import menu from '/menu.json';


const body = document.querySelector('body')
const menuListRef = document.querySelector('.js-menu')
const labelRef = document.getElementById('theme-switch-toggle')
const theme = window.localStorage.getItem("theme")
const cardsMenu = createCardsMenu(menu)

menuListRef.insertAdjacentHTML('beforeend', cardsMenu)

function createCardsMenu(menu) {
    return menuCardTempl(menu);
}


function setTheme() {
    let themePage = localStorage.getItem('theme');
    if (themePage) {
        body.classList.add(themePage);
        if (themePage === 'light-theme') {
            labelRef.checked = false;
            body.classList.add('light-theme');
        } else {
            labelRef.checked = true;
        }
    }
    else {
            body.classList.add('light-theme')
            localStorage.setItem('theme', 'light-theme')
            console.log('light-theme')
        }
        
        }
    
labelRef.addEventListener('change', (e) => {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark-theme')
        body.classList.add('dark-theme');
        
    }
    else {
        localStorage.setItem('theme', 'light-theme')
        body.classList.replace('dark-theme', 'light-theme');
    }
        
    }
)
setTheme()