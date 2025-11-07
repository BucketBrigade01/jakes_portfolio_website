const sections = document.querySelectorAll(
  "#hero, #about, #contact, #header, #footer, #projects",
);

const contact = document.getElementsByClassName("basic-contact");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

// Observe each section
sections.forEach((section) => observer.observe(section));
