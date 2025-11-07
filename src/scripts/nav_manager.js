const navbar = document.getElementById("navbar");

function openSidebar() {
  console.log("open sidebar");
  navbar.classList.add("slide");
  console.log(navbar.classList);
}

function closeSidebar() {
  navbar.classList.remove("slide");
}
