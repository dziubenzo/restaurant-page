import { createH } from './utilities';

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
    },
    {
      name: 'Wodzionka',
      description: 'Soup with garlic and cubes of dried rye bread.',
      price: 9.85,
    },
    {
      name: 'Hauskyjza',
      description: 'Strongly flavored, home-made cheese with caraway seeds.',
      price: 7.25,
    },
    {
      name: 'Makówki',
      description:
        'Dessert based on finely ground poppy seeds, with raisins, almonds, candied citrus peels, honey, sugar, and pudding, and flavoured with rum.',
      price: 12.45,
    },
  ];
  const heading = createH(1, 'Menu');
  main.append(heading);
}

export default generateMenuContent;
