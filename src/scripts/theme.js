const root = document.documentElement;

function applySavedTheme() {
  const savedScheme = localStorage.getItem("colorScheme");
  if (savedScheme === "alternate") {
    root.style.setProperty("--color-secondary", "#545c7e");
    root.style.setProperty("--color-accent", "#c56981");
  }
}

applySavedTheme();

function switchColorScheme() {
  const currentSecondary = getComputedStyle(root)
    .getPropertyValue("--color-secondary")
    .trim();

  if (currentSecondary === "#c56981") {
    root.style.setProperty("--color-secondary", "#545c7e");
    root.style.setProperty("--color-accent", "#c56981");
    localStorage.setItem("colorScheme", "alternate");
  } else {
    root.style.setProperty("--color-secondary", "#c56981");
    root.style.setProperty("--color-accent", "#545c7e");
    localStorage.setItem("colorScheme", "default");
  }
}
