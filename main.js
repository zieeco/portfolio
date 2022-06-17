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

document.querySelector('.menu').addEventListener('click', () => {
  menuDiv.style.display = 'flex';
  document.getElementById('header').style.filter = 'blur(0.3125rem)';
});

menuDiv.querySelector('img.x-menu').addEventListener('click', () => {
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
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR",
    featuredImage: './images/SnapshootDesktopPortfolioC.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: 'https://zieeco.github.io/portfolio/',
    sourceCode: 'https://github.com/zieeco/portfolio',
  },

  {
    name: 'Uber Navigation',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImage: './images/SnapshootDesktopPortfolioD.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: 'https://zieeco.github.io/portfolio/',
    sourceCode: 'https://github.com/zieeco/portfolio',
  },
];

// works section dynamic layout
const workSection = document.querySelector('.works');
const populateProjects = (myProjects) => {
  workSection.innerHTML = '';
  let display = '';
  myProjects.forEach((project, index) => {
    display += `
      <ul class="project-works row-reverse-desktop">
        <li class="project-image-container">
          <img src="./images/SnapshootPortfolioB.svg" alt="Tonic" class="mobile-image">
          <img src="./images/SnapshootDesktopPortfolioB.svg" alt="Tonic" class="desktop-image">
        </li>
        <li class="project-body-block">
          <h2 class="project-title">${project.name}</h2>
          <div class="project-info">
            <span class="project-info-items canopy hide-for-desktop">CANOPY</span>
            <span class="project-info-items canopy hide-for-mobile">FACEBOOK</span>
            <img src="./images/Counter.svg" alt="counter">
            <span class="project-info-items hide-for-desktop">Back End Dev</span>
            <span class="project-info-items hide-for-mobile dsk-fw">Full Stack Dev</span>
            <img src="./images/Counter.svg" alt="counter">
            <span class="project-info-items">2015</span>
          </div>
          <p class="project-primary-text hide-for-desktop">A daily selection of privately personalized reads; no
            accounts or sign-ups
            required.</p>
          <p class="project-primary-text hide-for-mobile">Experimental content creation feature that allows users to add
            to an existing story over the course of a day without
            spamming their friends.</p>
          <ul class="tags">
            <li class="tag">html</li>
            <li class="tag hide-for-mobile">Ruby on rails</li>
            <li class="tag">css</li>
            <li class="tag">javaScript</li>
          </ul>
          <button id=${index + 1} class="button  see-project" type="button" onClick="console.log(id)">See Project</button>
        </li>
      </ul>`
  });
  workSection.innerHTML = display;
}
populateProjects(myProjects);