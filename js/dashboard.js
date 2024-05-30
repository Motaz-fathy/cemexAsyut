
document
.querySelector(".userDropdown")
.addEventListener("click", function (event) {
  event.preventDefault();
  const dropdownMenu = document.querySelector(".userDropdownMenu");
  if (dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.remove("hidden");
    dropdownMenu.classList.remove("dropdown-animation-leave");
    dropdownMenu.classList.add("dropdown-animation-enter");
  } else {
    dropdownMenu.classList.remove("dropdown-animation-enter");
    dropdownMenu.classList.add("dropdown-animation-leave");
    setTimeout(() => {
      dropdownMenu.classList.add("hidden");
    }, 300);
  }
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
const dropdownMenu = document.querySelector(".userDropdownMenu");
if (
  !event.target.closest(".userDropdown") &&
  !event.target.closest(".userDropdownMenu")
) {
  if (!dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.remove("dropdown-animation-enter");
    dropdownMenu.classList.add("dropdown-animation-leave");
    setTimeout(() => {
      dropdownMenu.classList.add("hidden");
    }, 300); // Match the duration of the leave animation
  }
}
};

document
.getElementById("driverViolationBtn")
.addEventListener("click", function () {
  const menu = document.getElementById("driverViolationMenu");
  menu.classList.toggle("hidden");
  this.querySelector("svg").classList.toggle("rotate-180");
});

document
.getElementById("emplViolationBtn")
.addEventListener("click", function () {
  const menu = document.getElementById("emplViolationMenu");
  menu.classList.toggle("hidden");
  this.querySelector("svg").classList.toggle("rotate-180");
});

document
.getElementById("toggleSidebar")
.addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");

  sidebar.classList.toggle("w-72");
  sidebar.classList.toggle("w-0");
});

document
.getElementById("toggleSidebar2")
.addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");

  sidebar.classList.toggle("w-72");
  sidebar.classList.toggle("w-0");
});

// dropdowns
const alertsDropdown = document.getElementById("alertsDropdown");
const alertsDropdownMenu = document.getElementById("alertsDropdownMenu");

// Toggle dropdown menu visibility
alertsDropdown.addEventListener("click", function (e) {
e.preventDefault();
alertsDropdownMenu.classList.toggle("hidden");
alertsDropdownMenu.classList.toggle("dropdown-animation-enter");

// Close dropdown on click outside
document.addEventListener("click", closeDropdown);
});

function closeDropdown(event) {
const isClickInside = alertsDropdown.contains(event.target);
if (!isClickInside) {
  alertsDropdownMenu.classList.add("dropdown-animation-leave");
  setTimeout(() => {
    alertsDropdownMenu.classList.remove(
      "dropdown-animation-enter",
      "dropdown-animation-leave"
    );
    alertsDropdownMenu.classList.add("hidden");
  }, 300); // Animation duration
  document.removeEventListener("click", closeDropdown);
}
}

// Remove animation classes on animation end
alertsDropdownMenu.addEventListener("animationend", function () {
alertsDropdownMenu.classList.remove(
  "dropdown-animation-enter",
  "dropdown-animation-leave"
);
});


window.addEventListener('load', function() {
  var spinnerWrapper = document.getElementById('spinner-wrapper');
  var content = document.getElementById('content');
  
  spinnerWrapper.style.display = 'none'; // Hide spinner
  content.style.display = 'block'; // Show content
});
