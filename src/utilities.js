// Create li element with class and content
function createLi(className, content) {
  const li = document.createElement('li');
  li.classList.add(`${className}`);
  li.textContent = content;
  return li;
}

export { createLi };