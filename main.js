// Create mobileMenu 📝
const mobileMenu = () => {
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
};
mobileMenu();

// show mobileMenu by clicking the harmburge icon 🍔
const menuDiv = document.querySelector('.menu-content');
document.querySelector('img.menu').addEventListener('click', () => {
  menuDiv.style.display = 'flex';
  document.getElementById('header').style.filter = 'blur(0.3125rem)';
});

// Close mobileMenu by clicking the mobileMenu❌ icon
menuDiv.querySelector('img.x-menu').addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.getElementById('header').style.filter = 'none';
});

// Close mobileMenu on clicking the mobileMenuListItems
const itemLists = menuDiv.querySelectorAll('.menu-list-items');
itemLists.forEach((item) => {
  item.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.getElementById('header').style.filter = 'none';
  });
});

// Project Template 📋
const myProjects = [
  {
    name: 'Quick Budget',
    badges: [{
      nameX: 'CANOPY', name1: 'FACEBOOK', image: './images/Counter.svg', stackX: 'Back End Dev', stack1: 'Full Stack Dev', date: 2015,
    }],
    description: 'This app is a simple budget app in which a user can add as many items to their list budget, including things to buy and the amount they cost, and it tracks the items that are yet purchased.',
    featuredImage: './images/budget.png',
    technology: ['html', 'Ruby on rails', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: 'https://shrouded-castle-53270.herokuapp.com/',
    sourceCode: 'https://github.com/zieeco/budget-app/tree/development',
  },

  {
    name: 'BookStore',
    badges: [{
      name: 'FACEBOOK', image: './images/Counter.svg', stack: 'Front End Dev', date: 2015,
    }],
    description:
      'An online book store application built with react and redux. A user can add, and remove a different number of books in different categories from their collection.',
    featuredImage: './images/bookstore.png',
    technology: ['html', 'Ruby on rails', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: 'https://festive-golick-7e4d21.netlify.app/',
    sourceCode: 'https://github.com/zieeco/book-store-app',
  },

  {
    name: 'ToDo List',
    badges: [{
      name1: 'TODO List', image: './images/Counter.svg', stack1: 'Front End Dev', date: 2020,
    }],
    description: 'A To-Do-List App helps users to get their task cordinated and organised. no accounts or sign-ups required.',
    featuredImage: './images/todo-desktop.png',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: 'https://zieeco.github.io/To-Do-List/',
    sourceCode: 'https://github.com/zieeco/To-Do-List',
  },

  {
    name: 'The NAMM Show',
    badges: [{
      name: 'NAMM', image: './images/Counter.svg', stack: 'Front End Dev', date: 2020,
    }],
    description:
      'The National Association of Music Merchants is an annual event in the United States, which describes it as the world’s largest trade-only event for the music products, etc',
    featuredImage: './images/namm.png',
    technology: ['html', 'Ruby on rails', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: 'https://zieeco.github.io/html-css-js-capstone/',
    sourceCode: 'https://github.com/zieeco/html-css-js-capstone',
  },
];

// Works section dynamic layout 🧑‍💼
const populateProjects = (myProjects) => {
  const workSection = document.querySelector('.works');
  workSection.innerHTML = '';
  let display = '';
  myProjects.forEach((project, index) => {
    display += `
      <ul class="project-works ${index === 1 || index === 3 ? 'row-reverse-desktop' : ''}">
        <li class="project-image-container">
          <img src="${project.featuredImage}" alt="Tonic" class="mobile-image">
          <img src="${project.featuredImage}" alt="Tonic" class="desktop-image">
        </li>
        <li class="project-body-block">
          <h2 class="project-title">${project.name}</h2>
          <div class="project-badge">${project.badges.map((badge) => `
          <span class="project-info-items canopy">${badge.name1}</span>
          <span class="project-info-items canopy hide-for-desktop">${badge.nameX}</span>
            <span class="project-info-items canopy hide-for-mobile">${badge.name2}</span>
            <img src="./images/Counter.svg" alt="counter">
            <span class="project-info-items dsk-fw">${badge.stack1}</span>
            <span class="project-info-items hide-for-desktop">${badge.stackX}</span>
            <span class="project-info-items hide-for-mobile dsk-fw">${badge.stack2}</span>
            <img src="./images/Counter.svg" alt="counter">
            <span class="project-info-items">${badge.date1}</span>
            <span class="project-info-items hide-for-desktop">2015</span>
            <span class="project-info-items hide-for-mobile dsk-fw">2018</span>`)}</div>
          <p class="project-primary-text hide-for-desktop">${project.description}</p>
          <p class="project-primary-text hide-for-mobile">${project.description}</p>
        <ul class="tags">${index === 0 ? project.technology.slice(0, 3).map((tech) => `<li class="tag">${tech}</li>`).join('') : project.technology.slice(0, 4).map((tech, index) => `<li class="tag ${index === 1 ? 'hide-for-mobile' : ''}">${tech}</li>`).join('')}</ul>
          <button class="button see-project" type="button">See Project</button>
        </li>
      </ul>`;
  });
  workSection.innerHTML = display;
};
populateProjects(myProjects);

// Modal dynamic layout 🅱️ Ⓜ️
const createModal = () => {
  const modal = document.querySelector('.modal-container');
  modal.innerHTML += ` <div class="modal-card">
        <div class="modal-header-and-img">
          <h2 class="modal-card-title"></h2>
          <img class="modal-cancel-image" src="./images/Icon-Cancel.svg" alt="cancel image">
        </div>
        <div class="modal-badge">
          <span class="modal-badge-items modal-canopy">CANOPY</span>
          <img src="./images/Counter.svg" alt="counter">
          <span class="modal-badge-items dsk-fw">Back End Dev</span>
          <img src="./images/Counter.svg" alt="counter">
          <span class="modal-badge-items">2015</span>
        </div>
        <div class="modal-image-container">
          <img src="" alt="Tonic" class="mobile-image">
          <img src="" alt="Tonic" class="desktop-image">
        </div>
        <div class="modal-body-block modal-margin">
          <div class="dsk-wrap">
            <p class="modal-primary-text hide-for-desktop"></p>
            <p class="modal-primary-text hide-for-mobile"></p>
          </div>
          <div class="wrap-2">
            <div class="wrap-3">
              <ul class="modal-tags"></ul>
              <div class="modal-btn-container">
                <a href="" target="_blank" rel="noopener noreferrer" class="modal-btn live-link">see live<img
                    src="./images/Icon-Export.svg" alt=""></a>
                <a href="" target="_blank" rel="noopener noreferrer" class="modal-btn source-code">see source<img
                    src="./images/Vector.svg" alt=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
};
createModal();

// Populate modalData popUP window dynamically 🥤
const seeProjectBtn = document.querySelectorAll('.see-project');
seeProjectBtn.forEach((item, index) => {
  item.addEventListener('click', () => {
    const project = myProjects[index];
    const modal = document.querySelector('.modal-container');
    const projectTitle = modal.querySelector('.modal-card-title');
    projectTitle.textContent = project.name;
    const projectDesc = modal.querySelectorAll('.modal-primary-text');
    const [mobileDesc, desktopDesc] = projectDesc;
    mobileDesc.textContent = project.description;
    desktopDesc.textContent = project.description;
    projectDesc.textContent = project.description;
    const projectMobileImage = modal.querySelector('.mobile-image');
    projectMobileImage.src = project.featuredImage;
    const projectDesktopImage = modal.querySelector('.desktop-image');
    projectDesktopImage.src = project.featuredImage;
    const liveLink = modal.querySelector('.live-link');
    liveLink.href = project.liveVersion;
    const liveSourceCode = modal.querySelector('.source-code');
    liveSourceCode.href = project.sourceCode;
    const allTech = modal.querySelector('.modal-tags');
    allTech.innerHTML = project.technology.filter((tech) => tech.length < 13).map((tech, index) => `<li class="modal-tag ${((index >= 3 && index <= 5) ? 'hide-for-mobile' : '')}">${tech}</li>`).join('');

    modal.style.display = 'flex';
  });
});

const modalCancelBtn = document.querySelector('.modal-cancel-image');
modalCancelBtn.addEventListener('click', () => {
  const removeModalContainer = document.querySelector('.modal-container');
  removeModalContainer.style.display = 'none';
});

// Contact Form Validation ⏹️
const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  if (emailInput.value.toLowerCase() !== emailInput.value) {
    e.preventDefault();
    errorMessage.style.cssText = 'color: red; background: white; border: 1px solid red; border-radius: 4px; text-align: center';
    errorMessage.textContent = 'Please, use lowercase letters for your email address';

    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 2000);
  }
});

// Preserve Data in LocalStorage milestone 🏦
const preserveFormData = () => {
  const form = document.querySelector('#contact-form');
  let formDetails = { name: '', email: '', message: '' };
  if (window.localStorage.getItem('profile')) {
    const getProfile = window.localStorage.getItem('profile');
    formDetails = JSON.parse(getProfile);
    form.username.value = formDetails.name;
    form.email.value = formDetails.email;
    form.message.value = formDetails.message;
  }

  form.addEventListener('input', () => {
    formDetails.name = form.username.value;
    formDetails.email = form.email.value;
    formDetails.message = form.message.value;
    window.localStorage.setItem('profile', JSON.stringify(formDetails));
  });
};
preserveFormData();

// View the List of Languages, Frameworks and Skills 🧑‍💻
const skillListContainer = document.querySelector('.skill-lists');
const arrowRightBtn = skillListContainer.querySelectorAll('.arrow-right');

arrowRightBtn.forEach((item, index) => {
  const languageList = skillListContainer.querySelector('.language-list');
  const frameWorkList = skillListContainer.querySelector('.frame-work-list');
  const mySkills = skillListContainer.querySelector('.my-skills');
  let isOpened = false;
  item.addEventListener('click', () => {
    isOpened = !isOpened;
    if (index === 2) mySkills.classList.toggle('active');
    if (index === 1) frameWorkList.classList.toggle('active');
    if (index === 0) languageList.classList.toggle('active');
    item.src = !isOpened ? './images/arrowright.svg' : './images/arrowdown.svg';
  });
});
