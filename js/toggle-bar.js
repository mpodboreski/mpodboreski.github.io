function classToggle() {
  const navs = document.querySelectorAll('.nav-bar-items')
  
  navs.forEach(nav => nav.classList.toggle('nav-bar-ToggleShow'));
}
document.querySelector('.nav-bar-toggle')
  .addEventListener('click', classToggle);