function darkMode() {
  const doc = document;
  const html = doc.documentElement;
  const toggleButton = doc.getElementById('color-mode-toggle');
  const buttonFront = toggleButton.getElementsByClassName('button-front')[0];
  const buttonLabel = buttonFront.innerText;
  console.log(buttonLabel);
  buttonFront.innerText = (buttonLabel === 'dark') ? 'light' : 'dark';
  html.removeAttribute('data-bs-theme');
  html.setAttribute('data-bs-theme', buttonFront.innerText);
}