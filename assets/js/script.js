'use strict';

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// toggle and overlay on navbar link
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// header scroll and go-to-top button
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// FAQ Accordion 
const accordionItems = document.querySelectorAll(".accordion-item");

const toggleAccordion = (index) => {
    resetAccordions(index);

    const currentAccordion = accordionItems[index];
    currentAccordion.classList.toggle("is-active");

    const accordionContent = currentAccordion.querySelector(".accordion-content");
    const accordionTrigger = currentAccordion.querySelector(".accordion-trigger");

    if (currentAccordion.classList.contains("is-active")) {
        accordionContent.style.height = `${accordionContent.scrollHeight}px`;
        accordionTrigger.setAttribute("aria-expanded", "true");
    } else {
        accordionContent.style.height = 0;
        accordionTrigger.setAttribute("aria-expanded", "false");
    }
};

const resetAccordions = (targetIndex) => {
    accordionItems.forEach((accordion, index) => {
        const accordionContent = accordion.querySelector(".accordion-content");
        const accordionTrigger = accordion.querySelector(".accordion-trigger");

        if (targetIndex != index) {
        accordion.classList.remove("is-active");
        accordionContent.style.height = 0;
        accordionTrigger.setAttribute("aria-expanded", "false");
        }
    });
};

window.addEventListener("load", () => {
    accordionItems.forEach((accordion, index) => {
        const accordionTrigger = accordion.querySelector(".accordion-trigger");
        accordionTrigger.addEventListener("click", () => toggleAccordion(index));
    });
});