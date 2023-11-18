// Create li element with class and content
function createLi(content, className) {
  const li = document.createElement('li');
  li.classList.add(`${className}`);
  li.textContent = content;
  return li;
}

// Create p element with content and optional class
function createP(content, className = '') {
  const p = document.createElement('p');
  p.innerHTML = content;
  if (className) {
    p.classList.add(`${className}`);
  }
  return p;
}

// Create img element with source and alt
function createImg(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

// Create div element with optional class
function createDiv(className = '') {
  const div = document.createElement('div');
  if (className) {
    div.classList.add(`${className}`);
  }
  return div;
}

// Create h(1-6) element with optional class
function createH(level, content, className = '') {
  const h = document.createElement(`h${level}`);
  h.textContent = content;
  if (className) {
    h.classList.add(`${className}`);
  }
  return h;
}

// Remove current tab, create a new one and add it to the DOM
function removeTab() {
  const main = document.querySelector('main');
  const container = document.getElementById('container');
  const footer = document.querySelector('footer');
  main.remove();
  const newMain = document.createElement('main');
  container.insertBefore(newMain, footer);
}

export { createLi, createP, createImg, createDiv, createH, removeTab };
