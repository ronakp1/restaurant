import {createOwnElement} from './index';

const contentDiv = document.getElementById('content');

const createContact = () => {
    const contactDiv =  createOwnElement('div', 'contact', null);
    contentDiv.appendChild(contactDiv);
    
    const contactPhone =  createOwnElement('p', 'null', null);
    contactPhone.innerHTML = "Phone Number: 07192 102 688"
    contactDiv.appendChild(contactPhone);

    const contactUsAddress =  createOwnElement('p', 'null', null);
    contactUsAddress.innerHTML = "Address: 123 Smorc Lane, London, UK"
    contactDiv.appendChild(contactUsAddress);

    const mapsImage = document.createElement('img');
    mapsImage.src = `../src/images/map-image.png`;
    contactDiv.appendChild(mapsImage);
}

export {createContact}