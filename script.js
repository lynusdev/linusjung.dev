// SECTION TITLE & FOOTER
const sectionTitles = document.querySelectorAll(".section__title");
const sectionContainers = document.querySelectorAll(".section__container");
const sectionFooters = document.querySelectorAll(".section__footer");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("fade", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
  }
);

sectionTitles.forEach((title) => {
  observer.observe(title);
});

sectionFooters.forEach((footer) => {
  observer.observe(footer);
});

// SECTION CONTAINER

const observerContainer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("left-fade", entry.isIntersecting);
      if (entry.isIntersecting) observerContainer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.3,
  }
);

sectionContainers.forEach((container) => {
  observerContainer.observe(container);
});

// THEME TOGGLE

let toggle = document.getElementById("theme-toggle");
toggle.innerHTML = `<i class="ph ph-sun"></i>`;

document.documentElement.setAttribute("data-theme", "dark");

toggle.onclick = function () {
  let currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    toggle.classList.add("toggle-anim");
    toggle.innerHTML = `<i class="ph ph-moon"></i>`;
  } else if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.classList.remove("toggle-anim");
    toggle.innerHTML = `<i class="ph ph-sun"></i>`;
  }
};
