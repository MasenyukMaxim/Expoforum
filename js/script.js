// меню бургер

const menuButton = document.querySelector(".menu-button");
if (menuButton) {
   const menuBody = document.querySelector(".menu__body");
   menuButton.addEventListener("click", function (event) {
      menuButton.classList.toggle("_active");
      menuBody.classList.toggle("_active");
   });
}

// кнопка поиска





const searchButton = document.querySelector(".search__button");
const searchInput = document.querySelector(".search__input");
if (searchButton) {
   const search = document.querySelector(".search");
   searchButton.addEventListener("click", function (event) {
      const windowWidth = window.innerWidth;
      search.classList.toggle("_active");
      searchInput.classList.toggle("_active");
      if (!searchInput.classList.contains("_active")) {
         const input = searchInput.querySelector("input");
         input.value = "";
      }
      if (searchInput.classList.contains("_active") && windowWidth <= 370) {
         console.log("Search");
         translateText.classList.remove("_active");
      }
   });
}

// смена языка

const translateText = document.querySelector(".translate__text");

if (translateText) {
   translateText.addEventListener("click", function (event) {
      const txtContent = translateText.textContent;
      if (txtContent === "English") {
         translateText.textContent = "Русский";
      } else {
         translateText.textContent = "English";
      }
   });
}

// кнопка смены языка

const translateButton = document.querySelector(".translate__button");

if (translateButton) {
   translateButton.addEventListener("click", function (event) {
      const windowWidth = window.innerWidth;
      translateText.classList.toggle("_active");
      translateButton.classList.toggle("_active");
      if (translateText.classList.contains("_active") && windowWidth <= 370) {
         console.log("Language");
         searchInput.classList.remove("_active");
      }
   });
}

const screen = window.matchMedia("(max-width: 369.98px)");
let key = true;
window.addEventListener("resize", function (event) {
   if (screen.matches && key) {
      searchInput.classList.remove("_active");
      translateText.classList.remove("_active");
      key = false;
   } else {
      key = true;
   }
});

// исчезновение в поле email

const emailButton = document.querySelector(".menu-footer-subscribe__button");
emailButton.addEventListener("click", function (event) {
   const inputEmail = document.querySelector(".menu-footer-subscribe__field-email");
   inputEmail.value = "";
});