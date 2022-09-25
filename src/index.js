import 'normalize.css'
import './styles/main.scss';

const headerDomElement = document.querySelector(".header");
const headerSiteNav = document.querySelector(".header__nav");
const burgerButton = document.querySelector(".header__menu");

//выпадающее меню сайта
function toggleSiteNav() {
  headerSiteNav.classList.toggle("header__nav_active");
  burgerButton.classList.toggle("header__menu_active");
}

burgerButton.addEventListener("click", toggleSiteNav);

//если нажали мимо меню хедера,то попап закроется

document.addEventListener("click", (e) => {
  if (
    !e.path.includes(headerDomElement) &&
    headerSiteNav.classList.contains("header__nav_active")
  ) {
    toggleSiteNav();
  }
})
