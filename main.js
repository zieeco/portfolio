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

const myProjects = [

  {
    name: 'Tonic',
    description: `A daily selection of privately'personalized reads; no accounts or sign-ups
    required.`,
    featuredImage: './images/SnapshootDesktopPortfolioA.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: 'https://zieeco.github.io/portfolio/',
    sourceCode: 'https://github.com/zieeco/portfolio',
  },

  {
    name: 'Multi-Post Stories',
    description: `Experimental content creation feature that allows users to add
    to an existing story over the course of a day without
    spamming their friends.`,
    featuredImage: './images/SnapshootDesktopPortfolioB.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: 'https://zieeco.github.io/portfolio/',
    sourceCode: 'https://github.com/zieeco/portfolio',
  },

  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR',
    featuredImage: './images/SnapshootDesktopPortfolioC.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: 'https://zieeco.github.io/portfolio/',
    sourceCode: 'https://github.com/zieeco/portfolio',
  },

  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImage: './images/SnapshootDesktopPortfolioD.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: 'https://zieeco.github.io/portfolio/',
    sourceCode: 'https://github.com/zieeco/portfolio',
  },

];

const seeProjectBtn = document.querySelectorAll('.see-project');
seeProjectBtn.forEach((item, i) => {
  item.addEventListener('click', () => {
    const project = myProjects[i];
    const modalMenu = document.querySelector('.modal-container');
    const projectTitle = modalMenu.querySelector('.modal-card-title');
    projectTitle.textContent = project.name;
    const projectDesc = modalMenu.querySelectorAll('.modal-primary-text');
    const [mobileDesc, desktopDesc] = projectDesc;
    mobileDesc.textContent = project.description;
    desktopDesc.textContent = project.description;
    projectDesc.textContent = project.description;
    const projectMobileImage = modalMenu.querySelector('.mobile-image');
    projectMobileImage.src = project.featuredImage;
    const projectDesktopImage = modalMenu.querySelector('.desktop-image');
    projectDesktopImage.src = project.featuredImage;
    const liveLink = document.querySelector('.live-link');
    liveLink.href = project.liveVersion;
    const liveSourceCode = document.querySelector('.source-code');
    liveSourceCode.href = project.sourceCode;
    const allTech = document.querySelectorAll('.modal-tag');
    allTech.forEach((item, i) => {
      item.textContent = project.technology[i];
    });

    modalMenu.style.display = 'flex';
  });
});

const modalCancelBtn = document.querySelector('.modal-cancel-image');
modalCancelBtn.addEventListener('click', () => {
  const removeModalContainer = document.querySelector('.modal-container');
  removeModalContainer.style.display = 'none';
});

const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  if (emailInput.value.toLowerCase() !== emailInput.value) {
    e.preventDefault();
    errorMessage.style.cssText = 'color: black; background: white; border-radius: 1px solid black';
    errorMessage.textContent = 'Please, use lowercase letters for your email address';
  } else {
    errorMessage.style.display = 'none';
  }
});
