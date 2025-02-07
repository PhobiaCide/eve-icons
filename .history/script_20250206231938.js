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
  static getCurrentMode() {
    return document.body.dataset.bsTheme;
  }
  static getPlatform() {
    return (window.innerWidth < 768 ? "mobile" : "desktop")
  }
  static updateStylesheet() {
    document.getElementById(
      "topcoat"
    ).href = `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${ModeHandler.getPlatform()}-${ModeHandler.getCurrentMode()}.min.css`;
  }
  static updateMode(mode) {
    body.dataset.bsTheme = mode;
  }
}
