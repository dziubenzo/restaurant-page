import { createH, createDiv, createImg, createP } from './utilities';
import kluski from '../assets/kluski.jpg';
import wodzionka from '../assets/wodzionka.webp';
import hauskyjza from '../assets/hauskyjza.jpg';
import makowki from '../assets/makowki.webp';

// Create menu tab content
function generateMenuContent() {
  const main = document.querySelector('main');
  main.classList.add('menu');
  const menuItems = [
    {
      name: 'Kluski śląskie, rolada i modra kapusta',
      description:
        'Round dumplings served with gravy, best-quality beef-meat roll (stuffed with pickled vegetable, ham, and good amount of seasoning) and red cabbage (with fried bacon, fresh onion and allspice).',
      price: 17.75,
      image: kluski,
    },
    {
      name: 'Wodzionka',
      description: 'Soup with garlic and cubes of dried rye bread.',
      price: 9.85,
      image: wodzionka,
    },
    {
      name: 'Hauskyjza',
      description: 'Strongly flavoured, home-made cheese with caraway seeds.',
      price: 7.25,
      image: hauskyjza,
    },
    {
      name: 'Makówki',
      description:
        'Dessert based on finely ground poppy seeds, with raisins, almonds, candied citrus peels, honey, sugar, and pudding, and flavoured with rum.',
      price: 10.45,
      image: makowki,
    },
  ];
  const heading = createH(1, 'Menu');
  const menu = createDiv('menu-items');
  main.append(heading, menu);
  menuItems.forEach((item, index) => {
    const itemDiv = createDiv(`item-${index + 1}`);
    menu.append(itemDiv);
    const name = createP(item.name, 'name');
    const description = createP(item.description, 'description')
    const price = createP(`${item.price} Jupitos`, 'price')
    const img = createImg(item.image, item.name);
    itemDiv.append(name, img, description, price);
  });
}

export default generateMenuContent;
