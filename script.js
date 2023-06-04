function darkMode() {
  const toggleButton = document.querySelector(
    "#dark-light-toggle .button-front"
  );
  const body = document.body;

  const buttonText = toggleButton.innerText;
  toggleButton.innerText = buttonText === "dark" ? "light" : "dark";

  body.classList.toggle("dark-mode");
}
