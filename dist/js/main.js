navbar = document.getElementById('navbar');

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-64px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

const showBtn = document.querySelector('#show-btn');
const hideBtn = document.querySelector('#hide-btn');
const about = document.querySelector('#about');
const aboutNav = document.querySelector('#about-nav');
showBtn.addEventListener('click', function () {
  if (about.style.display == 'block') {
    about.style.display = 'none';
    showBtn.innerText = 'Więcej o mnie';
  } else {
    about.style.display = 'block';
    showBtn.innerText = 'Zwiń o mnie';
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
    });
  }
});

hideBtn.addEventListener('click', function () {
  about.style.display = 'none';
  showBtn.innerText = 'Więcej o mnie';
  document.getElementById('home').scrollIntoView({
    behavior: 'smooth',
  });
});

aboutNav.addEventListener('click', function () {
  about.style.display = 'block';
  showBtn.innerText = 'Zwiń o mnie';
  document.getElementById('home').scrollIntoView({
    behavior: 'smooth',
  });
});

const showTechBtn = document.querySelector('#show-technologies-more-btn');
const hideTechBtn = document.querySelector('#hide-technologies-more-btn');
const tech = document.querySelector('#technologies-more');
showTechBtn.addEventListener('click', function () {
  if (tech.style.display == 'block') {
    tech.style.display = 'none';
    showTechBtn.innerText = 'Więcej o technologiach';
  } else {
    tech.style.display = 'block';
    showTechBtn.innerText = 'Zwiń';
    document.getElementById('technologies-more').scrollIntoView({
      behavior: 'smooth',
    });
  }
});

hideTechBtn.addEventListener('click', function () {
  tech.style.display = 'none';
  showTechBtn.innerText = 'Więcej o technologiach';
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth',
  });
});
