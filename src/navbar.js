import { createOwnElement } from './index';

const contentDiv = document.getElementById('content');
const createNavBar = () => {

    const navBar = createOwnElement('div', 'navBar', null);
    contentDiv.appendChild(navBar);

    const list = createOwnElement('ul', null, null);
    navBar.appendChild(list);

    const navItems = ["Home", "Menu", "Contact"];

    navItems.forEach(item => {
        list.appendChild(createOwnElement('li', null, item));
    })
}

export { createNavBar }