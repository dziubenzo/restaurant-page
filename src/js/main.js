import '../css/main.scss';
import { changeTab, removeTab } from './utilities';
import generatePageLayout from './page_layout';
import generateHomeContent from './home';
import generateMenuContent from './menu';

generatePageLayout();
generateHomeContent();

const homeBtn = document.querySelector('.home-tab');
const menuBtn = document.querySelector('.menu-tab');
const contactBtn = document.querySelector('.contact-tab');

menuBtn.addEventListener('click', () => {
  removeTab();
  generateMenuContent();
});
