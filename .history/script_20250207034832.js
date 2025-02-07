const DEBUG = true;

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
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
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

document.addEventListener("DOMContentLoaded", function () {
  // Count all <li> items inside the specified list
  const list = document.getElementById("icons-list");
  const listItems = list.querySelectorAll("li");
  const listItemCount = listItems.length;

  // Get all <symbol> elements inside <defs> (SVG icon definitions)
  const svgSymbols = document.querySelectorAll("svg defs symbol");
  const svgSymbolCount = svgSymbols.length;

  // Extract all available symbol IDs
  const availableIcons = new Set(
    [...svgSymbols].map((symbol) => `#${symbol.id}`)
  );

  // Get all <use> elements inside <svg> (Displayed icons)
  const usedIcons = new Set(
    [...document.querySelectorAll(".topcoat-list__container svg use")].map(
      (use) => use.getAttribute("xlink:href")
    )
  );

  // Find missing icons (available in <defs> but not used in the list)
  const missingIcons = [...availableIcons].filter(
    (icon) => !usedIcons.has(icon)
  );

  // Get all <linearGradient> elements and extract their IDs
  const gradients = document.querySelectorAll("svg defs linearGradient");
  const gradientIds = [...gradients].map((gradient) => {
    return `<div style="background: url(#${gradient.id}); background-size: cover;">${gradiend.id}</div>`;
  });

  // Display the number of icons in the page content
  const resultContainer = document.createElement("div");
  resultContainer.className = "icon-count-alert";
  resultContainer.innerHTML = `
    <strong>Displayed Icons:</strong> ${listItemCount} | 
    <strong>Available Icons:</strong> ${svgSymbolCount} |
    <strong>Missing Icons:</strong> ${missingIcons.length}
    <br>
    ${
      missingIcons.length > 0
        ? `<strong>Unused Icons:</strong> ${missingIcons.join(", ")}`
        : "✅ All icons are used!"
    }
    <br>
    <strong>Gradients Found:</strong> ${
      gradientIds.length
    } | ${gradientIds.join(", ")}
  `;
  document.querySelector("main.container").prepend(resultContainer);

  // Apply gradient background to each gradient ID found
  gradientIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.background = `url(#${id})`;
      element.style.backgroundSize = "cover";
    }
  });

  // Log the missing icons and gradients in the console
  if (missingIcons.length > 0) {
    console.warn(`⚠️ The following icons are not displayed:`, missingIcons);
  }

  console.log(`🎨 Found Linear Gradients:`, gradientIds);
});
