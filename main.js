const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const htmlContent = `<img class="x-menu" src="images/Icon-Cancel.svg" alt="cancel image">
<ul class="menu-list-item">
  <li class="portfolio"><a class="menu-list-items" href="#portfolio">Portfolio</a></li>
  <li class="about"><a class="menu-list-items" href="#about">About</a></li>
  <li class="contact"><a class="menu-list-items" href="#contact">Contact</a></li>
</ul>`;

menuDiv.innerHTML = htmlContent;
body.appendChild(menuDiv);
const cancelImage = menuDiv.querySelector('img');
cancelImage.className = 'x-menu';
cancelImage.src = 'images/Icon-Cancel.svg';
cancelImage.alt = 'cancel image';

const menuIcon = document.querySelector('.menu');
menuIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
  document.getElementById('header').style.filter = 'blur(0.3125rem)';
});

cancelImage.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.getElementById('header').style.filter = 'none';
});

const itemLists = document.querySelectorAll('.menu-list-items');
itemLists.forEach((item) => {
  item.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.getElementById('header').style.filter = 'none';
  });
});