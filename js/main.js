const hamburgerToggle = document.getElementById('hamburger');
const menuExpand = document.querySelector('.nav-links');
const nav = document.querySelector('.navigation');

hamburgerToggle.addEventListener('click', () => {
  hamburgerToggle.classList.toggle('expanded');
  menuExpand.classList.toggle('expanded');
});

const handleNav = () => {
  nav.classList.toggle('scroll', window.scrollY > 150);
};

window.addEventListener('scroll', handleNav);
