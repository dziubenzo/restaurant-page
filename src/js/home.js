import { createP, createH } from './utilities';

// Create home tab content

function generateHomeContent() {
  const main = document.querySelector('main');
  main.classList.add('home');
  const heading = createH(1, 'Silesiana');
  const p1 = createP('The finest <span>Silesian cuisine</span>', 'paragraph-top-1');
  const p2 = createP('Right <span>at your fingertips</span>', 'paragraph-top-2')
  const p3 = createP('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officia. At animi excepturi tenetur fugiat, reprehenderit eius ea minima possimus quisquam esse, distinctio quia quidem explicabo dolorum maxime, if you read me, congrats. Earum quibusdam quis aspernatur consequatur! Hic, iure. Recusandae impedit tenetur consectetur repellat id sit odio earum error soluta praesentium.', 'description');
  const p4 = createP('Founded in 2084 on Jupiter', 'paragraph-bottom');
  main.append(heading, p1, p2, p3, p4);

}

export default generateHomeContent;
