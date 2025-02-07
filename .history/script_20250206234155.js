/*
function darkMode() {
  const buttonFace = document.querySelector("#dark-light-toggle .button-front");
  const body = document.body;
  const getPlatform = () => (window.innerWidth < 768 ? "mobile" : "desktop");
  const buttonText = buttonFace.innerText;
  if (buttonText === "dark") {
    buttonFace.innerText = "light";
    body.dataset.bsTheme = "light";
    document.getElementById(
      "topcoat"
    ).href = `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${getPlatform()}-light.min.css`;
  } else {
    buttonFace.innerText = "dark";
    body.dataset.bsTheme = "dark";
    document.getElementById(
      "topcoat"
    ).href = `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${getPlatform()}-dark.min.css`;
  }
}*/
class ModeHandler {
  constructor() {
    this.mode = ModeHandler.getCurrentMode();
    this.button = document.getElementById("dark-light-toggle");
    this.buttonFace = document.querySelector("#dark-light-toggle .button-front");
    this.stylesheet = document.getElementById("topcoat");

    this.button.addEventListener("click", () => {
      this.mode = ModeHandler.toggleMode(this.mode);
      this.updateMode();
      this.updateButton();
      this.updateStylesheet();
    });

    this.updateButton(); // Ensure button text is set correctly on load
  }

  static toggleMode(mode) {
    return mode === "light" ? "dark" : "light";
  }

  static getCurrentMode() {
    return document.body.dataset.bsTheme;
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
}

// Initialize the mode handler
new ModeHandler();
