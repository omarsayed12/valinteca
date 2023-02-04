// *VARIABLES DEFINATION
let header = document.querySelector("header");
let menuBtn = document.querySelector(".menu-btn");
let hamburger = document.querySelector(".menu-btn__burger");

let nav = document.querySelector(".nav");
let menuNav = document.querySelector(".menu-nav");
let navItems = document.querySelectorAll(".menu-nav__item");
let teamCardsContainer = document.getElementById("teamsDeatailsContainer");

const nameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("tel");
const messageInput = document.getElementById("inputMessage");
const submitBtn = document.querySelector(".btn-send__message");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

//* Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");
if (mediaQuery.matches) {
  removeClassFromTeamCards();
}

//* Toogle Menue bar
function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

//* Disabled Owl Carousel and Remove Classes From Section Teams on Desktop
function removeClassFromTeamCards() {
  teamCardsContainer.classList.remove("card-slider", "owl-carousel", "owl-theme");
}

// * Active Header
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 250) {
    header.classList.add("activeHeader");
  } else {
    header.classList.remove("activeHeader");
  }
}

// * FancyBox Display Prohects Gallary
$(window).on("load", function () {
  $("[data-fancybox").fancybox({
    transitionDuration: 900,
    animationEffect: "zoom-in-out",
    transitionEffect: "zoom-in-out",
  });
});

//*Form Submit
const sendMessageToEmail = () => {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  fetch("https://formsubmit.co/ajax/omarkhashaba123@gmail.com", {
    method: "POST",
    headers: { "=Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: "FormSubmit",
      message: "I'm from Devro LABS",
    }),
  })
    .then(() => {
      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      messageInput.value = "";
      alert("successfully sent");
    })
    .catch(() => {
      // alert("something wrong happened");
    });
  console.log(formData);
};

// submitBtn.addEventListener("click", sendMessageToEmail);
