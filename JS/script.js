// Toggle class active on click
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menu di klik
document.querySelector('#humburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar menu akan menutup menu
const humburgerMenu = document.querySelector('#humburger-menu');
document.addEventListener('click', function (event) {
  var isClickInside = humburgerMenu.contains(event.target);
  if (!isClickInside) {
    navbarNav.classList.remove('active');
  }
});