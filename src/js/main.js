import '../css/main.scss';
import { removeTab, highlightTab } from './utilities';
import generatePageLayout from './page_layout';
import generateHomeContent from './home';
import generateMenuContent from './menu';
import generateContactContent from './contact';

generatePageLayout();
// generateHomeContent();
generateContactContent();
highlightTab();

const homeBtn = document.querySelector('.home-tab');
const menuBtn = document.querySelector('.menu-tab');
const contactBtn = document.querySelector('.contact-tab');

homeBtn.addEventListener('click', () => {
  removeTab();
  generateHomeContent();
  highlightTab();
});

menuBtn.addEventListener('click', () => {
  removeTab();
  generateMenuContent();
  highlightTab();
});

contactBtn.addEventListener('click', () => {
  removeTab();
  generateContactContent();
  highlightTab();
});
