document.addEventListener("DOMContentLoaded", function () {
  // Count all <li> items inside the specified list
  const list = document.getElementById("icons-list");
  const listItems = list.querySelectorAll("li");
  const listItemCount = listItems.length;

  // Get all <symbol> elements inside <defs> (SVG icon definitions)
  const svgSymbols = document.querySelectorAll("svg defs symbol");
  const svgSymbolCount = svgSymbols.length;

  // Extract all available symbol IDs
  const availableIcons = new Set([...svgSymbols].map(symbol => `#${symbol.id}`));

  // Get all <use> elements inside <svg> (Displayed icons)
  const usedIcons = new Set(
    [...document.querySelectorAll(".topcoat-list__container svg use")].map(use => use.getAttribute("xlink:href"))
  );

  // Find missing icons (available in <defs> but not used in the list)
  const missingIcons = [...availableIcons].filter(icon => !usedIcons.has(icon));

  // Display the number of icons in the page content
  const resultContainer = document.createElement("div");
  resultContainer.className = "icon-count-alert";
  resultContainer.innerHTML = `
    <strong>Displayed Icons:</strong> ${listItemCount} | 
    <strong>Available Icons:</strong> ${svgSymbolCount} |
    <strong>Missing Icons:</strong> ${missingIcons.length}
    <br>
    ${missingIcons.length > 0 ? `<strong>Unused Icons:</strong> ${missingIcons.join(", ")}` : "✅ All icons are used!"}
  `;
  document.querySelector("main.container").prepend(resultContainer);

  // Log the missing icons in the console
  if (missingIcons.length > 0) {
    console.warn(`⚠️ The following icons are not displayed:`, missingIcons);
  }
});
