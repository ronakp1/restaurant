import { createOwnElement } from './index';

const contentDiv = document.getElementById('content');

const createMenu = () => {
    const menuContainer = createOwnElement('div', 'menu-container', null);
    contentDiv.appendChild(menuContainer);

   // const menuOverlay = createOwnElement('div', 'menu-overlay', null);
    //menuContainer.appendChild(menuOverlay);

    const actualMenu = createOwnElement('div', 'menu', null);
    menuContainer.appendChild(actualMenu);

    const marg = menuItemFactory('Margherita', 'Tomato sauce and mozzarella cheese with garlic herbs');
    actualMenu.appendChild(marg);

    const pepperoni = menuItemFactory('Pepperoni', 'Our tomato sauce with mozzarella, a double helping of spicy pepperoni and extra mozzarella');
    actualMenu.appendChild(pepperoni);

    const mushroom = menuItemFactory('Mushroom', 'Tomatoes, onions, green peppers, sweetcorn and chestnut mushrooms');
    actualMenu.appendChild(mushroom);

    const mixed = menuItemFactory('Extra-Cheese-Pepperoni', 'Pepperoni, Italian style sausage, ham, chestnut mushrooms, green peppers, onions and black olives');
    actualMenu.appendChild(mixed);

}
const menuItemFactory = (nameOfFood, description) => {
    const menuItem = createOwnElement('div', 'menu-item', null);
    console.log(nameOfFood)
    console.log(description)

    const foodImage = document.createElement('img');
    foodImage.src = `../src/images/${nameOfFood}.png`;
    menuItem.appendChild(foodImage);

    const itemDescription = createOwnElement('div', 'item-description', null);
    menuItem.appendChild(itemDescription);

    const foodName = document.createElement('h1');
    const foodDescription = document.createElement('p');

    foodName.innerHTML = nameOfFood;
    foodDescription.innerHTML = description;
    itemDescription.appendChild(foodName);
    itemDescription.appendChild(foodDescription);
    
    return menuItem;
}
export { createMenu }