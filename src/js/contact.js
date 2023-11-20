import { createH, createDiv, createP, createImg, createBtn } from './utilities';
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
  const btn1 = createBtn(
    'Book Table',
    'button',
    'book-table-btn',
    'book-table-btn'
  );
  const btn2 = createBtn(
    'Book Shuttle to Jupiter',
    'button',
    'book-shuttle-btn',
    'book-shuttle-btn'
  );
  contactDiv.append(p, img, btn1, btn2);
  return;
}

export default generateContactContent;
