const menu = document.querySelector('.nav-links-header')

const iconmenu = document.querySelectorAll('.icon-menu-nav')

for (const button of iconmenu) {
  button.addEventListener('click', function () {
    menu.classList.toggle('show')
    button.classList.toggle('active')
  })
}
