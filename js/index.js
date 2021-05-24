const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link')


navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

const animatePhoto = () => {
  window.addEventListener("load", () => {
    document.querySelector('.intro-img').classList.add('toTop')
    document.querySelector('.section-subtitle--intro').classList.add('width')
  });
}

const animateAboutMe = () => {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll >= 550 && currentScroll <= 1450) {
      document.querySelector('.about-me-body').classList.add('toRight')
      document.querySelector('.about-me-img--container').classList.add('toLeft')
    }
    else {
      document.querySelector('.about-me-body').classList.remove('toRight')
      document.querySelector('.about-me-img--container').classList.remove('toLeft')
    }
  });
}

animatePhoto()
animateAboutMe()