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
}
class ModeHandler {
  constructor() {
    this.mode = ModeHandler.getCurrentMode();
    this.button = document.getElementById("dark-light-toggle");
    this.buttonFace = this.button.querySelector(".button-front");
    this.stylesheet = document.getElementById("topcoat");
    this.button.addEventListener("click", () => {
      this.mode = ModeHandler.toggleMode(ModeHandler.getCurrentMode());
      ModeHandler.updateMode();
      ModeHandler.updateButton();
      ModeHandler.updateStylesheet();
    })
  }
  static toggleMode(mode) {
    if (mode === "light") {
      return "dark";
    } else {
      return "light";
    }
  }
  static getCurrentMode() {
    return document.body.dataset.bsTheme;
  }
  static getPlatform() {
    return (window.innerWidth < 768 ? "mobile" : "desktop")
  }
  static updateStylesheet() {
    this.stylesheet.href = `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${ModeHandler.getPlatform()}-${ModeHandler.getCurrentMode()}.min.css`;
  }
  static updateMode() {
    document.body.dataset.bsTheme = this.mode;
  }
  static updateButton() {
    this.buttonFace.innerText = toggleMode(this.mode);
  }
}
new ModeHandler();