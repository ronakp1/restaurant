import { createHome } from './home';
import { createNavBar } from './navbar';
import { createMenu } from './menu';
import { createContact } from './contact';
import { createFooter } from './footer';

const createOwnElement = (type, className, content) => {
    const element = document.createElement(type);
    if (className !== null) element.classList.add(className);
    if (content !== null) element.innerHTML = content;
    return element;
}

const onLoadPage = () => {
    createNavBar();
    createHome();
    createFooter();
}
document.addEventListener('DOMContentLoaded', () => {
    onLoadPage();
    const allTabsa = document.querySelectorAll('ul > li')
    const allTabs = [...allTabsa];

    allTabs.forEach(tab => {
        tab.addEventListener('click', tabSwitching)
    })

    const viewMenuBtn = document.querySelector('.viewButton');
    console.log(viewMenuBtn);
    viewMenuBtn.addEventListener('click', tabSwitching);
})


const tabSwitching = (e) => {
    const contentDiv = document.getElementById('content');
    contentDiv.removeChild(contentDiv.lastElementChild);
    contentDiv.removeChild(contentDiv.lastElementChild);

    if (e.target.innerHTML === "Home") {
        createHome();
        createFooter();
    }
    else if (e.target.innerHTML === "Menu" || e.target.innerHTML === "View Menu") {
        createMenu();
        createFooter();
    }
    else if (e.target.innerHTML === "Contact") {
        createContact();
        createFooter();
    }
}



export { createOwnElement }