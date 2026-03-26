// Create main container
Math.div = document.createElement('div');
Math.div.id = 'turdymudrychjkahsjdla';
Math.div.innerHTML = `
  <div id="turdymudrychjkahsjdlaheader">
    <div class="header-left">
      <img src="https://pete-crzy-coder.github.io/assets.crazycoder/images/square-logo.jpg" alt="logo" note="I don't own any rights to the logo">
      <span class="title">craz4c0mput3r</span>
    </div>
    <div class="header-right">
      <span>BoredGames by craz4c0mput3r</span>
      <span>Ctrl + Y · Hide</span>
      <span>Ctrl + X · End</span>
      <span>Drag</span>
    </div>
  </div>

  <div id="content">
    <div class="controls">
      <button id="plus">+</button>

      <select name="sel" id="sel">
        <option value="60917032">Appel</option>
        <option value="10128407">Paper Minecraft</option>
        <option value="612229554">Platformer</option>
      </select>
    </div>

    <iframe
      src="https://scratch.mit.edu/projects/60917032/embed"
      allowtransparency="true"
      frameborder="0"
      scrolling="no"
      id="i"
      allowfullscreen>
    </iframe>
  </div>
`;

// Create styles
Math.style = document.createElement('style');
Math.style.innerHTML = `
#turdymudrychjkahsjdla {
  position: absolute;
  width: clamp(360px, 80%, 720px);
  left: 20%;
  top: 60px;

  background: #0e0f14;
  color: #e6e8f0;

  border-radius: 22px;
  padding: 18px;

  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  font-family: 'Bogrod', monospace;
}

@font-face {
  font-family: 'Bogrod'; /* Name the font whatever you like */
  src: url('https://pete-crzy-coder.github.io/assets.crazycoder/fonts/0xProtoNerdFont-Regular.woff2') format('woff2'), url('https://pete-crzy-coder.github.io/assets.crazycoder/fonts/0xProtoNerdFont-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap; /* Controls font loading behavior */
}


/* HEADER */
#turdymudrychjkahsjdlaheader {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 20px;
  margin-bottom: 18px;

  background: linear-gradient(135deg, #151821, #1b1f2b);
  border-radius: 18px 18px 10px 10px;

  cursor: grab;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-left img {
  height: 42px;
  border-radius: 10px;
}

.title {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.header-right {
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 0.75rem;
  color: #9aa0b3;
}

/* CONTENT */
#content {
  background: #151821;
  border-radius: 16px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* CONTROLS */
.controls {
  display: flex;
  gap: 12px;
  justify-content: center;
}

button#plus {
  width: 44px;
  height: 44px;

  background: #6c8cff;
  border: none;
  border-radius: 12px;

  color: white;
  font-size: 1.4rem;
  cursor: pointer;

  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

button#plus:hover {
  transform: scale(1.05);
  box-shadow: 0 0 18px rgba(108,140,255,0.6);
}

/* SELECT */
select {
  background: #0e0f14;
  color: #e6e8f0;

  border: 1px solid #2a2f40;
  border-radius: 12px;

  padding: 10px 14px;
  font-size: 0.95rem;
}

select:focus {
  outline: none;
  border-color: #6c8cff;
  box-shadow: 0 0 0 2px rgba(108,140,255,0.25);
}

/* IFRAME */
iframe {
  width: 100%;
  height: 50vh;
  border-radius: 14px;
  background: black;
}

.hide {
  display: none;
}
`;

// Attach elements
document.body.appendChild(Math.div);
document.head.appendChild(Math.style);

document.getElementById('sel').innerHTML = localStorage.projects || document.getElementById('sel').innerHTML;

// Enable dragging
dragElement(document.getElementById('turdymudrychjkahsjdla'));

// Keyboard shortcut
document.addEventListener('keydown', hide);

// Drag logic
function dragElement(element) {
  let deltaX = 0,
    deltaY = 0,
    mouseX = 0,
    mouseY = 0;

  let header = document.getElementById(element.id + 'header');

  (header || element).onmousedown = function (e) {
    e.preventDefault();

    mouseX = e.clientX;
    mouseY = e.clientY;

    document.onmouseup = stopDrag;
    document.onmousemove = drag;
  };

  function drag(e) {
    e.preventDefault();

    deltaX = mouseX - e.clientX;
    deltaY = mouseY - e.clientY;

    mouseX = e.clientX;
    mouseY = e.clientY;

    element.style.top = (element.offsetTop - deltaY) + 'px';
    element.style.left = (element.offsetLeft - deltaX) + 'px';
  }

  function stopDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Hide/show with Ctrl + Y
function hide(e) {
  let turdymudrychjkahsjdla = document.getElementById('turdymudrychjkahsjdla');

  if (e.key === 'y' && e.ctrlKey && turdymudrychjkahsjdla.className !== 'hide') {
    turdymudrychjkahsjdla.className = 'hide';
  } else if (e.key === 'y' && e.ctrlKey) {
    turdymudrychjkahsjdla.className = '';
  }
}

document.getElementById('sel').addEventListener('change', () => {
  localStorage.projects = document.getElementById('sel').innerHTML;
})

// Change iframe project
function change() {
  let select = document.getElementById('sel');
  let iframe = document.getElementById('i');

  iframe.src = `https://scratch.mit.edu/projects/${select.value}/embed`;
}

// Events
document.getElementById('sel').addEventListener('change', change);

document.getElementById('plus').addEventListener('click', () => {
  let select = document.getElementById('sel');

  select.innerHTML += `
    <option value="${prompt('Enter the project id')}">
      ${prompt('Enter the label for the project')}
    </option>
  `;

  change();
});

// Remove with Ctrl + X
document.addEventListener('keydown', (e) => {
  if (e.key === 'x' && e.ctrlKey) {
    let turdymudrychjkahsjdla = document.getElementById('turdymudrychjkahsjdla');
    turdymudrychjkahsjdla.remove();
    Math.style.remove();
  }
});
