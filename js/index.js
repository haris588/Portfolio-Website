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

const animateIntro = () => {
  window.addEventListener("load", () => {
    document.querySelector('.intro-img').classList.add('toTop')
    document.querySelector('.section-subtitle--intro').classList.add('width')
  });
}

const animateAboutMe = () => {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll >= 750) {
      document.querySelector('.about-me-body').classList.add('toRight')
      document.querySelector('.about-me-img--container').classList.add('toLeft')
    }
  });
}

const animateCertifications = () => {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll >= 1650) {
      document.querySelector('.bootcamps--container-left').classList.add('toRight');
      document.querySelector('.bootcamps--container-right').classList.add('toLeft');
    }
  });
}

animateIntro()
animateAboutMe()
animateCertifications()