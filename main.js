const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';

const cancelImage = document.createElement('img');
cancelImage.className = 'x-menu';
cancelImage.src = 'images/Icon-Cancel.svg';
cancelImage.alt = 'cancel image';
menuDiv.appendChild(cancelImage);

const menuListItem = document.createElement('ul');
menuListItem.className = 'menu-list-item';

const portfolio = document.createElement('li');
portfolio.className = 'portfolio';
const portfolioLink = document.createElement('a');
portfolioLink.className = 'menu-list-items';
portfolioLink.href = '#portfolio';
portfolioLink.textContent = 'Portfolio';
portfolio.appendChild(portfolioLink);
menuListItem.appendChild(portfolio);

const about = document.createElement('li');
about.className = 'about';
const aboutLink = document.createElement('a');
aboutLink.className = 'menu-list-items';
aboutLink.href = '#about';
aboutLink.textContent = 'About';
about.appendChild(aboutLink);
menuListItem.appendChild(about);

const contact = document.createElement('li');
contact.className = 'contact';
const contactLink = document.createElement('a');
contactLink.className = 'menu-list-items';
contactLink.href = '#contact';
contactLink.textContent = 'Contact';
contact.appendChild(contactLink);
menuListItem.appendChild(contact);
menuDiv.appendChild(menuListItem);
body.appendChild(menuDiv);

const menuIcon = document.querySelector('.menu');
menuIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
  document.getElementById('header').style.filter = 'blur(0.3125rem)';
});

cancelImage.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.getElementById('header').style.filter = 'none';
});

document.querySelector('.menu-list-items')[0].addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.querySelector('.card');
  document.getElementById('header').style.filter = 'none';
});

document.querySelector('.menu-list-items')[1].addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.getElementById('header').style.filter = 'none';
});

document.querySelector('.menu-list-items')[2].addEventListener('click', () => {
  menuDiv.style.getElementById('header').style.filter = 'none';
});