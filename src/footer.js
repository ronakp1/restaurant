import { createOwnElement } from './index';

const contentDiv = document.getElementById('content');

const createFooter = () => {
    const footerBar = createOwnElement('div', 'footerBar', null);
    contentDiv.appendChild(footerBar);
    const madeByParagraph = createOwnElement('p', null, null);
    madeByParagraph.innerHTML = "Made by Ronak Patel. Github: X";
    footerBar.appendChild(madeByParagraph);

}

export { createFooter }