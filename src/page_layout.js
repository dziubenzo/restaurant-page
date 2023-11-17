import { createLi, createP, createImg } from './utilities';
import logo from './assets/github-mark-white.svg';

// Create header (with content), main and footer (with content)
function generatePageLayout() {
  // Create elements
  const container = document.getElementById('container');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const p = createP('Copyright © dziubenzo');
  const img = createImg(logo, 'GitHub Logo');
  const a = document.createElement('a');
  a.href = 'https://github.com/dziubenzo/';
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  const liHome = createLi('Home', 'home');
  const liMenu = createLi('Menu', 'menu');
  const liContact = createLi('Contact', 'contact');
  // Add them to the DOM
  container.append(header);
  container.append(main);
  container.append(footer);

  header.append(nav);
  nav.append(ul);
  ul.append(liHome);
  ul.append(liMenu);
  ul.append(liContact);

  footer.append(p);
  footer.append(a);
  a.append(img);
}

export default generatePageLayout;
