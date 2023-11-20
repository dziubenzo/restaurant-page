import { createH, createDiv, createP, createImg } from './utilities';
import jupiter from '../assets/jupiter.png';

// Create contact tab content

function generateContactContent() {
  const main = document.querySelector('main');
  main.classList.add('contact');
  const heading = createH(1, 'Contact');
  const contactDiv = createDiv('contact-content');
  main.append(heading, contactDiv);
  const p = createP('You can find us there:');
  const img = createImg(jupiter, 'Our location: Jupiter');
  contactDiv.append(p, img);
  return;
}

export default generateContactContent;
