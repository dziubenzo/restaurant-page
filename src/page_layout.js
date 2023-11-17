import { createLi } from './utilities'

// Create header (with content), main and footer
function generatePageLayout() {
  // Create elements
  const container = document.getElementById('container');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const liHome = createLi('home', 'Home');
  const liMenu = createLi('menu', 'Menu');
  const liContact = createLi('contact', 'Contact');
  // Add them to the DOM
  container.append(header);
  container.append(main);
  container.append(footer);

  header.append(nav);
  nav.append(ul);
  ul.append(liHome);
  ul.append(liMenu);
  ul.append(liContact);
}

export default generatePageLayout;
