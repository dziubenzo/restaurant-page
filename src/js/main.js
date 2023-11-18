import '../css/main.scss';
import { removeTab } from './utilities';
import generatePageLayout from './page_layout';
import generateHomeContent from './home';
import generateMenuContent from './menu';

generatePageLayout();
// generateHomeContent();
generateMenuContent();

const homeBtn = document.querySelector('.home-tab');
const menuBtn = document.querySelector('.menu-tab');
const contactBtn = document.querySelector('.contact-tab');

homeBtn.addEventListener('click', () => {
  removeTab();
  generateHomeContent();
});

menuBtn.addEventListener('click', () => {
  removeTab();
  generateMenuContent();
});

contactBtn.addEventListener('click', () => {
  removeTab();
});
