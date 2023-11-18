import { createH } from './utilities';

// Create home tab content

function generateHomeContent() {
  const main = document.querySelector('main');
  main.classList.add('home');
  const heading = createH(1, 'Silesiana');
  main.append(heading);

}

export default generateHomeContent;
