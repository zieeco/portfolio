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
// menuDiv.appendChild(menuListItem);

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

