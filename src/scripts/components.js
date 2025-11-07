// Header Component
class BasicHeader extends HTMLElement {
  connectedCallback() {
    const theme = this.getAttribute("theme");
    if (theme === "basic") {
      this.innerHTML = `
        <header class="breakout">
          <button id="nav-open-button" onclick="openSidebar()"><svg class="menue-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg></button>
          <nav>
              <div class="nav-items">
                  <div class="nav-logo">
                      <h3>JAKE</h3>
                  </div>
                  <ul>
                      <li><a onclick="closeSidebar()" href="#about">ABOUT</a></li>
                      <li><a onclick="closeSidebar()" href="#projects">PROJECTS</a></li>
                      <li><a onclick="closeSidebar()" href="#contact">CONTACT</a></li>
                      <li><a onclick="closeSidebar()" href="assets/documents/jakes-resume.pdf" target="_blank">RESUME</a></li>
                      <li class="accent"><a onclick="closeSidebar(); switchColorScheme()" href="design/index.html">DESIGN</a></li>
                  </ul>
              </div>
          </nav>
          <button id="nav-close-button" onclick="closeSidebar()">X</button>
      </header>`;
    } else if (theme === "design") {
      this.innerHTML = `
        <header id="header" class="breakout">
          <button id="nav-open-button" onclick="openSidebar()"><svg class="menue-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg></button>
          <nav>
              <div class="nav-items">
                  <div class="nav-logo">
                      <h3>JAKE</h3>
                  </div>
                  <ul>
                      <li><a onclick="closeSidebar()" href="#about-design">ABOUT</a></li>
                      <li><a onclick="closeSidebar()" href="#gallery">GALLERY</a></li>
                      <li><a onclick="closeSidebar()" href="#contact">CONTACT</a></li>
                      <li><a onclick="closeSidebar()" href="../assets/documents/jakes-resume.pdf" target="_blank">RESUME</a></li>
                      <li class="accent"><a onclick="closeSidebar(); switchColorScheme()" href="../index.html">TECH</a></li>
                  </ul>
              </div>
          </nav>
          <button id="nav-close-button" onclick="closeSidebar()">X</button>
      </header>`;
    }
  }
}
customElements.define("basic-header", BasicHeader);

// Hero Component
class BasicHero extends HTMLElement {
  connectedCallback() {
    const filePath = this.getAttribute("file-path");

    this.innerHTML = `
      <section class="hero-section">
        <div class="hero-items">
            <div class="hero-image">
                <img src="${filePath}assets/art/hero_art.webp" alt="hero art">
            </div>
            <div class="hero-blurb">
                <h1>JAKE STYLES</h1>
                <h4>FRONT END - GRAPHIC DESIGN - GAME DEVELOPMENT</h4>
                <a href="#about">
                    <button class="default-button">LEARN MORE</button>
                </a>
            </div>
        </div>
    </section>`;
  }
}
customElements.define("basic-hero", BasicHero);

// Contact Component
class BasicContact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="contact-section">
          <form action="">
              <h4>CONTACT ME</h4>
              <input type="text" name="first" placeholder="First Name">
              <input type="text" name="last" placeholder="Last Name">
              <input type="email" name="email" placeholder="Email">
              <textarea name="your-message" placeholder="message"></textarea>
              <button type="submit" class="default-button">SEND</button>
          </form>
      </section>`;
  }
}
customElements.define("basic-contact", BasicContact);
