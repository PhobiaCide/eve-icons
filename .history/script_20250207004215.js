class ModeHandler {
  constructor() {
    this.mode = ModeHandler.getPreferredMode();
    this.button = document.getElementById("dark-light-toggle");
    this.buttonFace = document.querySelector("#dark-light-toggle .button-front");
    this.stylesheet = document.getElementById("topcoat");

    this.button.addEventListener("click", () => {
      this.mode = ModeHandler.toggleMode(this.mode);
      this.updateMode();
      this.updateButton();
      this.updateStylesheet();
      ModeHandler.saveMode(this.mode); // Persist user preference
    });

    this.updateMode(); // Ensure the mode is applied on page load
    this.updateButton(); // Ensure button text is set correctly
    this.updateStylesheet(); // Apply correct stylesheet

    // Listen for system preference changes and update the theme dynamically
    ModeHandler.observeSystemThemeChange(this);
  }

  static toggleMode(mode) {
    return mode === "light" ? "dark" : "light";
  }

  static getCurrentMode() {
    return document.body.dataset.bsTheme;
  }

  static getPreferredMode() {
    return (
      localStorage.getItem("theme") || // User preference from local storage
      ModeHandler.getCurrentMode() || // Check existing theme on body
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") // System preference
    );
  }

  static saveMode(mode) {
    localStorage.setItem("theme", mode);
  }

  static getPlatform() {
    return window.innerWidth < 768 ? "mobile" : "desktop";
  }

  updateStylesheet() {
    this.stylesheet.href = `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${ModeHandler.getPlatform()}-${this.mode}.min.css`;
  }

  updateMode() {
    document.body.dataset.bsTheme = this.mode;
  }

  updateButton() {
    this.buttonFace.innerText = ModeHandler.toggleMode(this.mode);
  }

  static observeSystemThemeChange(instance) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (event) => {
      if (!localStorage.getItem("theme")) {
        instance.mode = event.matches ? "dark" : "light";
        instance.updateMode();
        instance.updateButton();
        instance.updateStylesheet();
      }
    });
  }
}

// Initialize the mode handler
new ModeHandler();
