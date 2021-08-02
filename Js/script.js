const sideNav = document.querySelector(".sidenav");
const btnToggle = document.querySelector(".btn-toggle");

function showSideNav() {
  sideNav.classList.toggle("active");
}

btnToggle.addEventListener("click", showSideNav);
