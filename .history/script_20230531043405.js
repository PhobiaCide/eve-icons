function darkMode() {
  const toggleButton = document.querySelector('#dark-light-toggle .button-front');
  const body = document.body;

  const buttonText = toggleButton.innerText;
  toggleButton.innerText = (buttonText === 'dark mode') ? 'light mode' : 'dark mode';

  body.classList.toggle('dark-mode');
}
