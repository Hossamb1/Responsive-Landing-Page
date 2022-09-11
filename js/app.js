// Start variables
const sections = document.querySelectorAll("section");
const navbarList = document.querySelector(".navbar_list");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");
// End variables

// Building the navigationBar
for (i = 1; i <= sections.length; i++) {
  // adding naviagtion items dynamically
  const list = document.createElement("li");
  const nav = document.querySelector("ul");
  const button = document.createElement("button");
  button.className = "section" + i;
  button.innerText = "Section " + i;
  list.appendChild(button);
  nav.appendChild(list);

  // linking naviagtion items to the sections
  button.addEventListener("click", function (E) {
    const sec = document.getElementById(
      "section" + E.target.className[E.target.className.length - 1]
    );
    const postionY = sec.offsetTop - 100;
    console.log(postionY);
    window.scrollTo({ left: 0, top: postionY, behavior: "smooth" });
  });
}

// Navbar menu for responsive mode
menu.addEventListener("click", function () {
  if (navbarList.className === "navbar_list") {
    navbarList.className += " responsive";
  } else {
    navbarList.className = "navbar_list";
  }
});

// Hide naviagtionBar when scrolling
let isScrolling;

window.addEventListener(
  "scroll",
  function () {
    header.className = "header";
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      header.className += " show";
    }, 500);
  },
  false
);
// Set class "active" when scrolling throw the current section

window.addEventListener("scroll", function () {
  for (i = 1; i <= sections.length; i++) {
    const section = document.getElementById("section" + i);
    const postionY = section.getBoundingClientRect().y;
    const link = document.querySelector(".section" + i);
    if (postionY <= this.innerHeight / 2) {
      this.setTimeout(() => {
        // Add class "active" to the section
        const active = document.getElementsByClassName("active");
        active[0].className = "";
        section.className = "active";

        // Add class "running" to the naviagationBar items
        const runs = document.getElementsByClassName("running");
        if (runs.length > 0) {
          runs[0].classList.remove("running");
        }
        link.classList.add("running");
      }, 100);
    }
  }
});

// scroll-to-top button
const topButton = document.querySelector(".totop");

window.addEventListener("scroll", function () {
  this.scrollY >= 1000
    ? this.setTimeout(() => {
        topButton.style.display = "block";
      }, 100)
    : (topButton.style.display = "none");
});
topButton.onclick = function () {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
