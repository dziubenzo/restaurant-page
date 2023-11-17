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
  const attributionPara = createP(``, 'attribution');
  attributionPara.innerHTML =
    'Photo by <a href="https://unsplash.com/@nickkarvounis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nick Karvounis</a> on <a href="https://unsplash.com/photos/rectangular-beige-wooden-tables-and-chair-Ciqxn7FE4vE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
  const liHome = createLi('Home', 'home-tab');
  const liMenu = createLi('Menu', 'menu-tab');
  const liContact = createLi('Contact', 'contact-tab');

  // Add them to the DOM
  container.append(header, main, footer);

  header.append(nav);
  nav.append(ul);
  ul.append(liHome, liMenu, liContact);

  footer.append(p, a, attributionPara);
  a.append(img);
}

export default generatePageLayout;
