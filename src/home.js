import { createOwnElement } from './index';

const contentDiv = document.getElementById('content');

const createHome = () => {
    const mainDiv = createOwnElement('div', 'home', null);
    contentDiv.appendChild(mainDiv);

    //const restaurantNameIT =  createOwnElement('h1', 'difflang', 'lapizza');
    //mainDiv.appendChild(restaurantNameIT);

    const restaurantName = createOwnElement('h1', 'restaurantName', 'Pizzeria');
    mainDiv.appendChild(restaurantName);

    const hrTag = createOwnElement('hr', 'hrsplit', null);
    mainDiv.appendChild(hrTag);
    const tagLine = createOwnElement('p1', null, 'The taste of Italy');
    mainDiv.appendChild(tagLine)

    const viewMenuButton = createOwnElement('button', 'viewButton', 'View Menu');
    mainDiv.appendChild(viewMenuButton);

}

export { createHome }