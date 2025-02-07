class ModeHandler {
  constructor() {
    this.mode = ModeHandler.getPreferredMode();
    this.button = document.getElementById("dark-light-toggle");
    this.buttonFace = this.button?.querySelector(".button-front");
    this.stylesheet = document.getElementById("topcoat");
    this.currentPlatform = ModeHandler.getPlatform();

    if (!this.button || !this.buttonFace || !this.stylesheet) return;

    this.button.addEventListener("click", () => {
      this.toggleMode();
    });

    this.updateUI();
    ModeHandler.observeSystemThemeChange(this);
    this.observeScreenWidthChange();
  }

  static toggleMode(mode) {
    return mode === "light" ? "dark" : "light";
  }

  static getPreferredMode() {
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  }

  static saveMode(mode) {
    localStorage.setItem("theme", mode);
  }

  static getPlatform() {
    return window.innerWidth < 768 ? "mobile" : "desktop";
  }

  updateStylesheet() {
    this.stylesheet.href = `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${this.currentPlatform}-${this.mode}.min.css`;
  }

  updateMode() {
    document.body.setAttribute("data-bs-theme", this.mode);
  }

  updateButton() {
    if (this.buttonFace) {
      this.buttonFace.innerText = this.mode === "light" ? "Dark" : "Light";
    }
  }

  updateUI() {
    this.updateMode();
    this.updateButton();
    this.updateStylesheet();
  }

  toggleMode() {
    this.mode = ModeHandler.toggleMode(this.mode);
    ModeHandler.saveMode(this.mode);
    this.updateUI();
  }

  static observeSystemThemeChange(instance) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (event) => {
      if (!localStorage.getItem("theme")) {
        instance.mode = event.matches ? "dark" : "light";
        instance.updateUI();
      }
    });
  }

  observeScreenWidthChange() {
    window.addEventListener("resize", () => {
      const newPlatform = ModeHandler.getPlatform();
      if (newPlatform !== this.currentPlatform) {
        this.currentPlatform = newPlatform;
        this.updateStylesheet();
      }
    });
  }
}

// Initialize the mode handler
new ModeHandler();
