const root = document.documentElement;

function applyThemeBasedOnPage() {
  const currentPage = window.location.pathname;

  if (
    currentPage === "/page1.html" ||
    currentPage === "/page1" ||
    currentPage === "/"
  ) {
    root.style.setProperty("--color-secondary", "#c56981");
    root.style.setProperty("--color-accent", "#545c7e");
  } else if (currentPage === "/design/index.html") {
    root.style.setProperty("--color-secondary", "#545c7e");
    root.style.setProperty("--color-accent", "#c56981");
  }
}

applyThemeBasedOnPage();
