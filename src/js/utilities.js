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
  p.textContent = content;
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

export { createLi, createP, createImg, createDiv };
