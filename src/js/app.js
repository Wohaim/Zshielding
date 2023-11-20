const ToggleMenu = document.getElementById('toggle-menu');
const NavMenu = document.querySelector('.nav-menu');
const Nav = document.querySelector('.nav');
const NavHome = document.querySelector('.nav-home');
const MobileBar = document.querySelectorAll('.bar');

ToggleMenu.addEventListener('click', () => {
  NavMenu.classList.toggle('active');
  Nav.classList.toggle('active');

  MobileBar.forEach((props) => {
    props.classList.toggle('active');
  });
});

window.addEventListener('scroll', () => {
  const headerScroll = document.querySelector('.header');
  if (this.scrollY >= 80 && this.innerWidth <= 1024) {
    headerScroll.classList.add('scroll-header');
  } else headerScroll.classList.remove('scroll-header');
});
