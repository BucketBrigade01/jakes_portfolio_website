const sections = document.querySelectorAll(
  "#hero, #about, #contact, #header, #footer, #projects",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

// Observe each section
sections.forEach((section) => observer.observe(section));
